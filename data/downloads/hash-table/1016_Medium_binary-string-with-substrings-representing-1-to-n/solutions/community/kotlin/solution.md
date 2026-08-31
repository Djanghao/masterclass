# Custom extension function

**Author:** 1997onurcan
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4906720/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4906720/)

---

# Code
```
class Solution {
    fun queryString(s: String, n: Int): Boolean {
        for (i in 1..n){
            if (i.toBinaryString() !in s) return false 
        }
        return true
    }
    private fun Int.toBinaryString():String{
        var m = ""
        var n = this
        while(n>0){
            m += n%2
            n /=2
        }
        return m.reversed()
    }
}
```