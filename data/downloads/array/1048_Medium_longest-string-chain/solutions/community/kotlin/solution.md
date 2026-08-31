# DFS with Memoisation [KOTLIN]

**Author:** gob1nd
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/4079193/](https://leetcode.com/problems/longest-string-chain/solutions/4079193/)

---

# Code
```
class Solution {
    fun longestStrChain(w: Array<String>): Int {
        val words: HashSet<String> = hashSetOf()
        w.forEach { word -> words.add(word) }
        val dp: HashMap<String, Int> = hashMapOf()
        fun solve(word: String): Int {
            if (words.contains(word).not()) return 0
            if (dp.containsKey(word) == true) {
                return dp[word] ?: 0
            }
            var len = 1
            for (i in 0 until word.length) {
                val left = word.substring(0, i)
                val right = word.substring(i + 1, word.length)
                len = maxOf(len, 1 + solve(left + right))
            }
            dp[word] = len
            return len
        }
        var ans = 1
        for (word in words) {
            ans = maxOf(solve(word), ans)
        }
        return ans
    }
}
```