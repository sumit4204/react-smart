import React, { Component } from 'react';
import './Login.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
this.state={
    uname:"",
    password:""

};
this.onChangeEvent = this.onChangeEvent.bind();
  }

  onChangeEvent =({target}) => {
        this.setState({[target.name] : target.value});
  }

 

 onLogin= () =>{
  
  console.log(this.state.uname);
  console.log(this.state.password);
}

render()
    {
        return(
            <Form>
             <FormGroup row>
             <Label for="uname" sm={2}>Username</Label>
             <Col sm={10}>
               <Input type="text" name="uname" id="uname" placeholder="Enter username"  onChange={this.onChangeEvent} />
             </Col>
           </FormGroup>
           <FormGroup row>
             <Label for="pass" sm={2}>Password</Label>
             <Col sm={10}>
               <Input type="password" name="password" id="pass" placeholder="Enter password" onChange={this.onChangeEvent} />
             </Col>
           </FormGroup>
           <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={() => this.onLogin()}>Login</Button>
          </Col>
        </FormGroup>
      </Form>
            
        );
    }
}

export default Login