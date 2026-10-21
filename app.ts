import { zapIn } from "./src/lib/avnu";
import { depositToVesu } from "./src/lib/vesu";

console.log("StarkZap One-Tap Yield - Ready");
console.log("Stack: Starknet + Vesu + Avnu");

async function main() {
  console.log("Zapping...");
  await zapIn("10");
  await depositToVesu("10");
}

main();
