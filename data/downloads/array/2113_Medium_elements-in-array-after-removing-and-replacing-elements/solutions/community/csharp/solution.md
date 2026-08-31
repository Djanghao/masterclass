# c#, modulo arithmetics

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3513776/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3513776/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can compute `length` and `index` of `nums` at minute `at` with a help of modulo arithmetics. Then we can query with a help of *Linq*

# Approach
<!-- Describe your approach to solving the problem. -->
Modulo arithmetics and Linq

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(|queries|)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(|queries|)$$

# Code
```
public class Solution {
    
    private static int Solve(int[] nums, int at, int index) {
      if (index < 0 || index > nums.Length)
        return -1;

      int mod = 2 * nums.Length;

      at = (at % mod + mod) % mod;

      int length;

      if (at <= nums.Length) {
        length = nums.Length - at;

        if (index >= length)
          return -1;

        return nums[index + (nums.Length - length)];
      }
      else {
        length = at - nums.Length;

        if (index >= length)
          return -1;

        return nums[index];
      }
    }

    public int[] ElementInNums(int[] nums, int[][] queries) {
        return queries
            .Select(array => Solve(nums, array[0], array[1]))
            .ToArray();    
    }
}
```