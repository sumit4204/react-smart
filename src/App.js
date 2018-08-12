import React, { Component,Modal } from 'react';
import hsbclogo from './components/hsbclogo.jpg';
import './App.css';
import Login from './components/Login.js';
import AddOrg from './components/AddOrg.js'
import Register from './components/Register.js'
import CreditScore from './components/CreditScore.js'
import {  Route,  NavLink,  HashRouter } from "react-router-dom";
import { Button, ButtonToolbar ,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
// import Form from './Form.js'
import RegisterCustomer from './components/RegisterCustomer.js'
import CustomerDetail from './components/CustomerDetail.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
          <img src={hsbclogo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to HSBC Distributed Credit Rating System</h1>
        </header>
      <br/>
      <Navbar>
      <HashRouter>
      <div>
        <Nav>
        
        
          <NavItem>
          <NavLink to="/App"></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/Register">SignUp</NavLink>
          </NavItem>
          <NavItem><NavLink to="/Login">Login</NavLink></NavItem>
          <NavItem><NavLink to="/AddOrg">Add Organization</NavLink></NavItem>
          <NavItem><NavLink to="/CustomerDetail">Add CustomerDetail</NavLink></NavItem>
          <NavItem><NavLink to="/CreditScore">Get CreditScore</NavLink></NavItem>
          </Nav>
        
        <div className="content">
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/AddOrg" component={AddOrg}/>
          <Route path="/CustomerDetail" component={CustomerDetail}/>
          <Route path="/CreditScore" component={CreditScore}/>
        </div>
      </div>
    </HashRouter>
    </Navbar>
      </div>

   );
 }
 }
export default App