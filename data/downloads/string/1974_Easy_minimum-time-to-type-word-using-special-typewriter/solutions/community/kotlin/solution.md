# 📌 Kotlin | Greedy | O(n) | Faster than 100.00%

**Author:** Salih_Rezvanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2179258/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2179258/)

---

**Kotlin:**
```
class Solution {
    fun minTimeToType(word: String): Int {
        var cur = 'a'
        var time = 0
        for (w in word) {
            if (w != cur) {
                val cost = abs(w - cur)
                time += min(cost, 26 - cost)
                cur = w
            }
        }
        return time + word.length
    }
}
```

**Complexity:**
* Time:   O(n)
* Space: O(1)
