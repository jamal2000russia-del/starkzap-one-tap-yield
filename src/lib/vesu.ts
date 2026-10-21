export const VESU_POOLS = {
  USDC: "0x04d8e4a5a5d6a5a8d5e4a5a5d6a5a8d5e4a5a5d6a5a8d5e4",
  STRK: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f48a68d"
}

export async function depositToVesu(amount: string) {
  console.log("Depositing to Vesu:", amount);
  // Vesu SDK integration here
  return { txHash: "0x...", pool: VESU_POOLS.USDC };
}
