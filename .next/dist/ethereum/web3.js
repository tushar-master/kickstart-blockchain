'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

// const showAddress = async () => {
//     await ethereum.enable();
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
// };

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {

    //We are in the browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
    //showAddress();
    console.log('Metamask');
} else {
    //We are on the server *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/4517969abe1b4a92a0bd2c05248532d4');
    web3 = new _web2.default(provider);
    console.log('Infura');
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxBQUFQLFNBQWdCLEFBQXBELGFBQWdFLEFBRTVEOztBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUNBO1lBQVEsQUFBUixJQUFZLEFBQVosQUFDSDtBQU5ELE9BTUssQUFDRDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO1lBQVEsQUFBUixJQUFZLEFBQVosQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3R1c2hhcnNheGVuYS9Eb2N1bWVudHMvdGVjaC90cnktYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==