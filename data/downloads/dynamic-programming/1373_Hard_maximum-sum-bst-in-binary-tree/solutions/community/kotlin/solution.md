# Beats 100% || DFS || Kotlin

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/6109730/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/6109730/)

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
```kotlin []
import kotlin.math.max

/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    var maxSum = Int.MIN_VALUE
    fun maxSumBST(root: TreeNode?): Int {
        enumerate(root)
        return max(maxSum, 0)
    }

    data class Quadruple<A, B, C, D>(
        val first: A,
        val second: B,
        val third: C,
        val fourth: D
    )

    // SUM, max, min, isBST
    fun enumerate(root: TreeNode?): Quadruple<Int, Int, Int, Boolean> {
        if (root == null) return Quadruple(0, Int.MIN_VALUE, Int.MAX_VALUE, true)
        val left = enumerate(root.left)
        val right = enumerate(root.right)
        val sum = left.first + right.first + root.`val`

        val isLeftBST = if (root.left == null) true else root.`val` > root.left!!.`val`
        val isRightBST = if (root.right == null) true else root.`val` < root.right!!.`val`
        val isBST = isLeftBST &&
                isRightBST &&
                left.fourth &&
                right.fourth &&
                left.second < root.`val` &&
                right.third > root.`val`
        if (isBST) maxSum = max(maxSum, sum)

        val newMax = maxOf(root.`val`, left.second, right.second)
        val newMin = minOf(root.`val`, left.third, right.third)
        return Quadruple(sum, newMax, newMin, isBST)
    }
}
```