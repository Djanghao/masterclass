# DP: Maximal increasing subsequence(all strings through)

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5567915/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5567915/)

---

# Approach
Similar to the search for the maximum length of an increasing subsequence.
\u041Enly the comparison goes through all strings in a special function
# Complexity
![image.png](./images/0.png)
# Code
```
// similar to the search for the maximum length of an increasing subsequence
// only the comparison goes through all strings 
// in a special function
class Solution {
    fun minDeletionSize(strs: Array<String>): Int {
        val length = strs[0].length
        val dp = IntArray(length, {1})
        var max = 0
        fun checkAllStrs(j: Int, i: Int): Boolean {
            for (s in strs) 
                if (s[j] > s[i]) return false
            return true
        }
        for (i in 0 until length) {
            for (j in 0 until i) {
                if (checkAllStrs(j, i)) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                }
            }
            max = Math.max(max, dp[i])
        }
        return length - max
    }

}
```