const {ethers, upgrades} = require("hardhat");
//const PROXY = {proxy_address};
const PROXY = "0xA4297c5Be70fA35778Cc429C3A3F3894477bF0bC";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box Proxy upgraded");
}
main();

