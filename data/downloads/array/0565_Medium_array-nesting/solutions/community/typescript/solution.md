# o(n)

**Author:** haque_jibon
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/5908941/](https://leetcode.com/problems/array-nesting/solutions/5908941/)

---

# Intuition
- Each elements belongs to only one loop. So each iteration mark visited elements as -1 for avoiding duplicate iteration.
- Start from the each node and count the circle
- update the max circle size.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function arrayNesting(nums: number[]): number {
  let ans = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let size = 0;
    let k = i;

    while (nums[k] >= 0) {
      let num = nums[k];
      nums[k] = -1;
      k = num;
      size++;
    }

    ans = Math.max(ans, size);
  }

  return ans;
}
```