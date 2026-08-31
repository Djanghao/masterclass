# [Javascript] modular multiplicative inverse

**Author:** aexg
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/3012565/](https://leetcode.com/problems/count-anagrams/solutions/3012565/)

---

Using modular multiplicative inverse formula found on internet https://cp-algorithms.com/algebra/module-inverse.html

```
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function (s) {
  let result = 1n;
  const MODULO = 1000000007n;

  // precompute factorials
  const facts = new Array(1e5 + 10).fill(1n);
  for (let i = 1; i < facts.length; ++i) facts[i] = ((facts[i - 1] % MODULO) * (BigInt(i) % MODULO)) % MODULO;

  for (const w of s.split(' ')) {
    const cnt = w.split('').reduce((a, x) => (a.set(x, (a.get(x) || 0) + 1), a), new Map());
    let divisor = [...cnt.values()].reduce((a, x) => (a * facts[x]) % MODULO, 1n);
    let div_inv_mod = 1n;
    let power = MODULO - 2n;
    while (0n < power) {
      if (power & 1n) div_inv_mod = (div_inv_mod * divisor) % MODULO;
      divisor = (divisor * divisor) % MODULO;
      power >>= 1n;
    }
    result = ((result * (facts[w.length] * div_inv_mod)) % MODULO) % MODULO;
  }

  return Number(result);
};

```