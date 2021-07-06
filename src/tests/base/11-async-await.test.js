import { getImagen } from "../../base/11-async-await"

describe('Test in async-aweit file', () => {
    test('should return the url image', async() => {
        
        const url = await getImagen()

        expect(typeof url).toBe('string')
    })
    
})
