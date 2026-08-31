# Simple Kotlin Answer with List and Loops

**Author:** V1Nut
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5103516/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5103516/)

---

# Code
```
class Solution {
    fun numSub(s: String): Int {
        var list = mutableListOf<Long>()
        var temp = 0L
        var ans = 0L

        for (c in s) {
            if (c == '0') {
                list.add(temp)
                temp = 0
            } else temp ++
        }
        
        list.add(temp)

        for (n in list) {
            ans += ((n + 1) * n) / 2
        }

        return (ans % (1000000007)).toInt()
    }
}
```