# kotlin beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5154998/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5154998/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

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
    private var ans = 0 
    fun longestConsecutive(root: TreeNode?): Int {
        if( root == null) return 0
        ans++ 
        
        helper(root.left, root.`val`, 1)
        helper(root.right, root.`val`, 1)

        return ans
        
    }

    fun helper(root: TreeNode?, value: Int, count: Int){

        if( root == null) return

        var res = count
        if( root.`val` == value + 1){
            ans = max(ans, ++res)
        } else
            res = 1

        val nextValue = root.`val`

        helper(root.left, nextValue, res)
        helper(root.right, nextValue, res)




    }
}
```