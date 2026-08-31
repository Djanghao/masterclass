# Simple Fast Kotlin Solution || Faster Than 100%

**Author:** PoeticIvy302543
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2180604/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2180604/)

---

Kotlin code:
```
    fun longestSubsequence(s: String, k: Int): Int {
        var sum = 0L
        var z = 0
        for (i in s) {
            if(i=='0') {
                z++
            }
        }
        var i = s.length-1
        while (i>=0 && sum<k) {
            if(s[i]=='1') {
                sum+=Math.pow(2.0, (s.length-i-1).toDouble()).toInt()
                z++
            }
            i--
        }
        if(sum>k) {
            z--
        }
        return z
    }
```