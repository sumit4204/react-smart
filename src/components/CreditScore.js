import React, { Component } from 'react';
import './CreditScore.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Web3 from 'web3';

class CreditScore extends Component {

    constructor(props) {
        super(props);
    this.state={
        id:"",
        custPublicKey: "",
    }

    this.onChangeEvent = this.onChangeEvent.bind();

    this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
		this.web3 = new Web3(this.web3Provider)

		const smartContract = this.web3.eth.contract([
			{
				"constant": false,
				"inputs": [
					{
						"name": "_custAddress",
						"type": "address"
					},
					{
						"name": "_custName",
						"type": "string"
					},
					{
						"name": "scrImpact",
						"type": "int256"
					}
				],
				"name": "addCustomerDetails",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
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
						"name": "_custAddress",
						"type": "address"
					}
				],
				"name": "getCustomerDetails",
				"outputs": [
					{
						"name": "",
						"type": "int256"
					},
					{
						"name": "",
						"type": "int256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_custAddress",
						"type": "address"
					}
				],
				"name": "getCustomerRating",
				"outputs": [
					{
						"name": "",
						"type": "int256"
					}
				],
				"payable": false,
				"stateMutability": "view",
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

		this.state.contractInstance = smartContract.at('0xdd0d5a6429d764359ce5ba0d0610217b94a2e00a');

}



    onChangeEvent = ({target}) => {

       this.setState({[target.name] : target.value});
       console.log(this);
        //console.log(this, e.target.value);

    }
    onSubmit= () =>{
        //console.log(this.state);
        console.log(this.state.custPublicKey);
        console.log(this.state.id);
        document.getElementById('container').innerHTML=this.state.custPublicKey;

        this.state.contractInstance.getCustomerRating(this.state.custPublicKey, {
			gas: 300000,
			 from: '0x4be1dc36393f993f08131c887b43fb24b0c66840'
		}, (err, result) => {
			if(result) {
                console.log("SSSSS", result);
                var obj = JSON.parse(result);
                console.log("boject = ", obj);
				document.getElementById('container').innerHTML="This customer's Credit Score is: <b>" + obj + "</b>";
			} else {
				console.log(err)
			}
		});

    }
render()
    {
        return(
<Form className="background6">

<div className="pad-top7">

	  <div className="form-header warm-flame-gradient rounded ">
		  <h3 className="my-3"><i className="fa"></i>ADD CUSTOMER</h3>
	  </div>
	 <div className="fix">
	  <lab for="custPublicKey" className=" grey-text ">Customer Public Key</lab>
	  <input type="text" id="custPublicKey" name="custPublicKey" placeholder="Enter public key"  onChange={this.onChangeEvent}/>
	  </div>
	  <div className=" fix">
 <lab for="id" className=" grey-text ">Customer Identity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</lab>
	  <input type="text"name="id" id="id" placeholder="Enter id" onChange={this.onChangeEvent} />
</div>

<div className="pad-top6 text-center mt-4">
<div className="pad-bot1">
		  <button className="btn btn-deep-orange waves-effect waves-light " type="submit" onClick={() => this.onSubmit()}>Generate Credit Score</button>
		 </div>
		  <div id="container" className="pad-above">
	  </div>
	  </div>

	  </div>

</Form>

        );
    }
}
export default CreditScore