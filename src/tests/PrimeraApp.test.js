import React from 'react';

import PrimeraApp from "../PrimeraApp"
import { shallow } from 'enzyme'

describe('Test in PrimeraApp', () => {
    /*
    test('should show an message "Hellow im goky"', () => {
        const greeting = "Hi! i'm Goku"

        const {getByText} = render(<PrimeraApp saludo={greeting}/>)
        expect( getByText(greeting)).toBeInTheDocument();
    })
    */

    test('should show <PrimeraApp/> correctly', () => {
        const wrapper = shallow(<PrimeraApp saludo="Hellow!" />)

        expect(wrapper).toMatchSnapshot();
    })

    test('should show the subtitle sneded by props', () => {
        const greeting = 'Hello im Goku!'
        const subtitle = 'Im subtitle'
        const wrapper = shallow(<PrimeraApp saludo={greeting} subtitulo={subtitle} />)

        const parragrapthText = wrapper.find('p').text()

    })
    

})
