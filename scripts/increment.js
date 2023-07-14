const fs = require('fs');

async function main() {

  // Replace with your own contract address
  const incrementorAddress = "0x570DB771DeA83A2f6322E775886b0196cD770D7F"

  const [signer] = await ethers.getSigners()
  const abiDir = __dirname + '/../artifacts/contracts';
  const incrementorAbiContract = abiDir + "/" + "Incrementor.sol" + "/" + "Incrementor" + ".json"  
  let incrementorAbi;
  try {
    incrementorAbi = JSON.parse(fs.readFileSync(incrementorAbiContract,{encoding:'utf8', flag:'r'}));
  } catch (error) {
    console.log(error)
    return;
  }
  const incrementor = new ethers.Contract(incrementorAddress, incrementorAbi.abi, signer)
  console.log('\n\nPrevious value:', await incrementor.x())
  const plusOne = await incrementor.increment()
  await plusOne.wait(1)
  console.log('\nIncremented. ✅ \n\nThe new value of x is', await incrementor.x(), '\n\nTx hash:', plusOne.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
