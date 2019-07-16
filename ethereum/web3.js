import Web3 from 'web3';

let web3;

// const showAddress = async () => {
//     await ethereum.enable();
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
// };

if(typeof window !== 'undefined' && window.web3 !== 'undefined'){
    
    //We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
    //showAddress();
    console.log('Metamask');
}else{
    //We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/4517969abe1b4a92a0bd2c05248532d4'
    );
    web3 = new Web3(provider);
    console.log('Infura');
}

export default web3;