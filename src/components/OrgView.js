import React from 'react';
import {  Route,  NavLink,  HashRouter, BrowserRouter } from "react-router-dom";
import { Redirect,Link,Switch } from "react-router-dom";
import {Container,Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class OrgView extends React.Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <Form className="background">
                <div className="pad-top ">
                <div className="form-header warm-flame-gradient rounded ">
            <h3 className="my-3"><i className="fa"></i>ORGANIZATION</h3>
        </div>
        </div>

<div className="alignment">
<button>
<Link to="/CustomerDetail">Add Customer</Link>
</button>
&nbsp;&nbsp;&nbsp;&nbsp;
<button>
<Link to="/CreditScore">Get CreditScore</Link>
</button>
</div>
</Form>
 );

}
};

export default OrgView