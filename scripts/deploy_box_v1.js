const {ethers, upgrades} = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [67], {initializer: "initialize"});
    await box.deployed();
    console.log("Box Proxy deployed to: ", box.address);
}
main();