require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const ALCHEMY_API_KEY = "PDn0BLVI2jBzw9tS11ttX3ecQAW8UKTz";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const ROPSTEN_PRIVATE_KEY = "97cf771541cfa3b186f4755591aa3aba6672781782baad5c76d822a887901d45";

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "MDISCKR33T6DUZDKACRPPI9X9V4U7UDIH8"
  }
};
