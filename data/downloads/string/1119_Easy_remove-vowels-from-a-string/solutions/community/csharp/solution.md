# Simple approach using String.Replace

**Author:** bholli
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5448200/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5448200/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Since this is a string, I used builtin string.Replace() to remove vowels.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
public class Solution {
    public string RemoveVowels(string s) {
        return s.Replace("a","").Replace("e","").Replace("i","").Replace("o","").Replace("u","");
    }
}
```