# using reduce

**Author:** JDWilson
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/4045142/](https://leetcode.com/problems/maximum-gap/solutions/4045142/)

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
function maximumGap(nums: number[]): number {
  return nums.sort((a,b)=>a-b).reduce((a, c, i) => {
      return Math.abs(nums[i + 1] - c) > a ? Math.abs(nums[i + 1] - c) : a;
    }, 0);
};
```