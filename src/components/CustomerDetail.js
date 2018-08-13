import React, { Component } from 'react';
import './CustomerDetail.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Web3 from 'web3';
class CustomerDetail extends Component {
    constructor(props) {
      
        
        super(props);
        
    this.state={
        uname:"",
        id:"",
        custPublicKey: "",
        accType:"",
        paymentsDue:"",
        clicks:0,
        // selectValue: "please select"
    }
    this.handleChange = this.handleChange.bind();
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
    console.log("onchange called");
    }
   


    onSubmit= () =>{
        //console.log(this.state);
        console.log("pubkey", this.state.custPublicKey);
        console.log(this.state.uname);
        console.log(this.state.id);
        console.log(this.state.accType);
        console.log(this.state.paymentsDue);
        console.log(this.state.clicks);

        this.state.contractInstance.addCustomerDetails(this.state.custPublicKey, this.state.uname, this.state.clicks, {
			gas: 300000,
			 from: '0x36e49682b813b42cb459b92f3932f43c70f817d7'
		}, (err, result) => {
			if(result) {
				console.log("Customer details added");
			} else {
				console.log(err)
			}
		});
    }

    handleChange = (e) => {
      
        this.setState({selectValue:e.target.value});
        if(e.target.value === "default") {
            this.setState({clicks:1});

        } else {
            this.setState({clicks:2});
        }
    } 

render()
    {
        return(
    <Form>
    <FormGroup row>
    <Label for="uname">  Username</Label>
      <Input type="text" name="user" id="uname" placeholder="Enter username"  onChange={this.onChangeEvent} />
  </FormGroup>
  <FormGroup row>
    <Label for="custPublicKey" >  Public Key</Label>
      <Input type="text" name="custPublicKey" id="custPublicKey" placeholder="Enter public key" onChange={this.onChangeEvent} />
  </FormGroup>
  <FormGroup row>
    <Label for="id1" >  Id number</Label>
      <Input type="text" name="id" id="id1" placeholder="Enter id number" onChange={this.onChangeEvent} />
  </FormGroup>
  <FormGroup>
      <span>
          <Label for="accType" class="pad-left">Account Type</Label>
          <select name="accType" id="accType" defaultValue="please select" onChange={this.onChangeEvent}>
          <option value="please select" >please select account type</option>
          <option value="loan">Laon</option>
          <option value="credit card">Credit Card</option>
          <option value="cheque">Chequebook</option>
          </select>
          </span>
        </FormGroup>
        <FormGroup>
          <Label for="paymentsDue" class="pad-left">Payments History</Label>
          <select  name="paymentsDue" id="paymentsDue" defaultValue="please select" onChange={this.handleChange} >
          <option value="please select" >please select </option>
          <option value="default" name = 'default' >Late</option>
          <option value="timely_paid" name = 'ontime' >OnTime</option>
          </select>
        </FormGroup>

  <FormGroup check row>
 <Col sm={{ size: 10}}>
   <Button onClick={() => this.onSubmit()}>Submit</Button>
 </Col>
</FormGroup>
</Form>
                
 
        );
    }
}
export default CustomerDetail