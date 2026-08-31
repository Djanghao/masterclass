# yet another variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/4566238/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/4566238/)

---

# Code
```
class Solution {
    fun secondsToRemoveOccurrences(s: String): Int = s.fold(Pair(0,0)) { (z,s), c ->
            val nz = z + if (c == '0') 1 else 0
            Pair(nz, if (c=='1' && nz>0) max(s+1, nz) else s) }.second
}
```