# Keep check the remaining is the prefix of the word (C#)

**Author:** Destiny130
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4754605/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4754605/)

---

# Intuition
If the remaining part is the prefix of the word, means there must a way to revert to initial state.

# Code
```
public class Solution {
    public int MinimumTimeToInitialState(string word, int k) {
        var res = 1;
        while (k * res <= word.Length && !word.StartsWith(word.Substring(k * res))) res++;
        return res;
    }
}
```