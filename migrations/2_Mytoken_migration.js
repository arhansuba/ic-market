const PolyToken = artifacts.require("MyToken");


module.exports = async function (deployer) {
  await deployer.deploy(PolyToken);
  const polyToken = await PolyToken.deployed();
  console.log(`polyToken.address`, polyToken.address)
  
};
