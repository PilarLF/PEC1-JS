import { ex1, ex2 } from "./pec1";

describe("ex1", () => {
  test("should calculate the circumference of a circle", () => {
    expect(ex1(1)).toBeCloseTo(6.283185307179586, 5);
    expect(ex1(0)).toBe(0);
    expect(ex1(2)).toBeCloseTo(12.566370614359172, 5);
    expect(ex1(3.5)).toBeCloseTo(21.991148575128552, 5);
  });
});


describe("ex2", () => {
  test("should calculate the area of a circle", () => {
    expect(ex2(1)).toBeCloseTo(3.141592653589793, 5);
    expect(ex2(0)).toBe(0);
    expect(ex2(2)).toBeCloseTo(12.566370614359172, 5);
    expect(ex2(3.5)).toBeCloseTo(38.48451000647496, 5);
  });
});

