import React, { Component,Modal } from 'react';
import  './components/images/rawpixel-570908-unsplash.jpg';
import './components/images/credit.jpeg'
import './App.css';
import Login from './components/Login.js';
import AddOrg from './components/AddOrg.js'
import Register from './components/Register.js'
import CreditScore from './components/CreditScore.js'
import {  Route,  NavLink,  HashRouter } from "react-router-dom";
import { Button, ButtonToolbar ,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
// import Form from './Form.js'
import RegisterCustomer from './components/RegisterCustomer.js'
import AdminView from './components/AdminView.js'
import OrgView from './components/OrgView.js'
import CustomerDetail from './components/CustomerDetail.js'


// import { Slide } from 'react-slideshow-image';


class App extends Component {

render(){

  return (
    <div className="bg-image">
          <div className="App">
             <header className="App-header">
              {/* <img src={CaptureLogo} className="App-logo" alt="logo" /> */}
               <h1 className="App-title">Decentralized Credit Rating System</h1>
            </header>
          <br/>
          <Navbar>
          <HashRouter className="content" >
          <div>
            <Nav>


              <NavItem >
              <NavLink to="/App">Home</NavLink>
              </NavItem>
              <NavItem class="bgColor">
              <NavLink to="/Register">SignUp</NavLink>
              </NavItem >

              <NavItem class="bgColor"><NavLink to="/Login">Login</NavLink></NavItem>
              {/* <NavItem><NavLink to="/AddOrg">Add Organization</NavLink></NavItem>
              <NavItem><NavLink to="/CustomerDetail">Add CustomerDetail</NavLink></NavItem>
              <NavItem><NavLink to="/CreditScore">Get CreditScore</NavLink></NavItem> */}
              </Nav>

            <div >
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              <Route path="/AddOrg" component={AddOrg}/>
              <Route path="/CustomerDetail" component={CustomerDetail}/>
              <Route path="/CreditScore" component={CreditScore}/>
              <Route exact path='/AdminView' component={AdminView} />
          <Route exact path='/OrgView' component={OrgView} />
            </div>
          </div>
        </HashRouter>
        </Navbar>
          </div>
          {/* <div  >
            </div> */}
    </div>
  );
}


};
export default App
//  }
// export default App

