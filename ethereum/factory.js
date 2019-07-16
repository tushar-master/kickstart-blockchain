import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//const CampaignFactoryAddress = '0xb4145cCed4401144B0e6758C27a697587f8755a6';
const CampaignFactoryAddress = '0x417fba72Cf278829E5fFe4CaFDCAFd12aF8B47f7';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CampaignFactoryAddress
);

export default instance;