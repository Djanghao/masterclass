# TypeScript single line || Solution by Navyendhu Menon

**Author:** navyendhummenon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5568175/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5568175/)

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
function findValueOfPartition(nums: number[]): number {

    return Math.min(...nums.sort((a, b) => a - b).slice(1).map((num, index) => num - nums[index]))


};
```