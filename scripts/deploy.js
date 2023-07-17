const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);

async function main() {

  const Incrementor = await ethers.getContractFactory("Incrementor");
  const incrementor = await upgrades.deployProxy(Incrementor,[], { initializer: 'increment' })
  await incrementor.waitForDeployment();
  const incrementorAddress = await incrementor.getAddress()

  console.log(incrementorAddress," incrementor(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(incrementorAddress)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(incrementorAddress)," getAdminAddress")

  console.log('\nIncrementor contract deployed at', msg(await incrementorAddress));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
