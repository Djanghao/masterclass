# Not optimal, but short

**Author:** lazy-bird
**Votes:** 0
**Link:** [https://leetcode.com/problems/hexspeak/solutions/4345812/](https://leetcode.com/problems/hexspeak/solutions/4345812/)

---


# Code
```
class Solution {
    fun toHexspeak(num: String): String {
        val res = num.toLong().toString(16).toUpperCase().replace("1", "I").replace("0", "O")
        return if(res.find { it in '2'..'9' } != null) "ERROR" else res 
    }
}
```