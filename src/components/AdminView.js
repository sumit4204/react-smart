import React from 'react';
import {  Route,  NavLink,  HashRouter, BrowserRouter } from "react-router-dom";
import { Redirect,Link,Switch } from "react-router-dom";
import {Container,Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import  './AdminView.css';
class AdminView extends React.Component  {
    constructor(props) {
        super(props);
    }
        render() {
            return(
                <Form className="background">
                <div className="pad-top ">
                <div className="form-header warm-flame-gradient rounded ">
            <h3 className="my-3"><i className="fa"></i>ADMIN</h3>
        </div>
        </div>

<div className="alignment">
<button>
<Link to="/AddOrg" >Add Organization</Link>
</button>
</div>
</Form>
              );
            }

};

export default AdminView