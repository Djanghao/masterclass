# Very simple solution using C#, 3 lines of code, beats 98%, 64ms runtime

**Author:** YaJohny
**Votes:** 14
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/3897838/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/3897838/)

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
    public string ReverseWords(string s)
        {
            string[] words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
            Array.Reverse(words);
            return string.Join(" ", words);
        }
}
```