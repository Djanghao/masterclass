# javascript binary search with with LCM 76ms

**Author:** henrychen222
**Votes:** 4
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/1569253/](https://leetcode.com/problems/ugly-number-iii/solutions/1569253/)

---

```
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a / gcd(a, b)) * b;
const ll = BigInt;

const nthUglyNumber = (n, a, b, c) => {
    let low = 0n, high = ll(2e9);
    let ab = lcm(a, b), bc = lcm(b, c), ac = lcm(a, c), abc = lcm(a, bc);
    a = ll(a), b = ll(b), c = ll(c), ab = ll(ab), bc = ll(bc), ac = ll(ac), abc = ll(abc);
    while (low < high) {
        let mid = low + high >> 1n;
        let cnt = mid / a + mid / b + mid / c - mid / ab - mid / bc - mid / ac + mid / abc;
        cnt < n ? low = mid + 1n : high = mid;
    }
    return low;
};
```