'use strict';
var bitcore = require('bitcore-lib');
var Constants = {};

var _makeTemp = function() {
        var networks = bitcore.Networks.networks;
        Constants.COINS = [];
        Constants.NETWORKS = [];
        for (var index in networks) {
            var network = networks[index];

            if (network.coin) {
                Constants.COINS[network.coin] = network.coin;
                Constants.NETWORKS[network.name] = network.name;
                Constants.PAIRS.push({ coin: network.coin, network: network.name });
            }
        }

    }
    //_makeTemp 에서 생성한다.
Constants.COINS = {

};
Constants.PAIRS = [


];
Constants.NETWORKS = {

};

Constants.SCRIPT_TYPES = {
    P2SH: 'P2SH',
    P2PKH: 'P2PKH',
};
Constants.DERIVATION_STRATEGIES = {
    BIP44: 'BIP44',
    BIP45: 'BIP45',
};

Constants.PATHS = {
    REQUEST_KEY: "m/1'/0",
    TXPROPOSAL_KEY: "m/1'/1",
    REQUEST_KEY_AUTH: "m/2", // relative to BASE
};

Constants.BIP45_SHARED_INDEX = 0x80000000 - 1;
_makeTemp();
module.exports = Constants;