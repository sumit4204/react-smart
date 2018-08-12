import React, { Component } from 'react';
import './SignUp.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SignUp extends Component {

    constructor(props) {
        super(props);
    this.state={
        user: "",
        id: "",
        address: "",
        pwd: "",
        con: ""
    }

    this.onChangeEvent = this.onChangeEvent.bind();

}

    onChangeEvent = ({target}) => {

    //    this.setState({[target.name] : target.value});
    //    console.log(this);
    // }
// 
    // onSubmit= () =>{
        // console.log(                                                                                                            ;mṁṁṁ,ṁ  ...............                                                                                                                                p ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁṁthis.state.user);
        // console.log(this.state.pwd);
        // console.log(this.state.id); 
        console.log(this.state.con); 
        console.log(this.state.address);
    }

    onSubmit= () =>{
        //console.log(this.state);
        console.log("Hi there");
        console.log(this, "hi");
        console.log(this.state.OrganizationName);
        console.log(this.state.OrganizationId);
        console.log(this.state.OrganizationAddress);
    
    }

render()
    {
        return(
            <Form>
            <FormGroup row>
            <Label for="uname" sm={2}>OrganizationName</Label>
            <Col sm={10}>
              <Input type="text" name="user" id="uname" placeholder="Enter OrganizationName"  onChange={this.onChangeEvent} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="pass" sm={2}>OrganizationPassword</Label>
            <Col sm={10}>
              <Input type="password" name="pwd" id="pass" placeholder="Enter OrganizationPassword" onChange={this.onChangeEvent} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="id1" sm={2}>OrganizationId</Label>
            <Col sm={10}>
              <Input type="text" name="id" id="id1" placeholder="Enter OrganizationId" onChange={this.onChangeEvent} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="add" sm={2}>OrganizationAddress</Label>
            <Col sm={10}>
              <Input type="textarea" name="address" id="add" placeholder="Enter Organization address" onChange={this.onChangeEvent} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contact" sm={2}>Organization Registration Number</Label>
            <Col sm={10}>
              <Input type="number" name="con" id="contact" placeholder="Enter Organization Registration number" onChange={this.onChangeEvent} />
            </Col>
          </FormGroup>
          <FormGroup check row>
         <Col sm={{ size: 10, offset: 2 }}>
           <Button onClick={() => this.onSubmit()}>Sign Up</Button>
         </Col>
       </FormGroup>
     </Form>
 
        );
    }
}


export default SignUp