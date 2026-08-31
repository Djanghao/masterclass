# Kotlin solution

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/3774089/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/3774089/)

---

# Code
```
class Solution {
    fun closetTarget(words: Array<String>, target: String, startIndex: Int): Int {
        val n = words.size
        var i = startIndex
        var j = startIndex
        var forwardCount = 0
        var backwardCount = 0

        while (forwardCount < n) {
            if (words[i] == target || words[j] == target)
                return Math.min(forwardCount, backwardCount)

            forwardCount++
            backwardCount++

            i = (i + 1) % n
            j = (j - 1 + n) % n
        }

        return -1
    }
}
```