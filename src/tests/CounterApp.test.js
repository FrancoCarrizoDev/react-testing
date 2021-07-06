import { shallow } from "enzyme"
import  CounterApp  from "../CounterApp"
import React from 'react';
import PrimeraApp from "../PrimeraApp";
describe('Testing in the counterApp', () => {
    beforeEach(() => {
        
    })
    test('should show <counterApp', () => {
        const wrapper = shallow(<CounterApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show default value 100 in h2', () => {
        const wrapper = shallow(<CounterApp value={100} />)
        
        const countertext = wrapper.find('h2').text().trim();
        expect(countertext).toBe('100')
    })

    test('should be increment the counter', () => {
        const wrapper = shallow(<CounterApp value={10}/>)
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('11')
    })

    test('should be decrement the counter', () => {
        const wrapper = shallow(<CounterApp value={10}/>)
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('9')
    })
    

})
