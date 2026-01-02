# PokeFrame: Hybrid-Runtime Emulation Architecture

![Frontend](https://img.shields.io/badge/Presentation-Next.js_14_%2F_TypeScript-black?style=for-the-badge&logo=next.js)
![Core](https://img.shields.io/badge/Engine-Rust_%2F_WebAssembly-orange?style=for-the-badge&logo=rust)
![Scale](https://img.shields.io/badge/Deployments-500%2B_Success-success?style=for-the-badge)

**PokeFrame** is a consumer-facing application deployed on the Farcaster social protocol. It serves as a commercial bridge between social feeds and retro-gaming, utilizing a **Hybrid Architecture** where a Next.js frontend orchestrates a compiled Rust emulation core.

> **⚠️ Note:** This repository contains the **production build artifacts** and distribution logic. The core Rust emulation engine is proprietary.

---

## 🏗 System Architecture

The application utilizes a strict **Separation of Concerns** between the presentation layer and the computation layer:

### 1. The Presentation Layer (Next.js / TypeScript)
* **Role:** Handles Farcaster Frame validation, on-chain commerce (wallet connection, purchase signing), and UI state management.
* **Logic:** Manages the user session and "unlocks" the emulator view upon successful transaction verification on the blockchain.

### 2. The Computation Engine (Rust -> WASM)
* **Role:** A headless GameBoy emulator written entirely in **Rust** for memory safety and performance.
* **Integration:** The Rust core is compiled to **WebAssembly (WASM)** and bundled into the Next.js static assets.
* **Execution:** When the user loads the game, the Next.js app hydrates the WASM binary, allowing the Rust logic to take over the main thread for 60FPS rendering.

---

## 📊 Performance Metrics

* **Traffic Volume:** Successfully handled **500+ deployment cycles** and continuous user traffic during peak viral windows.
* **Optimization:** Achieved sub-200ms TTI (Time to Interactive) by lazy-loading the WASM binary only after purchase verification.
* **Stability:** Maintained 99.9% uptime during high-concurrency events on the Farcaster network.

---

## 📂 Artifact Structure

* `assets/` - Gzipped WASM binaries (The compiled Rust engine).
* `index.html` - The Next.js entry point.
* `verifier.js` - Client-side logic for verifying on-chain purchase receipts.

---
<div align="center">
  <sub>Developed by Vanguard Secure Solutions</sub>
</div>
