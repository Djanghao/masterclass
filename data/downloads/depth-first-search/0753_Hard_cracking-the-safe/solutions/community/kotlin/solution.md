# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/4705480/](https://leetcode.com/problems/cracking-the-safe/solutions/4705480/)

---

# Code
```
class Solution {
    fun crackSafe(n: Int, k: Int): String =
        if (k == 1) "0".repeat(n)
        else {
            val q = (0..<n - 1).fold(1) { r, _ -> r * k }
            val vis = Array(q) { BooleanArray(k) }
            val sq = mutableListOf<Char>()

            fun dfs(u: Int): Unit =
                (0..<k).forEach { i ->
                    if (!vis[u][i]) {
                        vis[u][i] = true
                        dfs((u * k + i) % q)
                        sq.add('0' + i) } }

            dfs(0)
            sq.addAll(sq.size, sq.slice(0..<n - 1))
            sq.joinToString("")
        }
}
```