import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Test in functions the Hero', () => {
    test('should return an hero by id', () => {
        
        const id = 1
        const hero = getHeroeById(id)

        const heroData = heroes.find( hero => hero.id === id)

        expect(hero).toEqual(heroData)
    })

    test('should return undefined', () => {
        
        const id = 10
        const hero = getHeroeById(id)

        expect(hero).toBe(undefined)
    })

    test('should return an array with hero dc', () => {
        const owner = 'DC'
        const heros = getHeroesByOwner( owner )

        const herosData = heroes.filter( h => h.owner === owner)

        expect(heros).toEqual(herosData)
    })

    test('should return an array with hero marvel ', () => {
        const owner = 'Marvel'
        const heros = getHeroesByOwner( owner )


        expect(heros.length).toBe(2)
    })
    
    
})