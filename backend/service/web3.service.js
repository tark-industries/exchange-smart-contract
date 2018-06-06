const config = require('../../config.json');
const Web3 = require('web3');
const abi = require('human-standard-token-abi');
const provider = new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/_ws');


provider.on('error', e => {
    console.error('WS Error', e);
    process.exit(1);
});

provider.on('end', e => {
    console.error('WS End', e);
    process.exit(1);
});


const web3 = new Web3(provider);


//https://github.com/ethereum/web3.js/issues/1297 , i have increased x10
provider.connection._client.config.maxReceivedFrameSize = 10485760;
provider.connection._client.config.maxReceivedMessageSize = 83886080;


module.exports = {

    generateAddress : () => {
        return web3.eth.generateAddress();
    }
};