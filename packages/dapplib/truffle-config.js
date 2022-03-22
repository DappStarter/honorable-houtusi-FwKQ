require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net public hunt produce bubble tree'; 
let testAccounts = [
"0xda1cb6e8478d5a1f8aa8639cf646dd41bf142db0868162783bbc62c09c45391a",
"0x48ce741e6b535b38ed48f4e087c6cf9ff3aadf4644ac10133dc2cd0bad9cf76e",
"0x3ee3944a1bb7dccc20504b6fd8b603be1fe53950154c09bb4aa3a8066602ffa7",
"0x1690642c7e3c9a85acadae7f5fc61a295279f8c6c41f7cb0b7e4fe64404d585a",
"0xd98e9bc9e9f40d30d9b41d49fc5c873b4a71069872ed10a673ebca66432ce4f7",
"0x5ff2ebe2367b52ad6fec2dcae2c0de133c32949065cd77278f34f3e76318ee8c",
"0x057dd89ccc4d5bb8225c8f518cba7ff18497465f86deaf29103968ed382aade7",
"0xc9de6db93c3a100875c29d36502017f6125a70312f84f6caeb2dbcdf39efd40a",
"0xe47cb0ad798f35371daa8f0e67cec50acd217c6375541520ed86bba95323845b",
"0x41141490bafe874bd51d626862a4202f649eeda348fbccf3db07776d96efd1e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

