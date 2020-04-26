/**
 * Some description of the `api` function
 *
 * @returns the string "Hello World"
 *
 * @beta
 */
export const api = (): string => {
  return "Hello World";
};

/**
 * Some description `Statistics` class
 */
export class Statistics {
  /**
   * Returns the average of two numbers
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2;
  }
}
