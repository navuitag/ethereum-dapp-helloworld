var Helloworld = artifacts.require("./Helloworld.sol");

module.exports = function(deployer) {
  deployer.deploy(Helloworld);
};
