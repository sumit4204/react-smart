import React, { Component } from 'react';
import './SignUp.css'
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

		this.state.contractInstance = smartContract.at('0x3c857430e54a6a43d381d1923a211465013edcdd');

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
			 from: '0x36e49682b813b42cb459b92f3932f43c70f817d7'
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
    <Form>
        
        <br/>
        <br/>
        <br/>
    <FormGroup row>
        
    <Label for="pubkey" sm={1}>PublicKey</Label>
    <Col sm={10}>
      <Input type="text" name="custPublicKey" id="pubkey" placeholder="Enter public key"  onChange={this.onChangeEvent} />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="id1" sm={1}>Id</Label>
    <Col sm={10}>
      <Input type="text" name="id" id="id1" placeholder="Enter id"  onChange={this.onChangeEvent} />
    </Col>
  </FormGroup>

  <FormGroup check row>
         <Col sm={{ size: 10, offset: 2 }}>
           <Button onClick={() => this.onSubmit()}>Generate Credit Score</Button>
         </Col>
       </FormGroup>
       <div id="container">
                  
                  </div>
     </Form>
                
 
        );
    }
}
export default CreditScore