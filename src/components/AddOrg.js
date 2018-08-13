import React, { Component } from 'react';
import Web3 from 'web3';

class AddOrg extends Component {

	constructor(props) {
		super(props);
		this.state = {
			orgId: '',
			orgName: '',
			orgAddress: ''
        }
        
        this.addOrgClick = this.addOrgClick.bind(this);
		this.getOrgClick = this.getOrgClick.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
		this.web3 = new Web3(this.web3Provider)

		const smartContract = this.web3.eth.contract([
			{
				"constant": false,
				"inputs": [
					{
						"name": "orgAddress",
						"type": "address"
					},
					{
						"name": "_orgName",
						"type": "string"
					},
					{
						"name": "_orgId",
						"type": "string"
					}
				],
				"name": "addOrganization",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_orgAddress",
						"type": "address"
					}
				],
				"name": "getOrganization",
				"outputs": [
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
		]);

		this.state.contractInstance = smartContract.at('0xcdedcca47a4b20e5551f4a5ec8bc60e69ee73cf6');


	}

	getContract = () => {



		console.log(this.state.contractInstance);
		//Coursetro.getOrganization('0x459830edb3127079b7771e56d35fe3dd1f907ae4');
		//console.log(Coursetro.getOrganization('0x4e1d73121e69b06f1646c739268e60319b17700f'));
	}

	addOrgClick = () => {

		this.state.contractInstance.addOrganization(this.state.orgAddress, this.state.orgName, this.state.orgId, {
			gas: 300000,
			from: '0x9af2d2773b09cfbfa0b95946186466f9ed3aeb49'
		}, (err, result) => {
			if(result) {
				console.log("organization added");
			} else {
				console.log(err)
			}
		});
		

	}

	getOrgClick = () => {
		console.log("getting organization");
		this.state.contractInstance.getOrganization(this.state.orgAddress, {
			gas: 300000
		}, (err, result) => {
			console.log(result[0], result[1]);
		});
	}

	componentWillMount() {
		//this.getContract();
	}


	componentDidMount() {


	}

	handleChange({ target }) {
		this.setState({
			[target.name]: target.value
		});
	}

	render() {
		return (
			<div>
				<div className="container">
<br/>
<br/>
<br/>
					<input
						type="text"
						name="orgId"
						placeholder="Enter orgId here..."
						value={this.state.orgId}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>

					<input
						type="text"
						name="orgName"
						placeholder="Enter Org Name here..."
						value={this.state.orgName}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>

					<input
						type="text"
						name="orgAddress"
						placeholder="Enter orgAddress here..."
						value={this.state.orgAddress}
						onChange={this.handleChange}
					/>
					<br/>

<br/>

					<button id="button" onClick={this.addOrgClick}>Add Organization</button>
					<br/>
					<br/>
					<button id="getButton" onClick={this.getOrgClick}>Get Organization</button>
				</div>




			</div>
		)


	}
}

export default AddOrg