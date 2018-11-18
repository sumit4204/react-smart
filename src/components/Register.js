import './Register.css'
import React from 'react';
import {Container,Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Route, Link, NavLink,  HashRouter } from "react-router-dom";
import  './images/steve-johnson-628975-unsplash.jpg';

class Register extends React.Component  {
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

   this.setState({[target.name] : target.value});
   console.log(this);
}

onSubmit= () =>{
    console.log(this.state.user);
      console.log(this.state.pwd);
    console.log(this.state.id);
    console.log(this.state.con);
    console.log(this.state.address);

    this.props.history.push("/Login");
}

  render() {
    return(
        <Form className="background1">

  <div className="pad-top ">

        <div className="form-header warm-flame-gradient rounded ">
            <h3 className="my-3"><i className="fa"></i>SIGN UP</h3>
        </div>
       <div className="fix">
        <lab for="uname" className=" grey-text ">Username</lab>
        <input type="text" id="uname" name="uname" placeholder="Enter username"  onChange={this.onChangeEvent}/>
        </div>
      <div class="fix">
        <lab for="pass" className=" grey-text ">Password</lab>
        <input type="password"name="password" id="pass" placeholder="Enter password" onChange={this.onChangeEvent} />
   </div>
   <div class="fix">
   <lab for="id1" className=" grey-text ">Identifier&nbsp;</lab>
        <input type="text"name="id" id="id1" placeholder="Enter id" onChange={this.onChangeEvent} />
  </div>
  <div class="fix">
        <lab for="contact" className=" grey-text ">Contact&nbsp; &nbsp;</lab>
        <input type="number"name="con" id="contact" placeholder="Enter contact" onChange={this.onChangeEvent} />
   </div>
   <div class="fix">
        <lab for="add" className=" grey-text ">Address  </lab>
        <input type="textarea"name="address" id="add" placeholder="Enter address" onChange={this.onChangeEvent} />
 </div>

 <div className="pad-top text-center mt-4">
            <button className="btn btn-deep-orange waves-effect waves-light" type="submit" onClick={() => this.onSubmit()}>Sign Up</button>
        </div></div>
        <br/>
    <div className="modal-footer">
        <div className="options font-weight-light">
            <p>Already a member? <Link to="/Login">Login</Link></p>
            {/* <p>Forgot <a href="#">Password?</a></p> */}
        </div>
    </div>
</Form>

    );
  }
}
export default Register