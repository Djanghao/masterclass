# Scala 100% beats, simple solution

**Author:** egssor
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5981831/](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5981831/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def maxMoves(grid: Array[Array[Int]]): Int = {
        val m = grid.length
        val n = grid(0).length
        // \u041A\u044D\u0448 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432
        val memo = Array.fill(m, n)(-1)

        def dfs(i: Int, j: Int): Int = {
            // \u0415\u0441\u043B\u0438 \u0434\u043E\u0448\u043B\u0438 \u0434\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430, \u0442\u043E \u043D\u0435\u0442 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u0445\u043E\u0434\u043E\u0432
            if (j == n - 1) return 0
            // \u0415\u0441\u043B\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0443\u0436\u0435 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0435\u0433\u043E
            if (memo(i)(j) != -1) return memo(i)(j)

            var maxSteps = 0
            // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0442\u0440\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: \u0432\u0432\u0435\u0440\u0445 \u0432\u043F\u0440\u0430\u0432\u043E, \u0432\u043F\u0440\u0430\u0432\u043E, \u0432\u043D\u0438\u0437 \u0432\u043F\u0440\u0430\u0432\u043E
            for ((ni, nj) <- Seq((i - 1, j + 1), (i, j + 1), (i + 1, j + 1))) {
                if (ni >= 0 && ni < m && nj < n && grid(ni)(nj) > grid(i)(j)) {
                    maxSteps = math.max(maxSteps, 1 + dfs(ni, nj))
                }
            }

            memo(i)(j) = maxSteps
            maxSteps
        }

        // \u041D\u0430\u0445\u043E\u0434\u0438\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0448\u0430\u0433\u043E\u0432, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u043B\u044E\u0431\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430
        (0 until m).map(i => dfs(i, 0)).max
    }
}

```