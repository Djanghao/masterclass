# Simple 1 liner recursion solution using C#

**Author:** vinaygovekar24
**Votes:** 2
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4360876/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4360876/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this using recursion by calling the same function with original value doubled everytime original is present in the input array

# Approach
<!-- Describe your approach to solving the problem. -->
First we check if array contains the original element.
Return original element if its not found in the input array
else call the same function again by passing original multiplied by 2


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
For array.Contains()

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int FindFinalValue(int[] nums, int original) {
        return nums.Contains(original)?FindFinalValue(nums,original*2):original;
    }
}
```