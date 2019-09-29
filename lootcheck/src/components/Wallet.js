import React, {Component} from 'react';
import { connect } from 'react-redux';
import balance from '../reducers/balance';


export class Wallet extends Component {
    constructor () {
        super ();
        this.state = {
            balance: undefined
        }
    }

    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) });
    }
    render () {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br/>
                <input className='input-wallet' onChange={this.updateBalance} />
            </div>
        );
    }
}
// connect function takes 2 params. 
//param 1 = what part of Redux store we want
//param 2 = what action creators we want to use on the component to send data to redux store
//this maps state to props
export default connect(state => { return {balance: state}} , null)(Wallet);