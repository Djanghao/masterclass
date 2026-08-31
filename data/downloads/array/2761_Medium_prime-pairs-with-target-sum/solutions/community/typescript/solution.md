# TypeScript Solution

**Author:** bleedcloud
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3851446/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3851446/)

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
function isPrime(x: number): boolean {
    for(let i: number = 2; i <= Math.sqrt(x); i++) 
        if (x % i === 0) return false;
    return true;
}

function findPrimePairs(n: number): number[][] {
    let arr: number[][] = [];
    for (let i: number = 2; i <= n / 2; i++) 
        if (isPrime(i) && isPrime(n - i)) arr.push([i, n - i]);
    return arr;
};
```