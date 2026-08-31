# Kotlin simple solution

**Author:** neo204
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2948532/](https://leetcode.com/problems/count-anagrams/solutions/2948532/)

---

```
class Solution {
    val mod: Long = (1e9+7).toLong()

    fun power(x: Long, y: Long): Long {
        var x: Long = x
        var y: Long = y
        var ans: Long = 1
        x %= mod
        while (y > 0) {
            if (y and 1 == 1L) 
                ans = (ans * x) % mod
            x = (x * x) % mod
            y = y shr 1
        }
        return ans
    }
    
    fun factorial(x: Long): Long{
        var fac: Long = 1L
        for(i in 1 until x+1)
            fac = (fac * i) % mod
        return fac
    }

    fun countAnagrams(s: String): Int {
        var ans = 1L
        s.split(' ').forEach {
            val counts = LongArray(26){0}
            for(c in it) {
                counts[c-'a']++
            }
            var fac: Long = factorial(it.length.toLong())
            for(cnt in counts) {
                if(cnt != 0L) {
                    fac = (fac * power(factorial(cnt),mod-2))%mod
                }
            }
            ans = (ans * fac) % mod
        }
        return ((ans + mod) % mod).toInt()
    }
}
```