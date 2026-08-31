# Kotlin brute-force

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4346734/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4346734/)

---

# Code
```
class Solution {
    fun beautifulSubstrings(s: String, k: Int): Int {
        var res = 0

        for (i in 0 until s.length) {
            var v = 0
            var c = 0
            for (j in i until s.length) {
                if (isVow(s[j])) v++
                else c++
                
                if (isBeauty(v, c, k)) res++
            }
        }

        return res
    }

    private fun isBeauty(a: Int, b: Int, k: Int) = a == b && (a * b) % k == 0
    
    private fun isVow(c: Char) = c in setOf('a', 'e', 'i', 'o', 'u')
}
```