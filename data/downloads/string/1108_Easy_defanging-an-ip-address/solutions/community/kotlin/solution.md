# Simple Kotlin solution without replace() function

**Author:** ramazancelikgtu
**Votes:** 2
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/2901064/](https://leetcode.com/problems/defanging-an-ip-address/solutions/2901064/)

---

# Useful links for StringBuilder() 
https://medium.com/@ramazanbullet/what-is-stringbuilder-in-kotlin-729adc76dc31
# Code
```
class Solution {
    fun defangIPaddr(address: String): String {
       // Defang the given address
    val defanged = StringBuilder()
    for (ch in address) {
        if (ch == '.') {
            defanged.append("[.]")
        } else {
            defanged.append(ch)
        }
    }
    return defanged.toString()

    }
}
```