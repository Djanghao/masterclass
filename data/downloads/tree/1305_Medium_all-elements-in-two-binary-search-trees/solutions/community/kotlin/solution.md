# Kotlin step by step - DFS (in-order) | BFS

**Author:** MohiFayden
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5395032/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5395032/)

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
    fun getAllElements(root1: TreeNode?, root2: TreeNode?): List<Int> {

        // Intuition:
        // We have two BSTs. By performing in-order DFS on each tree, we will obtain a sorted list for each tree.
        // We can then merge these two sorted lists into one sorted list.

        // Helper function to perform in-order DFS and collect the values in a list
        fun dfs(node: TreeNode?, list: MutableList<Int>) {
            if (node == null) return

            // Traverse left subtree
            dfs(node.left, list)
            // Visit current node
            list.add(node.`val`)
            // Traverse right subtree
            dfs(node.right, list)
        }

        val list1 = mutableListOf<Int>()
        val list2 = mutableListOf<Int>()

        // Perform DFS on both trees to get the sorted lists
        dfs(root1, list1)
        dfs(root2, list2)

        val ans = mutableListOf<Int>()
        var i = 0 // Index for list1
        var j = 0 // Index for list2

        // Merge the two sorted lists
        while (i < list1.size && j < list2.size) {
            if (list1[i] < list2[j]) {
                ans.add(list1[i])
                i++
            } else {
                ans.add(list2[j])
                j++
            }
        }

        // Add remaining elements from list1, if any
        while (i < list1.size) {
            ans.add(list1[i])
            i++
        }

        // Add remaining elements from list2, if any
        while (j < list2.size) {
            ans.add(list2[j])
            j++
        }

        return ans
    }
}
```