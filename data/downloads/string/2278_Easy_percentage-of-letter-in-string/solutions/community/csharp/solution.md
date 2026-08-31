# Simplest 1-line

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3801409/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3801409/)

---


# Code
```
public class Solution {
    public int PercentageLetter(string s, char letter) {
        return 100 * s.Count(x => x == letter) / s.Length;
    }
}
```