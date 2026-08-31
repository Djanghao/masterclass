# c#, Recursion

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/3324918/](https://leetcode.com/problems/output-contest-matches/solutions/3324918/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A simple recursion should do

# Approach
<!-- Describe your approach to solving the problem. -->
Recursion

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(2^n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(2^n)$$

# Code
```
public class Solution {
    private static string[] Do(string[] items) {
        if (items.Length <= 1)
            return items;

        string[] result = new string[items.Length / 2];

        for (int i = 0; i < result.Length; ++i)
            result[i] = $"({items[i]},{items[items.Length - 1 - i]})";

        return Do(result);
    }

    public string FindContestMatch(int n) => Do(Enumerable
        .Range(1, n)
        .Select(item => item.ToString())
        .ToArray())[0];
}
```