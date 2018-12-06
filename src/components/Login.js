import './Login.css'
import React from 'react';
import {Container,Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Route,  NavLink,  HashRouter, BrowserRouter } from "react-router-dom";
import CustomerDetail from './CustomerDetail';
import Register from './Register';
import CreditScore from './CreditScore';
import { Redirect,Link,Switch } from "react-router-dom";
import  './images/steve-johnson-628975-unsplash.jpg';

class Login extends React.Component  {
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

      if(this.state.uname==='admin' && this.state.password==='admin'){
        this.props.history.push("/AdminView");
    }
    else if(this.state.uname!=='' && this.state.password!==''){
        this.props.history.push("/OrgView");
    }else{
 this.props.history.push("/Login");
}
       }
  render() {
    return(
        <Form className="background-login">
  <div className="pad-top ">


        <div className="form-header warm-flame-gradient rounded ">
            <h3 className="my-3"><i className="fa"></i>LOGIN</h3>
        </div>
       <div className="fix2">
        <lab for="uname" className=" grey-text ">Username</lab>
        <input type="text" id="uname" name="uname" placeholder="Enter username"  onChange={this.onChangeEvent}/>
        </div>
      <div className="fix2 pad-bot2">
        <lab for="pass" className=" grey-text">Password</lab>
        <input type="password"name="password" id="pass" placeholder="Enter password" onChange={this.onChangeEvent} />
   </div>
        <div className="text-center mt-4">
            <button className="btn btn-deep-orange waves-effect waves-light" type="submit" onClick={() => this.onLogin()}>Login</button>
        </div></div>
        <br/>
    <div className="modal-footer2">
        <div className="options font-weight-light">
            <p>Not a member?  <Link to="/Register">SignUp</Link></p>
        </div>
    </div>

</Form>
    );
  }
};

export default Login