const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Incrementor", function () {

  async function deployContracts() {

    const [owner, alice, bob] = await ethers.getSigners();

    const Incrementor = await ethers.getContractFactory("Incrementor");
    const IncrementorV2 = await ethers.getContractFactory("IncrementorV2");

    const incrementor = await upgrades.deployProxy(Incrementor,[], { initializer: 'increment' })

    const incrementorV2 = await upgrades.upgradeProxy(await incrementor.getAddress(), IncrementorV2)

    return { incrementor, incrementorV2, owner, alice, bob };
  }

  describe("Deployment", function () {
    it("Should set the right initial value", async function () {
      const { incrementor } = await loadFixture(deployContracts);
      expect(await incrementor.x()).to.equal(1);
    });
  });

  describe("Interactions", function () {
    it("Should increment x", async function () {
      const { incrementor } = await loadFixture(deployContracts);
      await incrementor.increment()
      expect(await incrementor.x()).to.equal(2);
    });

    it("Should decrement x", async function () {
      const { incrementorV2 } = await loadFixture(deployContracts);
      await incrementorV2.decrement()
      expect(await incrementorV2.x()).to.equal(0);
      await incrementorV2.increment()
      expect(await incrementorV2.x()).to.equal(1);
    });
    it("Should return the value of y", async function () {
      const { incrementorV2 } = await loadFixture(deployContracts);
      expect(await incrementorV2.y()).to.equal(0);
    });
    it("Should increment y", async function () {
      const { incrementorV2 } = await loadFixture(deployContracts);
      expect(await incrementorV2.y()).to.equal(0);
      await incrementorV2.incrementY()
      expect(await incrementorV2.y()).to.equal(1);
    });
  });
});
