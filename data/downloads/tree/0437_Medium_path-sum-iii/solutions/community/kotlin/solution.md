# Simple Recursive Solution

**Author:** blakew88
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/3825299/](https://leetcode.com/problems/path-sum-iii/solutions/3825299/)

---

# Intuition
Use the [prefix sum technique](https://leetcode.com/problems/subarray-sum-equals-k/) outlined here.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
 import kotlin.math.*

class Solution {
    fun pathSum(root: TreeNode?, targetSum: Int): Int {
        var count = 0
        val map = hashMapOf(0L to 1)

        fun go(node: TreeNode?, sum: Long = 0L) {
            if(node == null) return

            val nextSum = sum + node.`val`
            count += map[nextSum - targetSum] ?: 0

            map[nextSum] = (map[nextSum] ?: 0) + 1  
            go(node.left, nextSum)
            go(node.right, nextSum)
            map[nextSum] = (map[nextSum] ?: 0) - 1 
        }
        go(root)
        return count
    }
}
```