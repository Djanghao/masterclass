# JS

**Author:** shaheenparveen
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/2942870/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/2942870/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {number}
 */


var numDupDigitsAtMostN = function(N) {
  let digits = toDigits(N);
  let len = digits.length;
  //console.log(digits);

  let d = 0;

  //1 to 10^{len-1}-1
  for (let r = 1; r < len; r++) {
    let dr = countDiff(r);
    d += dr;
  }

  //10^len to N-1
  for (let i = 0; i < len; i++) {
    let di = countDiff1(digits, i);
    d += di;
  }

  //N
  if (isDuplicated(digits, len) == false) d++;

  return N - d;
};

function countDiff(r) {
  //print range
  let start = [1];
  for (let j = 1; j < r; j++) start.push(0);
  let end = [];
  for (let j = 0; j < r; j++) end.push(9);
  //console.log(`scan ${start} to ${end}`);

  //first digit starts from 1
  let d = 9 * permutation(r - 1, 9);
  //console.log(`\	r=${r} d=${d}`);

  return d;
}

function countDiff1(digits, i) {
  //print range
  let start = digits.slice(0, i + 1);
  start[i] = i == 0 ? 1 : 0;
  for (let j = i + 1; j < digits.length; j++) start.push(0);
  let end = digits.slice(0, i + 1);
  end[i] = end[i] - 1;
  for (let j = i + 1; j < digits.length; j++) end.push(9);
  //console.log(`scan2 from ${start} to ${end}`);

  if (start[i] > end[i]) return 0;

  //duplicated
  if (isDuplicated(digits, i)) return 0;

  let remainingDigits = getRemainingDigits(digits, i);

  //keep di
  let r = digits.length - 1 - i; //remaining len
  let n = 10 - i - 1; //remaining digits 0-9
  let d = remainingDigits * permutation(r, n);
  //console.log(`\	r=${r} n=${n} d=${d}`);

  return d;
}

function getRemainingDigits(digits, i) {
  let used = getUsedDigits(digits, i);

  let start = i == 0 ? 1 : 0;
  let end = digits[i] - 1;

  let x = [];
  for (let i = start; i <= end; i++) {
    if (!used.has(i)) x.push(i);
  }

  return x.length;
}

function getUsedDigits(digits, i) {
  let map = new Map();

  for (let j = 0; j < i; j++) {
    let d = digits[j];

    //duplicated
    if (!map.has(d)) map.set(d, 1);
  }

  return map;
}

function isDuplicated(digits, i) {
  let map = new Map();

  for (let j = 0; j < i; j++) {
    let d = digits[j];

    //duplicated
    if (map.has(d)) return true;

    map.set(d, 1);
  }

  return false;
}

function toDigits(n) {
  let a = new Array();

  while (n > 0) {
    let d = n % 10;
    a.push(d);

    n = Math.floor(n / 10);
  }

  a.reverse();

  return a;
}

function permutation(r, n) {
  if (r == 0) return 1;

  let p = 1;
  for (let i = 0; i < r; i++) {
    p *= n - i;
  }

  return p;
}

console.log(numDupDigitsAtMostN(1000));
```