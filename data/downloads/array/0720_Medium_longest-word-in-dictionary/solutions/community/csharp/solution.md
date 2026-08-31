# C# beats 90%, using HashSet

**Author:** kpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/4890340/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/4890340/)

---

# Code
```
public class Solution
{
    public string LongestWord(string[] words)
    {
        HashSet<string> hs = [.. words];
        string result = string.Empty;

        foreach (var w in words)
        {
            bool found = true;

            for (int length = w.Length; length >= 1; length--)
            {
                if (!hs.Contains(w[..length]))
                {
                    found = false;
                    break;
                }
            }

            if (!found) continue;

            if (result.Length < w.Length) result = w;
            else if (result.Length == w.Length && StringComparer.Ordinal.Compare(w, result) < 0) result = w;
        }

        return result;
    }
}
```