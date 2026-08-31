# Kotlin Top Down DP

**Author:** thomaskatalis
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5093386/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5093386/)

---

# Intuition

Dynamic Programming using top-down approach.
1. DFS to create MyTreeNode for each TreeNode to simplify DP
2. Calculate result using res()
3. Flips if res is not equal to the desired result

# Complexity
- Time complexity:
O(n), each node is visited thrice during MyTreeNode creation, res() and flips()

- Space complexity:
O(n), we create a MyTreeNode for each TreeNode

# Code
```
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
    fun minimumFlips(root: TreeNode?, result: Boolean): Int {
        // Change to MyTreeNode
        val node = dfs(root)!!

        return if (node.res() == result) {
            0
        } else {
            node!!.flips()
        }
    }

    private fun dfs(root: TreeNode?): MyTreeNode? {
        if (root == null) {
            return null
        }
        return MyTreeNode(value = root.`val`, left = dfs(root.left), right=dfs(root.right))
    }

}
/**
    Rebuild the tree. Use top down DP.
 */
data class MyTreeNode(val value: Int, val left: MyTreeNode?, 
val right: MyTreeNode?) {
    // memoization of result.
    private var resCache: Boolean? = null
    private var flipsCache: Int? = null

    fun res(): Boolean {
        if (resCache == null) {
            resCache = when(value) {
                    0 -> false
                    1 -> true
                    2 -> left!!.res() || right!!.res()
                    3 -> left!!.res() && right!!.res()
                    4 -> left!!.res() xor right!!.res()
                    5 -> if (left != null) !left.res() else !right!!.res()
                    else -> error("invalid value: $value")
                }
        }
        return resCache!!
    }

    /** Calculate number of flip required */
    fun flips(): Int {
        if (flipsCache == null) {
            flipsCache = when(value) {
                0 -> 1
                1 -> 1

                // OR 
                2 -> {
                    // if both are true, then we need to flip both
                    if (left!!.res() && right!!.res()) {
                        left!!.flips() + right!!.flips()
                    } else if (left!!.res()) {
                        left!!.flips()
                    } else if (right!!.res()) {
                        right!!.flips()
                    } else {
                        // both are false. We need to flip the minimal
                        minOf(left!!.flips(), right!!.flips())
                    }
                }
                // AND
                3 -> {
                    // if both are false, then we need to flip both
                    if (!left!!.res() && !right!!.res()) {
                        left!!.flips() + right!!.flips()
                    } else if (!left!!.res()) {
                        left!!.flips()
                    } else if (!right!!.res()) {
                        right!!.flips()
                    } else {
                        check(left!!.res() && right!!.res())
                        // if both are true, we need to flip the minimal
                         minOf(left!!.flips(), right!!.flips())
                    }
                }
                // XOR
                4 -> minOf(left!!.flips(), right!!.flips())
                5 -> if (left != null) left.flips() else right!!.flips()
                else -> error("invalid value $value")
            }
        }
        return flipsCache!!
    }
}
```