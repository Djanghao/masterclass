# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/combination-sum/solutions/2915040/](https://leetcode.com/problems/combination-sum/solutions/2915040/)

---

```
internal class Solution {
    fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
        val ans = mutableListOf<List<Int>>()
        val cand = mutableListOf<Int>()

        tailrec fun dfs(i: Int, target: Int) {
            if (target == 0) { ans += cand.toList(); return }
            if (target < 0 || i >= candidates.size) return
            cand += candidates[i]; dfs(i, target - candidates[i])
            cand -= candidates[i]; dfs(i + 1, target)
        }

        dfs(0, target)
        return ans
    }
}
```