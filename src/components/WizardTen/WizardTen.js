import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateEmail, updateFirst, updateLast} from '../../ducks/reducer';

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" value={this.props.firstName} placeholder="First Name" onChange={e=>this.props.updateFirst(e.target.value)}/>
                    <input type="text" value={this.props.lastName} placeholder="Last Name" onChange= {e=>this.props.updateLast(e.target.value)}/>
                    <input type="text" value={this.props.email} placeholder="email" onChange={e=>this.props.updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
var v = ({email, firstName, lastName})=>({email, firstName, lastName});
export default connect(v, {updateEmail, updateFirst, updateLast})(WizardTen);