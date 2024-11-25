import { describe, expect, it } from "vitest";
import { isApproved } from './isApproved';

describe('Función isApproved', () => {

    // Caso 1: Valores fuera del rango (menos de 0 o más de 10)
    it('Debe retornar null para valores fuera del rango (menores de 0 o mayores de 10)', () => {
        expect(isApproved(-1)).toBeNull();
    });

    it('Debe retornar null para valores fuera del rango (menores de 0 o mayores de 10)', () => {
        expect(isApproved(20)).toBeNull();
    });

    // Caso 2: Valores insuficientes (menos de 5)
    it('Debe retornar false para valores menores a 5 (insuficiente)', () => {
        expect(isApproved(4.9)).toBe(false);
    });

    // Caso 3: Valores aprobatorios (5 o más)
    it('Debe retornar true para valores 5 o mayores (aprobado)', () => {
        expect(isApproved(5)).toBe(true);
    });

});