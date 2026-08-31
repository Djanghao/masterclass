# Simple solution with TypeScript

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4389618/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4389618/)

---

# Intuition
Here we have:
- `n` and `m` integers
- our goal is to find integers `num1` and `num2`, such that:
- `num1`: The sum of all integers in the range `[1, n]` that are not divisible by `m`.
- `num2`: The sum of all integers in the range `[1, n]` that are divisible by `m`.

# Complexity
- Time complexity: **O(N)**

- Space complexity: **O(1)**

# Code
```
function differenceOfSums(n: number, m: number): number {
    let ans = 0
    
    // check, if a particular integer is divisible by m
    // and treat it as num1, otherwise as num2
    for (let i = 0; i < n + 1; i++) ans += i % m ? i : -i

    return ans
};
```