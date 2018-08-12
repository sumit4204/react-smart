import React, { Component } from 'react';
// import 'RegisterCustomer.css'
import './RegisterCustomer.css'
class RegisterCustomer extends Component {

    constructor(props) {
        super(props);
    this.state={
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

        document.getElementById('container').innerHTML=this.state.custPublicKey;
    
    }
render()
    {
        return(

            <div className="col-md-6">
             <input placeholder="Customer Public Key"
             size="30"
                 value={this.state.custPublicKey}
                 name="custPublicKey"
                  onChange={this.onChangeEvent} />
                  <br/>
      <br />
                  <button onClick={() => this.onSubmit()}>submit</button>
                    
                  <div id="container">
                  
                  </div>
                  
                  </div>
                
 
        );
    }
}
export default RegisterCustomer
