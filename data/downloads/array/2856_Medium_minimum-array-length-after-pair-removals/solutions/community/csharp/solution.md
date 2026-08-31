# c#, Linq and condition

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4055394/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4055394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If no value dominate, we are going to have either `0` or `1`. If some value *dominates*, i.e. if we have more than `n / 2` such items we'll fail to cancel all them out and $$count - (n - count) = 2 * count - n$$ will be left.  

# Approach
<!-- Describe your approach to solving the problem. -->
1. Query (Linq) for the most frequent item
2. Check if this item dominates 

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
    public int MinLengthAfterRemovals(IList<int> nums) {
        int max = nums
            .GroupBy(item => item) 
            .Max(group => group.Count());

        return max > nums.Count / 2
            ? 2 * max - nums.Count
            : nums.Count % 2;   
    }
}
```