// api/webhook.ts - Vercel Node serverless function (nodejs18.x runtime)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { parseWebhookEvent, verifyAppKeyWithNeynar } from '@farcaster/frame-node';

const BACKEND_API = 'https://api.pokeframe.me';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
console.log('[Webhook] → Received request:', req.method, req.url);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'PokeFrame webhook active',
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const body = req.body;

    console.log('[Webhook] Raw Farcaster event:', JSON.stringify(body));
let data;
    // Verify the webhook with Farcaster
 try {
  data = await parseWebhookEvent(body, verifyAppKeyWithNeynar);
  console.log('[Webhook] ✅ Verified:', data);
} catch (err) {
  console.error('[Webhook] ❌ Verification failed:', err);
  return res.status(400).json({ success: false, error: 'Verification failed' });
}

    console.log('[Webhook] Verified event:', {
      event: data.event,
      fid: data.fid,
      timestamp: new Date().toISOString()
    });

    // Forward to backend processor
    const backendResponse = await fetch(`${BACKEND_API}/api/webhook/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: data.event,
        fid: data.fid,
        notificationDetails: data.notificationDetails,
        timestamp: new Date().toISOString()
      })
    });

    if (!backendResponse.ok) {
      console.error('[Webhook] Backend failed:', backendResponse.status);
      return res.status(200).json({
        success: true,
        message: 'Event received, backend processing failed'
      });
    }

    const result = await backendResponse.json();
    console.log('[Webhook] Backend result:', result);

    return res.status(200).json({
      success: true,
      message: 'Event processed successfully',
      event: data.event,
      fid: data.fid
    });

  } catch (error: any) {
    console.error('[Webhook] Error:', error);

    // Handle Farcaster signature errors properly
    if (error.name?.includes('VerifyJsonFarcasterSignature')) {
      const statusCode = error.name.includes('InvalidData') ? 400 : 401;
      return res.status(statusCode).json({
        success: false,
        error: 'Verification failed'
      });
    }

    return res.status(200).json({
      success: false,
      error: 'Processing error'
    });
  }
}
