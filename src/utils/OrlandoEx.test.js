import { describe, it, expect } from "vitest"; 
import { Orlando } from "./OrlandoEx"; 


describe("Pruebas para la función Orlando", () => {
  // a) Verificar que chequeoNumero es una función
  it("La función Orlando debe ser una función", () => {
    expect(typeof Orlando).toBe("function");
  });

  // b) Si recibe un número positivo devuelve true
  it("Si la función recibe un número positivo, debe devolver true", () => {
    expect(Orlando(10)).toBe(true);
  });

  // c) Si recibe un número negativo devuelve false
  it("Si la función recibe un número negativo, debe devolver false", () => { 
    expect(Orlando(-5)).toBe(false);
  });

  // d) Si recibe un 0 devuelve null
  it("Si la función recibe un 0, debe devolver null", () => {
    expect(Orlando(0)).toBe(null);
  });
});