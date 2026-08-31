# Kotlin Fast Solution

**Author:** promikhail
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/2867707/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/2867707/)

---

Solution with using just formulas, **without** "*all range iteration*" and "*toString()*"

```
class Solution {
    fun kthPalindrome(queries: IntArray, intLength: Int): LongArray {
        var res = LongArray(queries.size)
        
        val r = if(intLength % 2 == 0) 0 else 1
        val n = intLength / 2 + r
        
        val lo = Math.pow( 10.0, n.toDouble()-1 ).toLong()
        val hi = Math.pow( 10.0, n.toDouble()   ).toLong() - 1
        
        val dec = Math.pow( 10.0, n.toDouble()   ).toLong()

        for((idx, v) in queries.withIndex()) {
            var d : Long = lo + v - 1
            if( d < lo || d > hi ) d = -1
            val s : Long =
                if( d == -1L ) {
                    d
                } else {
                    if( r == 1 ) {
                        if( d < 10 ) {
                            d
                        } else {
                            d / 10 * dec + revert(d)
                        }
                    } else {
                        d * dec + revert(d)
                    }
                }
            res[idx] = s
        }        
        
        return res
    }
        
    fun revert(i: Long): Long {
        var s = 0L
        var d = i
        var r = 0L
        while(true){
            r = d % 10
            d = d / 10            
            s = s * 10 + r
            if( d == 0L ) break
        }        
        return s
    }
}
```