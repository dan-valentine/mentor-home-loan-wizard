import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import{connect} from 'react-redux';
import {updateDownPayment, updateCost} from '../../ducks/reducer';
class WizardSix extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" value={this.props.cost} onChange={e=>this.props.updateCost(e.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" value={this.props.downPayment} onChange={e=>this.props.updateDownPayment(e.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps({cost, downPayment}){
    return {cost, downPayment};
}

export default connect(mapStateToProps, {updateCost, updateDownPayment})(WizardSix);