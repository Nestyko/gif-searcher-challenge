import { primeSummatory, isPrime, isDivisible } from "./utils";

describe("primeSummatory", () => {
  it("should return the sum of the prime numbers below the input ", () => {
    //The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    // Not including 10
    expect(primeSummatory(5)).toEqual(5);
    expect(primeSummatory(10)).toEqual(17);
    expect(primeSummatory(11)).toEqual(17);
    expect(primeSummatory(20)).toEqual(77);
    expect(primeSummatory(345)).toEqual(10191);
  });
});

describe("isPrime", () => {
  it("should return true if Prime", () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });
  it("should return false if not prime", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-2)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(16)).toBe(false);
    expect(isPrime(21)).toBe(false);
  });
});

describe("isDivisible", () => {
  expect(isDivisible(9)).toBe(true);
});
