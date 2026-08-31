# similar to 01 Knapsack problem

**Author:** swu1747
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4965250/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4965250/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
(O)N*K
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
(O)N
# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPower = function (nums, k) {
    const mod = Math.pow(10, 9) + 7
    const n = nums.length
    const memo = new Array(k + 1).fill(0)
    memo[0] = 1
    for (let i = 0; i < n; i++) {
        for (let j = k; j >= 0; j--) {
            memo[j] = (memo[j] * 2) % mod
            if (nums[i] <= j) {
                memo[j] += memo[j - nums[i]]
            }
        }
    }
    return memo[k]%mod
};
```