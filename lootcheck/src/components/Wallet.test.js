import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Wallet', () => {
    const props = { balance: 20 }
    const wallet = shallow(<Wallet {...props}/>);
    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });
    
    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into the wallet component', () => {
        const userBalance = '25';
        
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', {target: { value: userBalance }});
        });

        it('updates the local wallet balance in `state` and converts it to a number', () => {
            //10 = radix to parse into the decimal system
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
    });
});
