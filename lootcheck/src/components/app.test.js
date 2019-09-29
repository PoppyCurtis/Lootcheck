import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
    const app = shallow(<App/>);
   
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
});