import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';


describe('balanceReducer', () => {

    describe('when initializing', () => {
        it('sets a balance', () => {
            const balance = 10;
    
            //balanceReducer has 2 params -> first represents a previous state.
            //param 2 pass in an object containing data
            expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
                .toEqual(balance);
    
        });
    
        describe('then re-initializing', () => {
            it('reads balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
        const balance = 10;
    });
  

    it('deposits into the balance', () => {
        const deposit  = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit}))
        .toEqual(initialState + deposit);
    });

    it('creates an action to withdraw from the balance', () => {
        const withdrawal  = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, {type: constants.WITHDRAWAL, withdrawal}))
        .toEqual(initialState - withdrawal);
    });
});