const { ethers } = require("hardhat");
const { txParams } = require("../utils/karuraAndAcalaTransactionHelpers.js");

async function printBalance(address) {
  const formattedBalance = ethers.utils.formatEther(
      await ethers.provider.getBalance(address),
  );

  console.log(`balance of ${address}: ${formattedBalance}`);
}

async function main() {
  const [signer] = await ethers.getSigners();
  const { gasPrice: gasPrice, gasLimit: gasLimit } = await txParams();

  console.log(`signer: ${signer.address}`);
  await printBalance(signer.address);

  const Disperse = await ethers.getContractFactory("Disperse");
  const disperse = await Disperse.deploy({ gasPrice, gasLimit });
  await disperse.deployed();
  //const disperse = Disperse.attach("0x58b28458849144d398d6482478c39708cdA2e39A");

  console.log(disperse.address);

  const abiCoder = new ethers.utils.AbiCoder();

  const tx = await disperse.disperseEther(
    ["0x0AB572e327178eA8C15c338705811476F78D7A0D","0x6a7eB27407a50a4eb9d015EA2B0F2e1BcC724461"],
    [0.1, 1.2].map((x) => (abiCoder.encode(["uint256"], [ethers.utils.parseEther(x.toString())]))),
    { value: ethers.utils.parseEther("2.2"), gasPrice, gasLimit },
  )

  await(tx.wait(1));

  await printBalance("0x0AB572e327178eA8C15c338705811476F78D7A0D");
  await printBalance("0x6a7eB27407a50a4eb9d015EA2B0F2e1BcC724461");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
