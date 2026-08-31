# C# Brute Force

**Author:** ilya-a-f
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/5143546/](https://leetcode.com/problems/longest-nice-substring/solutions/5143546/)

---

```csharp
public class Solution
{
    public string LongestNiceSubstring(string s)
    {
        var uppers = 0;
        var lowers = 0;
        var result = string.Empty;

        for (var i = 0; i < s.Length; i++, uppers = 0, lowers = 0)
        for (var j = i; j < s.Length; j++)
        {
            uppers |= char.IsUpper(s[j]) ? 1 << s[j] : 0;
            lowers |= char.IsLower(s[j]) ? 1 << s[j] : 0;

            var length = j - i + 1;
            if (uppers == lowers && length > result.Length)
                result = s.Substring(i, length);
        }

        return result;
    }
}
```