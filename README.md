# ⚡ StarkZap — Native One-Tap Yield Aggregator on Starknet

StarkZap drastically simplifies the Starknet DeFi UX by abstracting complex multi-step interactions into a single-tap transaction. Users can effortlessly route liquidity directly into native yield protocols without managing bridges, multi-token approvals, or manual swaps.

- **Live Application:** https://starkzap-one-tap-yield.vercel.app/
- **Target Ecosystem Track:** DeFi / Vesu Track & AVNU Aggregator Track
- **Developer Context:** Solo Builder | Agadir, Morocco (GitHub: jamal2000russia-del)
- **Verified Deployer Wallet:** 0x5608...8b87

## 🔍 The Problem & The Core Solution

### The Friction
Earning yield on Starknet traditionally presents heavy onboarding friction for users, requiring a minimum of 5 operational steps: bridging assets, interacting with a DEX aggregator, executing token approvals, navigating the native protocol interface, and finally depositing liquidity.

### The StarkZap UX
StarkZap leverages Starknet's native Account Abstraction capability to compress that funnel into **1 Click**. The architecture seamlessly bundles asset routing, smart routing via AVNU, and atomic deployment into Vesu's liquidity pools in a single execution multicall.

## 💰 Monetization & Fee Architecture

StarkZap implements a sustainable, low-friction monetization model hardcoded at the smart contract transaction layer:

- **Protocol Fee:** Fixed at **0.1%** per inbound Zap transaction.
- **Fee Execution Example (100 USDC):**
    - Total Input: 100.00 USDC
    - Protocol Fee (0.1%): 0.10 USDC (routed to builder contract/wallet)
    - Net Pool Injection: 99.90 USDC (Deposited automatically into Vesu)

## 🛠 Tech Stack & Integrations

- **Frontend Environment:** Clean HTML5, CSS3, and modern asynchronous JavaScript (ES6+).
- **Web3 Middleware:** `starknet.js` for encoding contract calls, handling account abstraction, and signing multicalls.
- **Integrations:**
    - **AVNU:** Utilized for hyper-efficient asset swap logic and optimized liquidity paths.
    - **Vesu:** Direct contract interactions for secondary lending market yield capture (Current APY benchmark: ~8.42%).
    - **Deployment Platform:** Vercel (Edge network configurations for rapid global loading).

## ✅ What is Live Now

- [x] **1-Tap Zap:** USDC → Vesu in 1 Click
- [x] **Withdraw / Un-Zap:** Withdraw back to wallet in 1 Click
- [x] **Live Fee Calculator:** Fee / Deposit / Yearly Yield updates in real-time
- [x] **Recent Zaps History**
- [x] **Connected Wallet UI:** 0x5608...8b87

## 🚀 Roadmap & Proposed Grant Milestones

If selected for the Starknet Foundation Seed Grant, funding will directly accelerate the delivery of the following production milestones:

### Milestone 1: Multi-Asset Inbound Zapping (Q1 2027)
- Integrate live multi-asset swaps via AVNU contracts so users can input ETH or STRK and auto-convert to Vesu yield positions in a single tap.

### Milestone 2: Atomic "Un-Zap" Withdrawal Portal - DONE ✅ (Live in Demo)
- ✅ Built the corresponding reverse pipeline allowing users to exit Vesu pools back to native gas or stablecoin in one transaction, adding a parallel 0.1% exit monetization model.
- **Next:** Connect Withdraw button to real Vesu withdraw contract (currently UI demo).

### Milestone 3: Smart Contract Security Audit & Verification (Q2 2027)
- Retain a reputable Starknet ecosystem security firm to audit the underlying Cairo contract logic and verify code integrity on Starkscan/Voyager.

## 🔑 Proof of Ownership
Deployer Wallet: `0x5608...8b87`
