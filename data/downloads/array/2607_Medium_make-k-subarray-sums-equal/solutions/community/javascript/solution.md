# JavaScript median greedy 254ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3366846/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3366846/)

---

```
const makeSubKSumEqual = (a, k) => medianGreedy(a, k)

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const medianGreedy = (a, k) => {
    k = gcd(a.length, k);
    let res = 0;
    for (let i = 0; i < k; i++) {
        let b = [];
        for (let j = i; j < a.length; j += k) b.push(a[j]); // collect gcd(n, k) elements based on B\xE9zout's identity
        b.sort((x, y) => x - y);
        let mid = b[b.length >> 1];
        for (const x of b) res += Math.abs(x - mid); // greedy: reach to median have lowest cost
    }
    return res;
};
```