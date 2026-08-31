# .::kotlin::. DFS, 3-lines

**Author:** dzmtr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5387917/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5387917/)

---

```
class Solution {
    fun getLonelyNodes(root: TreeNode?): List<Int> = buildList {
        
        fun dfs(node: TreeNode?): Int = node?.run {
            if (dfs(left) + dfs(right) == 1) (left ?: right)?.let { add(it.`val`) }
            1
        } ?: 0
        
        dfs(root)
    }
}
```