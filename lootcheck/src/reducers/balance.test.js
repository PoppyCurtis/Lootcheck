import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        //balanceReducer has 2 params -> first represents a previous state.
        //param 2 pass in an object containing data
        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
            .toEqual(balance);

    });
});