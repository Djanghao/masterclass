# Kotlin 95% recursive

**Author:** dbakerau
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/1076156/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/1076156/)

---

```
class Solution {
    fun closestValue(root: TreeNode?, target: Double): Int {
        return dfs(root, target, root!!.v)
    }
    
    private fun dfs(root: TreeNode?, target: Double, closest: Int): Int {
        var closest = closest
        if (root != null) {
            closest = target.closest(closest, root.v)
            closest = if (target < root.v.toDouble()) {
                dfs(root.left, target, closest)
            } else {
                dfs(root.right, target, closest)
            }
        }
        return closest
    }
    
    private fun Double.closest(a: Int, b: Int): Int {
        val aDiff = Math.abs(this - a.toDouble())
        val bDiff = Math.abs(this - b.toDouble())
        return if (aDiff < bDiff) a else b
    }
    
    private val TreeNode.v: Int
        get() = `val`
}
```