import { describe, expect, it } from "vitest";
import { isAmountBounded } from './isAmountBounded';

describe('Función isAmountBounded', () => {

    it('Debe retornar false para valores que no cumpla las condiciones del if', () => {
        expect(isAmountBounded(-1)).toBe(false);
    });

    it('Debe retornar true para valores que cumplan las condiciones del if)', () => {
        expect(isAmountBounded(5)).toBe(true);
    });

});