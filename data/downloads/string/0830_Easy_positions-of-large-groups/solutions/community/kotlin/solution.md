# Kotlin Best Solution

**Author:** progp
**Votes:** 4
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/4385474/](https://leetcode.com/problems/positions-of-large-groups/solutions/4385474/)

---


# Code
```
class Solution {
    fun largeGroupPositions(s: String): List<List<Int>> {
        val n = s.length
        val arr = ArrayList<List<Int>>()
        var (i, j) = Pair(0, 0)
        while (i < n - 1) {
            while (j < n && s[i] == s[j]) j++
            if (j - i > 2) arr.add(listOf(i, j-1))
            i = j
        }
        return arr
    }
}
```