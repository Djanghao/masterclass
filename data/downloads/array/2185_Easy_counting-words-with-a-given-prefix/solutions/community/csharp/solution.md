# C# no built-in functions

**Author:** eduard92
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/3099858/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/3099858/)

---


# Code
```
public class Solution {
    public int PrefixCount(string[] words, string pref) {
        var count = 0;

        var j = 0;
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length < pref.Length) continue;
            var hasPrefix = true;
            while (j < pref.Length)
            {
                if (pref[j] != words[i][j])
                {
                    hasPrefix = false;
                    break;
                }
                j++;
            }

            if (hasPrefix) count++;
            j = 0;
        }

        return count;
    }
}
```