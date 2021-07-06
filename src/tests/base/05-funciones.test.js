const { getUser } = require("../../base/05-funciones")
const { getUsuarioActivo } = require("../../base/05-funciones")

describe('Test in 05-functions', () => {
    test('getUser should return an objetc ', () => {

        const userTest = {
            uid : 'ABC123',
            username : 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toStrictEqual(userTest)
    })

    test('getUserActive should return an objetc ', () => {

        const name = 'Juan'
        const user = getUsuarioActivo(name)

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})