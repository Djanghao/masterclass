# c#, Linq

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158251/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158251/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Items which belongs to the same linear subset have the same `key = item - index`, so we can group by the `key` and the answer will be a group with maximum sum. 

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

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
  public long MaxScore(int[] prices) => prices
    .Select((value, index) => (key : value - index, value : (long)value))
    .GroupBy(pair => pair.key, pair => pair.value)
    .Max(group => group.Sum());    
}
```