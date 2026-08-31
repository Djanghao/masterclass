# Kotlin Imperative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/5443612/](https://leetcode.com/problems/count-asterisks/solutions/5443612/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(k)

# Code
```
class Solution {
    fun countAsterisks(s: String): Int {
        var (pair, res) = arrayOf(0, 0)
        s.forEach{
            when (it) {
                '|' -> pair += 1
                else -> if (pair % 2 == 0 && it == '*') res += 1
            }
        }
        return res
    }
}
```