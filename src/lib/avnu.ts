export async function getBestRoute(from: string, to: string, amount: string) {
  const res = await fetch(`https://starknet.api.avnu.fi/swap/v1/quotes?sellTokenAddress=${from}&buyTokenAddress=${to}&sellAmount=${amount}`);
  return await res.json();
}

export async function zapIn(amount: string) {
  console.log("Zapping in:", amount);
  // 1. Swap via Avnu
  // 2. Deposit to Vesu
  return { success: true };
}
