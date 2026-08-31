# Simple TS solution

**Author:** scibert
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4036968/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4036968/)

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
function maxAbsValExpr(arr1: number[], arr2: number[]): number {
   let maxValue = -1

   for (let i = 0; i < arr1.length; i++) {
      for (let j = i; j < arr2.length; j++) {
         const value = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j)
         if (value > maxValue) maxValue = value
      }
   }
   return maxValue
}
```