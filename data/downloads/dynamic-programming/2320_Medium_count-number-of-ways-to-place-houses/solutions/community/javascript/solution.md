# 😸😸😸 easy js

**Author:** jijekcom
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5634617/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5634617/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
const hash = new Map(); 
hash.set(0, 0).set(0, 1);

const mod = 1e9+7;

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    if (!hash.has(n-1)) hash.set(n-1, fib(n-1) % mod);
    if (!hash.has(n-2)) hash.set(n-2, fib(n-2)) % mod;
  
    hash.set(n, (hash.get(n-1) + hash.get(n-2)) % mod);
  
    return hash.get(n)
}

var countHousePlacements = function(n) {

    const cur = fib(n+1);

    return Number(BigInt(cur) * BigInt(cur) % BigInt(mod));
};
```