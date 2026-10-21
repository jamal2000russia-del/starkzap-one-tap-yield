import { RpcProvider } from "starknet";
import { getQuotes } from "@avnu/avnu-sdk";

console.log("StarkZap V2 - One-Tap Yield App");

const provider = new RpcProvider({
  nodeUrl: "https://starknet-sepolia-rpc.publicnode.com"
});

const TOKENS = {
  STRK: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  USDC: "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"
};

async function main() {
  const block = await provider.getBlockNumber();
  console.log("Block:", block);

  console.log("\n--- PROJECT: One-Tap Yield ---");
  console.log("User flow:");
  console.log("1. User has STRK");
  console.log("2. Swap STRK -> USDC via AVNU");
  console.log("3. Supply USDC to Vesu for yield");
  console.log("4. All in one click, gasless!");

  try {
    const quotes = await getQuotes({
      sellTokenAddress: TOKENS.STRK,
      buyTokenAddress: TOKENS.USDC,
      sellAmount: BigInt("1000000000000000000"),
      takerAddress: "0x0000000000000000000000000000000000000001"
    }, { baseUrl: "https://sepolia.api.avnu.fi" });

    console.log("\nQuote success:", quotes.length > 0 ? "YES" : "NO");
    if (quotes[0]) {
      console.log("Buy amount:", quotes[0].buyAmount.toString());
    }
  } catch (e: any) {
    console.log("\nQuote error (normal on sepolia):", e.message.slice(0,100));
  }

  console.log("\n--- Next steps ---");
  console.log("1. Add Vesu SDK: npm install @vesu/sdk");
  console.log("2. Build UI with Next.js");
  console.log("3. Use StarkZap SDK for mainnet");
  console.log("\nReady for hackathon!");
}

main();
