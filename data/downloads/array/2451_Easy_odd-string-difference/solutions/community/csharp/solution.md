# c#, Linq query

**Author:** bytchenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2756844/](https://leetcode.com/problems/odd-string-difference/solutions/2756844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can group words by their difference arrays and pick the group with one item.

# Approach
<!-- Describe your approach to solving the problem. -->
Linq quertu

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * word.Length)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n * word.Length)

# Code
```
public class Solution {
    public string OddString(string[] words) => words
            .GroupBy(word => string.Join(",", Enumerable
                .Range(0, word.Length - 1)
                .Select(i => word[i] - word[i + 1])))
            .Where(group => group.Count() == 1)
            .First()
            .First();        
}
```