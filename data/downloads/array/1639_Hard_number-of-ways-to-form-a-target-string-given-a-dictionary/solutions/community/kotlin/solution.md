# Kotlin Count and Search

**Author:** kotlinc
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421428/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421428/)

---

```
class Solution {
  fun numWays(words: Array<String>, target: String): Int {
    val MOD: Int = 1_000_000_007
    val n = words[0].length
    val counts = Array(n) {IntArray(26)}
    for (word in words) {
      for (i in 0 until n)
        counts[i][word[i] - 'a']++
    }
    val memo = Array(n) {IntArray(target.length) { -1 } }
    fun dfs(column: Int, idx: Int): Int {
      if (idx == target.length) return 1
      if (column == n) return 0
      if (memo[column][idx] == -1) {
        var tmp = dfs(column + 1, idx)
        val ch = target[idx] - 'a'
        if (counts[column][ch] != 0)
          tmp = ((tmp + counts[column][ch].toLong() * dfs(column + 1, idx + 1)) % MOD).toInt()
        memo[column][idx] = tmp
      }
      return memo[column][idx]
    }
    return dfs(0, 0)
  }

}
```