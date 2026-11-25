import { describe, it, expect } from 'vitest'
import { filtrarMaiores18 } from './filtrarMaioridade'

describe('filtrarMaiores18', () => {
    it('filtra apenas usuários com 18 anos ou mais (incluindo boundary 18)', () => {
        const usuarios = [
            { name: 'Ana', age: 22 },
            { name: 'Beto', age: 17 },
            { name: 'Carla', age: 30 },
            { name: 'Diego', age: 18 },
        ]

        expect(filtrarMaiores18(usuarios)).toEqual([
            { name: 'Ana', age: 22 },
            { name: 'Carla', age: 30 },
            { name: 'Diego', age: 18 },
        ])
    })
})