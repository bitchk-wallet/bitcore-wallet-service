'use strict';

var _ = require('lodash');
var $ = require('preconditions').singleton();
var log = require('npmlog');
log.debug = log.verbose;

var Insight = require('./blockchainexplorers/insight');
var Common = require('./common');
var Constants = Common.Constants,
    Defaults = Common.Defaults,
    Utils = Common.Utils;

var PROVIDERS = {
    'insight': {
        'btc': {
            'livenet': 'http://insight-btc.bitchk.com',
            'testnet': 'https://test-insight.bitpay.com:443',
            'apiPrefix': '/insight-api'
        },
        'ltc': {
            'litecoin': 'http://insight-ltc.bitchk.com',
            'apiPrefix': '/insight-api'

        },
        'ven': {
            'ventas': 'http://insight-ven.bitchk.com',
            'apiPrefix': '/insight-api'
        },
        'yng': {
            'yangcoin': 'http://insight-yng.bitchk.com',
            'apiPrefix': '/insight-yng-api'
        },
        'ssc': {
            'searchcoin': 'http://insight-ssc.bitchk.com',
            'apiPrefix': '/insight-ssc-api'
        },
        'pax': {
            'paxcoin': 'http://insight-pax.bitchk.com',
            'apiPrefix': '/insight-pax-api'
        },
        'qac': {
            'quasar': 'http://insight-qac.bitchk.com',
            'apiPrefix': '/insight-qac-api'
        },
        'qct': {
            'qctcoin': 'http://insight-qct.bitchk.com',
            'apiPrefix': '/insight-qct-api'
        },
        'jbc': {
            'jbcoin': 'http://insight-jbc.bitchk.com',
            'apiPrefix': '/insight-jbc-api'
        }
    },
};

function BlockChainExplorer(opts) {
    $.checkArgument(opts);

    var provider = opts.provider || 'insight';
    var coin = opts.coin || Defaults.COIN;
    var network = opts.network || 'livenet';

    $.checkState(PROVIDERS[provider], 'Provider ' + provider + ' not supported');
    $.checkState(_.contains(_.keys(PROVIDERS[provider]), coin), 'Coin ' + coin + ' not supported by this provider');
    $.checkState(_.contains(_.keys(PROVIDERS[provider][coin]), network), 'Network ' + network + ' not supported by this provider for coin ' + coin);

    var url = opts.url || PROVIDERS[provider][coin][network];
    ///////////////////////////////////// check...
    switch (provider) {
        case 'insight':
            return new Insight({
                coin: coin,
                network: network,
                url: url,
                apiPrefix: opts.apiPrefix,
                userAgent: opts.userAgent,
            });
        default:
            throw new Error('Provider ' + provider + ' not supported.');
    };
};

module.exports = BlockChainExplorer;