# Simple TypeScript DP solution

**Author:** radokirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4143514/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4143514/)

---

# Intuition
DP based on the fact that the first element of value $m$ either occurs at position $i$ or it is not used at all.

# Approach
Dynamic programming through writing out the simple recursion and caching.

Note: Using BigInt to avoid loss of precision with doubles.

# Complexity
- Time complexity:
O(n^2 * m * k)

- Space complexity:
O(n * m * k) - used for DP cache.

# Code
```
let M = BigInt(10 ** 9 + 7);
let cache = new Map<string, bigint>();

function numOfArrays(n: number, m: number, k: number): number {
    return Number(num(n, m, k));
}

// inner function using bigint to avoid double loss of precision.
// first non-representable int in doubles is 2**53 + 1, which can be
// reached by multiplying two ints that are less than M.
function num(n: number, m: number, k: number): bigint {
    if (k > m) return 0n;
    if (k === 0) return n === 0 ? 1n : 0n;
    if (n === 0) return 0n;
    if (m === 1) return 1n;

    let h = [n,m,k].join(',');
    if (cache.has(h)) return cache.get(h)!;
    
    let t = 0n;    
    // 1) either first value m is in possition i
    // which means we recurse for the first [0, i - 1] positions
    // and the last [i + 1, n - 1] positions are simply choosen m ** (n - i - 1) ways, since there are no constraints left there.
    for (let i = 0; i < n; i++) {
        t += num(i, m - 1, k - 1) * BigInt(m) ** BigInt(n - i - 1);
        t %= M;
    }
    // 2) or m is never used, so all numbers are in [1, m - 1] range.
    t += num(n, m - 1, k);
    t %= M;
    cache.set(h, t);
    return t;
}
```