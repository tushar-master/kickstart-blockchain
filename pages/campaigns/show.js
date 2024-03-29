import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class CampaignShow extends Component {
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        
        const summary = await campaign.methods.getSummary().call();
        
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],   
            requestCount: summary[2],
            approverCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approverCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this conteact and manages requests',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute this amount to become a contributor'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'Request must be approved by Approvers'
            },
            {
                header: approverCount,
                meta: 'Number of Approvers',
                description: 'Count of people who have contributed to the campaign till now'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Balance of the Campaign (ether)',
                description: 'Balance of the Campaign till now'
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                        
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                
            </Layout>
        );
    }
}

export default CampaignShow;