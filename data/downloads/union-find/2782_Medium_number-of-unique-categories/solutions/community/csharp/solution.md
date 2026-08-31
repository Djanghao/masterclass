# c#, brute force

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3791438/](https://leetcode.com/problems/number-of-unique-categories/solutions/3791438/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have at most `100` items to check and we can allowed ourself to compare each item vs. each having at most $$100 * 100 == 100^2 == 10000$$ comparisons.

# Approach
<!-- Describe your approach to solving the problem. -->
Loop over Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     public CategoryHandler(int[] categories);
 *     public bool HaveSameCategory(int a, int b);
 * }
 */
public class Solution {
    public int NumberOfCategories(int n, CategoryHandler categoryHandler) {
        List<int> unique = new List<int>();

        for (int i = 0; i < n; ++i) 
            if (!unique.Any(item => categoryHandler.HaveSameCategory(i, item)))
                unique.Add(i);
            
        return unique.Count;
    }
}
```