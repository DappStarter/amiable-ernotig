require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note noise evidence hunt person flush gas'; 
let testAccounts = [
"0x5ca02fc0b8cc6e80be44b34dbad252dfd499f76e532736328377b3338f84f69d",
"0xa3852197e02809482bbee279f8e4e1805fa37065cd4ae70db21a8e7ef2ff3d69",
"0xce7b8e42b2b7c1055874ebb533755e04c07133721d6e934ba9d8ca251555aa4f",
"0x38fb3e3bbe03373adfd9b62af7e741c79f1be7a9ba3f65cc07b6eaca7d9e9279",
"0x45ced00fb49ee88d721c4d788e1a184b8af51393fcad3e77dbc2246bf4fe72ff",
"0xf1de18e8b506f7fff0b5d1ba06b32ca10ea50ec9979105312b6e0196cf1fe80e",
"0xd03b2d48805675f1b86f603374b66cb748f0e7cbfe3e54e0f0c245a48e9742d8",
"0x34bdc95c8f86598dd52b190e8f648410f7efcaffaad0bd6d9cc595afb1f76564",
"0x4fa4e87c8110d9689ad10fa1d2c885d7d5453228c39285ea89262de03bf812f6",
"0x9bd1405b718052732dc45eae38a4d17b6b8007a378f6bb1c0ca5421981151f49"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
