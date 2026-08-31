# Simple sumOf{}. Beats 98.8% - runtime, 78% - memory.

**Author:** silly_monkey
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/4089205/](https://leetcode.com/problems/find-the-difference/solutions/4089205/)

---


```
class Solution {
    fun findTheDifference(s: String, t: String): Char {

        val sumOfFirst = s.sumOf{ it.code }
        val sumOfSecond = t.sumOf{ it.code }
        val result = sumOfSecond - sumOfFirst

        return result.toChar()

    }
}
```