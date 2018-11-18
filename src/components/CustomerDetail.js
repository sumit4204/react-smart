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

		this.state.contractInstance = smartContract.at('0xdd0d5a6429d764359ce5ba0d0610217b94a2e00a');


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
			 from: '0x4be1dc36393f993f08131c887b43fb24b0c66840'
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
            this.setState({clicks:2});

        } else {
            this.setState({clicks:1});
        }
    }

render()
    {
        return(
<Form className="background8">

<div className="pad-top8">

	  <div className="form-header warm-flame-gradient rounded ">
		  <h3 className="my-3"><i className="fa"></i>ADD CUSTOMER</h3>
	  </div>
	 <div className="fix">
	  <lab for="uname" className=" grey-text ">Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</lab>
	  <input type="text" id="uname" name="uname" placeholder="Enter username"  onChange={this.onChangeEvent}/>
	  </div>
	<div class="fix">
	  <lab for="custPublicKey" className=" grey-text ">Customer key</lab>
	  <input type="text"name="custPublicKey" id="custPublicKey" placeholder="Enter Customer Key" onChange={this.onChangeEvent} />
 </div>
 <div class="fix">
 <lab for="id" className=" grey-text ">Identifier&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</lab>
	  <input type="text"name="id" id="id" placeholder="Enter id" onChange={this.onChangeEvent} />
</div>
<FormGroup>
      <br/>
      <br/>
      <span>
          <lab for="accType" class="pad-left grey-text">Account Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</lab>
          <select name="accType" id="accType" defaultValue="please select" onChange={this.onChangeEvent}>
          <option value="please select" >please select account type</option>
          <option value="loan">Laon</option>
          <option value="credit card">Credit Card</option>
          <option value="cheque">Chequebook</option>
          </select>
          </span>
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
          <lab for="paymentsDue" class="pad-left grey-text">Payments History&nbsp;&nbsp;</lab>
          <select  name="paymentsDue" id="paymentsDue" defaultValue="please select" onChange={this.handleChange} >
          <option value="please select" >please select </option>
          <option value="default" name = 'default' >Late</option>
          <option value="timely_paid" name = 'ontime' >OnTime</option>
          </select>
        </FormGroup>

<div className="pad-top text-center mt-4">
		  <button className="btn btn-deep-orange waves-effect waves-light" type="submit" onClick={() => this.onSubmit()}>Submit</button>
	  </div></div>

</Form>


        );
    }
}
export default CustomerDetail