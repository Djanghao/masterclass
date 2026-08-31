# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4923485/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4923485/)

---

# Code
```
class Solution {
    fun minimizeStringValue(s: String): String {
        val charr = s.toCharArray()
        val n = charr.size
        val cache = IntArray(123){0}
        val list = mutableListOf<Char>()
        
        for (i in charr.indices) {
            val ch = charr[i]
            if (ch != '?') {
                cache[ch.toInt()] += 1
            }
        }
        
        for (i in n - 1 downTo 0) {
            val ch = charr[i]
            
            if (ch == '?') {
                var min = Int.MAX_VALUE
                var p = '-'
                
                for (c in 'a'..'z') {
                    val f = cache[c.toInt()]
                    if (f < min) {
                        min = f
                        p = c
                    }
                }
                
                list.add(p)
                cache[p.toInt()] += 1
            }
        }
        
        list.sort()
        
        var j = 0
        
        for (i in charr.indices) {
            if (charr[i] == '?') {
                charr[i] = list[j]
                j += 1
            }
        }
        
        
        return charr.joinToString("")
    }
}
```