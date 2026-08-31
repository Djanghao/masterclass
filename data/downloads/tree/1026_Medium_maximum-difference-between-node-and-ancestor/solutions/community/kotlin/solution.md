# Kotlin simple solution

**Author:** SangramM
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4544083/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4544083/)

---

# Code
```
class Solution {
    fun maxAncestorDiff(root: TreeNode): Int = dfsMinMax(root, root.`val`, root.`val`)

    fun dfsMinMax(root: TreeNode, min: Int, max: Int): Int {
        val newMin = min(root.`val`, min)
        val newMax = max(root.`val`, max)
        var maxDiff = newMax - newMin

        root.left?.let {
            maxDiff = max(maxDiff, dfsMinMax(it, newMin, newMax))
        }

        root.right?.let {
            maxDiff = max(maxDiff, dfsMinMax(it, newMin, newMax))
        }

        return maxDiff
    }
}
```