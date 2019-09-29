import * as constants from '../actions/constants';

//state = 0 -> default param. If state is undefined it will
//set itself to 0 by default.
const balance = (state = 0, action) => {
    switch(action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAWAL:
            return state - action.withdrawal
        default: 
            return state; 
    }
}

export default balance;