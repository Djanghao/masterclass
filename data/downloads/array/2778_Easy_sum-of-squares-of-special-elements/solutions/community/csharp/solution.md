# c#, Linq

**Author:** bytchenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3772825/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3772825/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we can query the initial `nums` array with a help of Linq

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int SumOfSquares(int[] nums) => nums
      .Where((item, index) => nums.Length % (index + 1) == 0)
      .Sum(item => item * item);    
}
```