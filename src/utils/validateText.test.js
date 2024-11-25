import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Función validateText', () => {

    // Caso válido: Cadena con solo letras, entre 6 y 10 caracteres
    it('Debe validar correctamente cadenas entre 6 y 10 caracteres', () => {
        expect(validateText("abcdefg")).toBe(true);   
    });

    // Caso inválido: Menos de 6 caracteres
    it('Debe retornar false para cadenas con menos de 6 caracteres', () => {
        expect(validateText("abc")).toBe(false); 
    });
});