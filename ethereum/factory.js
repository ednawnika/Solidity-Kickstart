import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x44D72476Ae49E75C6F7722375FF96C00F70bb094');

export default instance;