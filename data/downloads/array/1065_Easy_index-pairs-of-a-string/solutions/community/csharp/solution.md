# Straightforward C# Solution

**Author:** Thyreophora
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/4157468/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/4157468/)

---

# Code
```
public class Solution 
{
    public int[][] IndexPairs(string text, string[] words) 
    {
        var pairs = new List<int[]>();

        foreach ( var word in words )
            for (int i = 0; i <= text.Length - word.Length; i++)
                if (text.Substring(i, word.Length) == word)
                    pairs.Add(new[] { i, i + word.Length - 1 });

        return pairs.OrderBy(x => x[0]).ThenBy(x => x[1]).ToArray();
    }
}
```