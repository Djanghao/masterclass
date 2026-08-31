# (8ms)CharArray(s.length+spaces.size)

**Author:** sav20011962
**Votes:** 2
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106812/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106812/)

---

# Approach
CharArray(s.length+spaces.size)
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun addSpaces(s: String, spaces: IntArray): String {
        val rez = CharArray(s.length+spaces.size)
        var pos_s = 0
        var pos_rez = 0
        for (N in spaces) {
            while (pos_s<N) {
                rez[pos_rez++] = s[pos_s++]
            }
            rez[pos_rez++]=' '
        }
        while (pos_s<s.length) {
            rez[pos_rez++] = s[pos_s++]
        }
        return String(rez)
    }
}
```