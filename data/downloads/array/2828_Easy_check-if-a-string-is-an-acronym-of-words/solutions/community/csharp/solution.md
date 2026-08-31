# Beats 96%! Easiest C# solution.

**Author:** IhorArkh
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4181863/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4181863/)

---

# Complexity
![image.png](./images/0.png)

# Code
```
public class Solution {
    public bool IsAcronym(IList<string> words, string s) {
        if (words.Count != s.Length)
            return false;
        
        for (int i = 0; i < words.Count; i++)
        {
            if (words[i][0] != s[i])
                return false;
        }

        return true;
    }
}
```