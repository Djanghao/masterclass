# C# fast solution, clean code using Dictionaries beats 97%

**Author:** n1l
**Votes:** 20
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2979408/](https://leetcode.com/problems/valid-anagram/solutions/2979408/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        var symbolFrequency = new Dictionary<char, int>();
        for (int i = 0; i < s.Length; i++) {
            symbolFrequency.TryAdd(s[i], 0);
            symbolFrequency.TryAdd(t[i], 0);

            symbolFrequency[s[i]]++;
            symbolFrequency[t[i]]--;
        }

        return symbolFrequency.Values.All(frequence => frequence == 0);        
    }
}
```