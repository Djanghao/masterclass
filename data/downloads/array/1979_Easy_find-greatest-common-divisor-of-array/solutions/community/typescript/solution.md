# Euclidean algorithm

**Author:** thiagosaife
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/5599608/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/5599608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find GCD using the Euclidean algorithm

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n + log s)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(log s)

# Code
```
function findGCD(nums: number[]): number {
    let s = Math.min(...nums)
    let l = Math.max(...nums)

    function euclid(a, b) {
        if (b === 0) return a

        return euclid(b, a % b)

    }

    return euclid(l, s)
};
```