# Kotlin Concise Solution | Bit Manipulation

**Author:** avlomakin
**Votes:** 0
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/4984588/](https://leetcode.com/problems/utf-8-validation/solutions/4984588/)

---

# Intuition
Get a total number of octets in symbol from the first octet, verify the rest and repeat

# Code
```
class Solution {

    fun validUtf8(data: IntArray): Boolean {
        var i  = 0
        while(i < data.size) {
            val octet = data[i]
            //total number of octets in symbol
            var octetsTotal = when {
                octet and 128 == 0 -> 1               //0xxxxxxx
                octet and 224 == 192 -> 2             //110xxxxx 
                octet and 240 == 224 -> 3             //1110xxxx 
                octet and 248 == 240 -> 4             //11110xxx 
                else -> return false
            }
            i++
            repeat(octetsTotal - 1) {
                //verify that the rest of the symbol is in 10xxxxxx format
                if(i >= data.size || (data[i++] and 192) != 128) return false
            }
        }
        return true
    }
}
```