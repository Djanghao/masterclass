# c#, Linq oneliner

**Author:** bytchenko
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2899010/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2899010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Direct solution

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n)`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)`

# Code
```
public class Solution {
    public int MaximumValue(string[] strs) => strs
      .Max(item => int.TryParse(item, out int value) ? value : item.Length);    
}
```