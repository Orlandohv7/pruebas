import { describe, it, expect } from 'vitest';
import { OrlandoMaxOfThree } from './OrlandoMaxOfThree'; 

describe('OrlandoMaxOfThree', () => {

    it('Retorna 6 cuando los números son 6, 4, 1', () => {
        expect(OrlandoMaxOfThree(6, 4, 1)).toBe(6)
    });

    it('Retorna 8 cuando los numeros son 3, 8, 2', () => {
        expect(OrlandoMaxOfThree(3, 8, 2)).toBe(8)
    });

    it('Retorna 9 cuando los numeros son 5, 6, 9', () => {
        expect(OrlandoMaxOfThree(5, 6, 9)).toBe(9)
    });

    it('Retorna -1 cuando los numeros son -1, -4, -3', () => {
        expect(OrlandoMaxOfThree(-1, -4, -3)).toBe(-1)
    });

    it('Retorna 1 cuando los números son -1, 0, 2', () => {
        expect(OrlandoMaxOfThree(-1, 0, 2)).toBe(2)
    });
});
