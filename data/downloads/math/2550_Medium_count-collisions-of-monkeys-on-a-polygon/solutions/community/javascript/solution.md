# [JavaScript / Python] solutions

**Author:** js_pro
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3112137/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3112137/)

---

```javascript []
const monkeyMove = function (n) {
  const mod = BigInt(10 ** 9 + 7);
  let [base, res] = [2n, 1n];
  while (n > 0) {
    if (n % 2) res = (res * base) % mod;
    base = (base * base) % mod;
    n >>= 1;
  }
  return Number((res - 2n + mod) % mod);
};
```
```python []
class Solution:
  def monkeyMove(self, n: int) -> int:
    mod = 10**9 + 7
    return (pow(2, n, mod) + mod - 2) % mod
```
