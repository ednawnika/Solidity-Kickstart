import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x3f56D7D4e1F45Bf0e22580E93D7B6405ee2CcDbd');

export default instance;