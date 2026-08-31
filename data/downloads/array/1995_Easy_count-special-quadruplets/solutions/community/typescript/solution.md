# [TypeScript] for-loop x 4

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/4281662/](https://leetcode.com/problems/count-special-quadruplets/solutions/4281662/)

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
function countQuadruplets(nums: number[]): number {
  let count = 0;
  for (let w = 3; w < nums.length; w++) {
    for (let x = 0; x < w - 2; x++) {
      for (let y = x + 1; y < w - 1; y++) {
        for (let z = y + 1; z < w; z++) {
          if (nums[w] == nums[x] + nums[y] + nums[z]) count += 1;
        }
      }
    }
  }

  return count;
};
```