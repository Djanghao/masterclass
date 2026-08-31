# Nice and clean TS/JS

**Author:** pirastrino
**Votes:** 91
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/2109445/](https://leetcode.com/problems/roman-to-integer/solutions/2109445/)

---

You don't need to map `CM`, `XC`, `"IX"`, `"IV"` separately. Eg.
when you parse `"MCMXCIV"` to an array of integers you get:
`[1000, 100, 1000, 10, 100, 1, 5]`, if you add them together (from left to right),
you just need to check if next number is bigger, if so then you simply subtract
that number: `1000 - 100 + 1000 - 10 + 100 - 1 + 5 = 1994`.

```typescript
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const integers = s.split('').map(c => roman[c]);
  
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};

```