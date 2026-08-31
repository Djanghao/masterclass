# C# - One Line

**Author:** CDev
**Votes:** 11
**Link:** [https://leetcode.com/problems/detect-capital/solutions/2984184/](https://leetcode.com/problems/detect-capital/solutions/2984184/)

---

# Code
```
public class Solution 
{
    public bool DetectCapitalUse(string word)
    {
        return word.All(char.IsUpper) || word.Skip(1).All(char.IsLower);
    }
}
```