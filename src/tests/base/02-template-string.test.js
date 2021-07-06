import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('Test in 02-templates file', () => {
    test('Test in method getSaludo() shoud to return fran', () => {
        const name = 'Fran'

        const greetings =  getSaludo(name)

        expect( greetings ).toBe('Hola ' + name)
        console.log(greetings)
    })

    // getSaludo should to return Hola Carlos si no hay argumento en el nombre

    test('getSaludo should to return Carlos if name argument is undefined', () => {


        const greetings =  getSaludo()

        expect( greetings ).toBe('Hola Carlos')
        console.log(greetings)
    })
})