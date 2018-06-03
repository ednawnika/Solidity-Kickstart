import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'; 
import  Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
      }
    
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <p>View Campaign</p>,
                fluid: true
            };
        });

        return <Card.group items={items} />;
    }


    render() { 
       
       return ( <a>hello</a>
    // <Layout>
    //     <div>
    //     <link
    //       rel="stylesheet" 
    //       href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    //       />
    //       { this.renderCampaigns() }
    //       <Button 
    //       content="Create Campaign"
    //       icon="add circle"
    //       primary
    //       />
    //       </div>
    // </Layout>
       );
    };

}
export default CampaignIndex;
















