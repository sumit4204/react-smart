import React, { Component } from 'react';
import './CustomerDetail.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    this.onChangeEvent = this.handleChange.bind();
    this.onChangeEvent = this.onChangeEvent.bind();

}
onChangeEvent = ({target}) => {

    this.setState({[target.name] : target.value});
    console.log(this);
    }
   


    onSubmit= () =>{
        //console.log(this.state);
        console.log(this.state.custPublicKey);
        console.log(this.state.uname);
        console.log(this.state.id);
        console.log(this.state.accType);
        console.log(this.state.paymentsDue);
        console.log(this.state.clicks);
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
        <br/>
        <br/>
    <FormGroup row>
        <br/>
        <br/>
    <Label for="uname">  Username</Label>
      <Input type="text" name="user" id="uname" placeholder="Enter username"  onChange={this.onChangeEvent} />
  </FormGroup>
  <br/>
  <FormGroup row>
  <br/>
    <Label for="custPublicKey" >  Public Key</Label>
      <Input type="number" name="custPublicKey" id="custPublicKey" placeholder="Enter public key" onChange={this.onChangeEvent} />
  </FormGroup>
  <br/>
  <FormGroup row>
    <Label for="id1" >  Id number</Label>
    <br/>
      <Input type="text" name="id" id="id1" placeholder="Enter id number" onChange={this.onChangeEvent} />
      <br/>          
  </FormGroup>
  <FormGroup>
      <br/>
      <br/>
      <span>
          <Label for="accType" class="pad-left">Account Type</Label>
          <select name="accType" id="accType" defaultValue="please select" onChange={this.onChangeEvent}>
          <option value="please select" >please select account type</option>
          <option value="loan">loan</option>
          <option value="credit card">credit card</option>
          <option value="cheque">cheque</option>
          </select>
          </span>
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
          <Label for="paymentsDue" class="pad-left">Payments Due</Label>
          <select  name="paymentsDue" id="paymentsDue" defaultValue="please select" onChange={this.handleChange} >
          <option value="please select" >please select paymentsDue</option>
          <option value="default" name = 'default' >default</option>
          <option value="timely_paid" name = 'ontime' >timely paid</option>
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