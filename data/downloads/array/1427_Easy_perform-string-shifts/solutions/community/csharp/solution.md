# c# neat solution, beats 100%

**Author:** ariel30
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/4460649/](https://leetcode.com/problems/perform-string-shifts/solutions/4460649/)

---

The left shifts and the right shifts cancel each other, just calculate the final shift and implement it shortly. That's it.

# Code
```
public class Solution {
    public string StringShift(string s, int[][] shift) {
        int total = 0;
        foreach (var sh in shift) {
            total += sh[0] == 0 ? sh[1] : -sh[1];
        }
        bool leftShift = total > 0;
        total = Math.Abs(total) % s.Length;
        
        if (total > 0) {
            if (leftShift) {
                s = s.Substring(total) + s.Substring(0, total);
            }
            else {
                s = s.Substring(s.Length - total) + s.Substring(0, s.Length - total);
            }
        }
        return s;
    }
}
```