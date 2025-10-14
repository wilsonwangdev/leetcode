import { spiralOrder } from "./54.螺旋矩阵.js";
import { describe, it, expect } from "vitest";

describe("spiralOrder", () => {
  it("should handle a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 4, 3]);
  });

  it("should handle a 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("should handle a 3x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    expect(spiralOrder(matrix)).toEqual([
      1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7,
    ]);
  });

  it("should handle a single row matrix", () => {
    const matrix = [[1, 2, 3, 4]];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4]);
  });

  it("should handle a single column matrix", () => {
    const matrix = [[1], [2], [3], [4]];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4]);
  });

  it("should handle a single element matrix", () => {
    const matrix = [[1]];
    expect(spiralOrder(matrix)).toEqual([1]);
  });

  it("should handle a 1x2 matrix", () => {
    const matrix = [[1, 2]];
    expect(spiralOrder(matrix)).toEqual([1, 2]);
  });

  it("should handle a 2x1 matrix", () => {
    const matrix = [[1], [2]];
    expect(spiralOrder(matrix)).toEqual([1, 2]);
  });

  it("should handle a 4x3 matrix (more rows than columns)", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(spiralOrder(matrix)).toEqual([
      1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8,
    ]);
  });
});
