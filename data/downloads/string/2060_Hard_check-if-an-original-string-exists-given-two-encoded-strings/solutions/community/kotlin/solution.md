# Kotlin Solution Made Easy

**Author:** FastTurtle97
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4438000/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4438000/)

---

# Code
```
class Solution {
    fun possiblyEquals(s1: String, s2: String): Boolean {
        val n = s1.length
        val m = s2.length
        val memo = HashMap<String, Boolean>()
        fun solve(l: Int, r: Int, diff: Int): Boolean {
            fun tryDigitS1(l: Int, r: Int, diff: Int): Boolean {
                var k = 0
                while (l + k < n && s1[l + k].isDigit()){
                    val digit = s1.substring(l, l + k + 1).toInt()
                    if (solve(l + k + 1, r, diff + digit))
                        return true
                    k += 1
                }
                return false
            }

            fun tryDigitS2(l: Int, r: Int, diff: Int): Boolean {
                var k = 0
                while (r + k < m && s2[r + k].isDigit()){
                    val digit = s2.substring(r, r + k + 1).toInt()
                    if (solve(l, r + k + 1, diff - digit))
                        return true
                    k += 1
                }
                return false
            }
            if (l == n && r == m) return diff == 0
            if (l > n || r > m) return false

            if(memo.containsKey("$l-$r-$diff"))
                return memo["$l-$r-$diff"]!!

            memo["$l-$r-$diff"] = false

            if(l < n && s1[l].isDigit()){
                return tryDigitS1(l, r, diff)
            }
            if(r < m && s2[r].isDigit()){
               return tryDigitS2(l, r, diff)
            }
            if(diff < 0){
                return solve(l+1, r, diff + 1)
            }
            if(diff > 0){
               return solve(l, r+1, diff - 1)
            }
            if(l < n && r < m && s1[l] == s2[r]){
                return solve(l+1, r+1, diff)
            }
            return false
        }
        return solve(0, 0, 0)
    }
}

```