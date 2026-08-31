# Kotlin [Trie + DP Solution]

**Author:** saku1
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788353/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788353/)

---

# Code
```kotlin []
class Solution {
  fun minValidStrings(words: Array<String>, target: String): Int {
    class Trie {
      var isLeaf: Boolean = false
      val CHAR_SIZE = 26
      var children: Array<Trie?> = Array(CHAR_SIZE) { null }

      fun insert(key: String) {
        var curr: Trie = this

        for (ch in key.toCharArray()) {
          if (curr.children[ch - 'a'] == null) {
            curr.children[ch - 'a'] = Trie()
          }
          curr = curr.children[ch - 'a']!!
        }
        curr.isLeaf = true
      }
    }

    val trie = Trie()
    words.forEach { trie.insert(it) }
    val dp = IntArray(target.length + 1) { 100000 }  // any unreachable number
    dp[0] = 0
    for (i in 0 until target.length) {
      var current = trie
      for (j in i until target.length) {
        if (current.children[target[j] - 'a'] == null) break
        current = current.children[target[j] - 'a']!!
        dp[j + 1] = minOf(dp[j + 1], dp[i] + 1)
      }
    }
    return if (dp.last() == 100000) -1 else dp.last()
  }
}
```