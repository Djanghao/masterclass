# 🐌 C# - linq

**Author:** user7166Uf
**Votes:** 2
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/2132456/](https://leetcode.com/problems/license-key-formatting/solutions/2132456/)

---

```
public class Solution
{
    public string LicenseKeyFormatting(string s, int k)
        => string.Join('-', s.Where(c => c is not '-')
                .Select(char.ToUpper)
                .Reverse()
                .Chunk(k)
                .Select(x => new string(x.Reverse().ToArray()))
                .Reverse()
        );
}
```