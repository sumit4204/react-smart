import React, { Component } from 'react';
import './SignUp.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreditScore extends Component {

    constructor(props) {
        super(props);
    this.state={
        id:"",
        custPublicKey: "",
    }

    this.onChangeEvent = this.onChangeEvent.bind();

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
      <Input type="number" name="custPublicKey" id="pubkey" placeholder="Enter public key"  onChange={this.onChangeEvent} />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="id1" sm={1}>Id</Label>
    <Col sm={10}>
      <Input type="number" name="id" id="id1" placeholder="Enter id"  onChange={this.onChangeEvent} />
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