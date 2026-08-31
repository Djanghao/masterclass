# C# | Iteration

**Author:** c_4less
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3060635/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3060635/)

---

# Code
```
public class Solution {
    public int MostWordsFound(string[] sentences) {
        int maxWords = 0;

        foreach(var sentence in sentences)
        {
            maxWords = Math.Max(maxWords, sentence.Split(' ').Count());
        }
        return maxWords;
    }
}
```