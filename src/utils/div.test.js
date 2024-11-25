import { describe, it, expect } from "vitest"; 
import { div } from "./div"; 

describe("Pruebas para la función div", () => {
  // a) Verificar que div es una función
  it("La función div debe ser una función", () => {
    expect(typeof div).toBe("function");
  });

  // b) División de dos números positivos
  it("La división de dos números positivos debe dar un número positivo", () => {
    expect(div(10, 2)).toBe(5);
  });

  // c) División de dos números negativos
  it("La división de dos números negativos debe dar un número positivo", () => {
    expect(div(-10, -2)).toBe(5);
  });

  // d) División de un número positivo y uno negativo
  it("La división de un número positivo y un número negativo debe dar un número negativo", () => {
    expect(div(10, -2)).toBe(-5);
  });
});