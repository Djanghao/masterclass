# Kotlin - functional style

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2029530/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2029530/)

---

```
class Solution {
    fun minDeletionSize(strs: Array<String>): Int =
        (0 until strs[0].length).count { i ->
            (0 until strs.lastIndex).any { j ->
                strs[j][i] > strs[j + 1][i]
            }
        }
}
```