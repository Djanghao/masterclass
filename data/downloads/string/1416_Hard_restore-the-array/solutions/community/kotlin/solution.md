# Kotlin

**Author:** kotlinc
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3445439/](https://leetcode.com/problems/restore-the-array/solutions/3445439/)

---

# Code
```
class Solution {
  fun numberOfArrays(s: String, k: Int): Int {
    val MOD: Int = 1_000_000_007

    val memo = IntArray(s.length) { -1 }

    fun dfs(idx: Int): Int {
      if (idx == s.length) return 1
      if (memo[idx] == -1) {
        var res = 0
        var num = 0L
        var i = idx
        while (i < s.length) {
          num = num * 10L + (s[i] - '0')
          if (num == 0L) break
          if (num > k) break
          res = (res + dfs(i + 1)) % MOD
          i++
        }
        memo[idx] = res
      }
      return memo[idx]
    }

    return dfs(0)
  }

}
```