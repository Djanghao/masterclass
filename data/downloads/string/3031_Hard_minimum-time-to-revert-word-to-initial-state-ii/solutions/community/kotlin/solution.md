# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4678028/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4678028/)

---

# Code
```
class Solution {
    fun minimumTimeToInitialState(word: String, k: Int): Int {
        val n = word.length
        var p = Pair(0, 0)
        val z = (1..<n).fold(IntArray(n)) { r, i ->
                    if (i < p.second) r[i] = minOf(p.second - i, r[i - p.first])
                    while (i + r[i] < n && word[r[i]] == word[i + r[i]]) r[i]++
                    if (i + r[i] > p.second) p = Pair(i, i + r[i])
                    r }
        return (1..n).find { (k * it).let{it >= n || z[it] >= n - it} }!!
    }
}
```