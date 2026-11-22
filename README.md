# StarkZap - One Tap Yield on Starknet

**Live Demo:** https://starkzap-one-tap-yield.vercel.app

One-tap yield on Starknet using Vesu + Avnu. User deposits in 1 click, StarkZap finds the best route and deposits into Vesu for lending yield.

## Problem
Yield on Starknet is fragmented. User must swap, find pool, approve, deposit. Too many steps.

## Solution
StarkZap does it in 1 tap:
1. User picks token + amount
2. Avnu finds best swap route
3. Vesu for lending yield
4. Deposit + position in 1 transaction flow

## Features
- One-click Swap + Deposit
- Avnu for best swap routes
- Vesu for lending yield
- Built for Starknet

## Stack
- Starknet.js
- Vesu Finance SDK
- Avnu API
- TypeScript / HTML

## How to Run
npm install
npm run dev

## Roadmap
- [x] Core one-tap flow
- [ ] Live testnet demo
- [ ] Security audit
- [ ] Mainnet launch

Built by Djamal - Independent Web3 Security Researcher & Smart Contract Auditor
