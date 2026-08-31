# Beats 100% DFS + heap

**Author:** shubhammaheshwariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/6006119/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/6006119/)

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
    fun kthLargestPerfectSubtree(root: TreeNode?, k: Int): Int {
        if(root == null)return -1

        val heap = PriorityQueue<Int>(k)
        fun dfs(node:TreeNode?):Int{
            if(node == null)return 0
            val leftDepth = dfs(node.left)
            val rigthDepth = dfs(node.right)
            if(leftDepth == rigthDepth){
                heap.add(2*leftDepth + 1)
                if(heap.size > k)heap.remove()
                return 2*leftDepth + 1
            }
            return -1
        }

        dfs(root)

        return if(heap.size == k)heap.remove() else -1 
    }
}
```