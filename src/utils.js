const gt = a => b => b > a;
//function gt(a: number): Function<Function<b:number>:Boolean>
const isPrimeException = num => [2, 3, 5].indexOf(num) !== -1;

const digitSummatory = num =>
  num > 0 ? num / 10 + digitSummatory(num / 10) : 0;

const lastDigit = num => parseInt((num + "").substr(-1, 1), 10);

const isEven = num => num % 2 === 0;

export const isDivisible = num => {
  const root = Math.ceil(Math.sqrt(num));
  const [, , ...list] = Array(root + 1).keys();
  return !!list.find(n => num % n === 0);
};

export const isPrime = num =>
  gt(1)(num) &&
  (isPrimeException(num) ||
    !(
      isEven(num) ||
      digitSummatory(num) % 3 === 0 ||
      lastDigit(num) === 5 ||
      isDivisible(num)
    ));

export const primeSummatory = num => [...Array(num).keys()];

// [...Array(4).keys()] => [0,1,2,3]
