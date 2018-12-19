/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * App scripts
 */
App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',

    init: function() {
        return App.initWeb3();
    },

    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
            web3 = new Web3(App.web3Provider);
        }
        return App.initContract();
    },

    initContract: function() {
        $.getJSON('HelloWorld.json', function(helloworld) {
            App.contracts.HelloWorld = TruffleContract(helloworld);
            App.contracts.HelloWorld.setProvider(App.web3Provider);
            if (typeof App.contracts.HelloWorld.currentProvider.sendAsync !== 'function') {
                App.contracts.HelloWorld.currentProvider.sendAsync = function() {
                    return App.contracts.HelloWorld.currentProvider.send.apply(App.contracts.HelloWorld.currentProvider, arguments);
                };
            }
            
            return App.render();
        });
    },

    render: function() {
        web3.eth.getCoinbase(function(err, account) {
            if (err == null) {
                App.account = account;
                $('#accountAddress').html("Your account: " + account);
            }
        });

        App.contracts.HelloWorld.deployed().then(function(instance) {
            return instance.message();
        }).then(function(message) {
            $('#helloWorld').html(message);
        }).catch(function(err) {
            console.warn(err);
        });
    }
};

(function() {
    $(window).on('load', function() {
        App.init();
    });
})();