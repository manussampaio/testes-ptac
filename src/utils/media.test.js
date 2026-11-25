import { describe, it, expect } from 'vitest'
import { media } from './media'

describe('media', () => {
    it('calcula a média aritmética de [7, 8, 9] como 8', () => {
        expect(media([7, 8, 9])).toBe(8)
    })

    it('lança erro quando o array está vazio', () => {
        expect(() => media([])).toThrow('Lista de notas vazia')
    })
})