# Simple (Long sum)

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/5851714/](https://leetcode.com/problems/shifting-letters/solutions/5851714/)

---

# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun shiftingLetters(s: String, shifts: IntArray): String {
        val ArrChar = s.toCharArray()
        var sum = 0L
        for (i in shifts.size-1 downTo 0) {
            sum += shifts[i]
            val ch = 'a' + ((sum - ('a'-ArrChar[i])) % 26).toInt()
            ArrChar[i] = ch

        }
        return String(ArrChar)
        // return ArrChar.concatToString()
    }
}
```