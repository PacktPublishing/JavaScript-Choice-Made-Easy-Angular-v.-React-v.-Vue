import React from 'react';
import App from './component';
import { mount } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h2').text()).toEqual('CLOTHES ON FIRE');
});

it('cart button renders 0 initially for products length inside cart', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.Cart-button').text()).toEqual('🛒 CART (0)');
});