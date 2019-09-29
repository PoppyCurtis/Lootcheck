import * as constants from './constants';
import * as actions from './balance';


it('creates an action to set the balance', () => {
    const balance = 0;

    //constant = SCREEN_CASE and balance = parameter that goes in the function.

    const expectedAction = {type: constants.SET_BALANCE, balance};

    //constant = SCREEN_CASE and balance = parameter that goes in the function.

    //setBalance is the function that we create in actions file - naming convention = camelCase

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});