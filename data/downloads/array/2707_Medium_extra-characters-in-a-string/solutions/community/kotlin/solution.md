# :: Kotlin :: Recursive + Dynamic Programming

**Author:** znxkznxk1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/3581409/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/3581409/)

---

# Code
```
class Solution {
    fun minExtraChar(s: String, dictionary: Array<String>): Int {
        val memo = HashMap<String, Int>() 

        fun dfs(str: String): Int {
            if (str.length == 0) return 0
            if (memo.containsKey(str)) return memo.getOrDefault(str, 0)
            val n = str.length
            var result = n

            for (word in dictionary) {
                val m = word.length
                if (n < m) continue

                val left = str.substring(0, m)
                if (!left.equals(word)) continue

                val right = str.substring(m)
                result = Math.min(dfs(right), result)
            }

            result = Math.min(dfs(str.substring(1)) + 1, result)
            memo.put(str, result)
            return result
        }

        return dfs(s)
    }
}
```