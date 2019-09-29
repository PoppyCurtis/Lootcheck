import * as constants from './constants';

export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    }
}