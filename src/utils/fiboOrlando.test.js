import { describe, expect, it } from "vitest";
import { fibonacci } from './fiboOrlando';

describe('fibonacci', () => {

    it('debería devolver 1 para el índice 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debería devolver 2 para el índice 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('debería devolver 55 para el índice 10', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
