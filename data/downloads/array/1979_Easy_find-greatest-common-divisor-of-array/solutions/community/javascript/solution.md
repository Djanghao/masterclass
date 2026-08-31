# javascript direct way 77ms

**Author:** henrychen222
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418809/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418809/)

---

```
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const findGCD = (a) => {
    let max = Math.max.apply(Math, a);
    let min = Math.min.apply(Math, a);
    return gcd(min, max);
};
```