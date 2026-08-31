# C# simple

**Author:** mchim
**Votes:** 2
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/3126369/](https://leetcode.com/problems/sentence-similarity/solutions/3126369/)

---

# Code
```
public class Solution {
    public bool AreSentencesSimilar(string[] sentence1, string[] sentence2, IList<IList<string>> similarPairs) {
        if (sentence1.Length != sentence2.Length)
            return false;
        
        var pairs = new HashSet<(string, string)>();
        foreach (var pair in similarPairs)
        {
            pairs.Add((pair[0], pair[1]));
            pairs.Add((pair[1], pair[0]));
        }

        for (var i = 0; i < sentence1.Length; i++)
        {
            if (sentence1[i] != sentence2[i] && !pairs.Contains((sentence1[i], sentence2[i])))
                return false;
        }

        return true;
    }
}
```