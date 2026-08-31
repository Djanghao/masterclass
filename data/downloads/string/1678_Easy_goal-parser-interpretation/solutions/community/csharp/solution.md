# C# one-liner

**Author:** YaJohny
**Votes:** 11
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/3130949/](https://leetcode.com/problems/goal-parser-interpretation/solutions/3130949/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string Interpret(string command)
            => command.Replace("()", "o").Replace("(al)", "al");
}
```