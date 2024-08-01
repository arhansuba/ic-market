const Icmarket = artifacts.require("Icmarket");

module.exports = async function (deployer) {
  await deployer.deploy(
    Icmarket,
    "0xe450830A28e479F8bd6f8C1706B1CAB160Cb313F"
  );
};
