# c#, Easy Linq

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5267818/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5267818/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
A simple Linq query will do the task.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int[] OrArray(int[] nums) => Enumerable
        .Range(0, nums.Length - 1) 
        .Select(i => nums[i] | nums[i + 1]) 
        .ToArray();
}
```