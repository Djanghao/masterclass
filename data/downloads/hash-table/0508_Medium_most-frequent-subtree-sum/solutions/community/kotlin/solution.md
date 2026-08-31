# Kotlin with Recursion

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5154764/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5154764/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Checks if the current node is null, and if so, returns 0.
If the node is a leaf (both left and right children are null), it increments the count of the node's value in the map and returns the node's value.
Recursively calculates the sums of the left and right subtrees.
Computes the current sum (curr) by adding the node's value to the sums of the left and right subtrees.
Updates the map with the current sum and increments its count.
Returns the current sum.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    private val map = HashMap<Int,Int>()
    fun findFrequentTreeSum(root: TreeNode?): IntArray {
        if( root == null) return intArrayOf()
        helper(root)

        val max = map.values.max()

        val res = mutableListOf<Int>()

        map.entries.forEach{ (k, v) -> 
            if( v == max)
                res.add(k)
        }

        return res.toTypedArray().toIntArray()
    }

    fun helper(root: TreeNode?):Int{
        if(root == null) return 0
        if( root.left == null && root.right == null){
            map[root.`val`] = map.getOrDefault(root.`val`, 0) + 1
            return root.`val` 
        } 

        val left = helper(root.left)
        val right = helper(root.right)

        val curr = root.`val` + left + right

        map[curr] = map.getOrDefault(curr, 0) + 1


        return curr
    }
}
```