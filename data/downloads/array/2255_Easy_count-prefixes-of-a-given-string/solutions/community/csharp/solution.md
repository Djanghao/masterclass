# Easy one-liner C#

**Author:** rxcore
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4093620/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4093620/)

---


# Approach
Using Count and StartsWith

# Code
```
public class Solution {
    public int CountPrefixes(string[] words, string s) {
        return words.Count(i => s.StartsWith(i));
    }
}
```