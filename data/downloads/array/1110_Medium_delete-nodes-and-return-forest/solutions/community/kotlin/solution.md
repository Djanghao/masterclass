# Kotlin | Post Order Traversal

**Author:** kaanorahul8
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/4747346/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/4747346/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As we want to delete the node we are currently processing, doing a post order traversal seems to be the best option.
Here we first process left part, then right part and then finally the node.

# Approach
<!-- Describe your approach to solving the problem. -->
- Start with a post order traversal
- Update the node.left or node.right based upon results from recursion
- Now to process current node:
- Check if it's left and right subtree are not-null, if true add them to resultant forest
- unlink it's left and right subtree
- return null as we've deleted this node


# Complexity
- Time complexity: $$O(N)$$ + $$O(D)$$
Here N = number of nodes in tree and D = number of distinct nodes to be deleted
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$ + $$O(D)$$
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
    // TC: O(N) + O(D)
    // SC: O(N) + O(D)
    fun delNodes(root: TreeNode?, to_delete: IntArray): List<TreeNode?> {
        // TC: O(D) where D is the number of distinct node to be deleted
        val set = to_delete.toHashSet()
        val forest = mutableListOf<TreeNode>()

        fun dfs(node: TreeNode?): TreeNode? {
            // base case
            if(node == null)
                return null

            // Main logic: Do post order traversal
            // so traverse left first, the result we'll update to left subtree
            // then traverse right, the result we'll update to right subtree
            node.left = dfs(node.left)
            node.right = dfs(node.right)

            // then process the node;
            // if this is the node to be deleted, add the left and right subtrees if they are not null to the forest
            // return null as we're deleting the node; imp returning null will adjust parent when this is returned
            if(node.`val` in set) {
                node.left?.let { forest.add(it) }
                node.right?.let { forest.add(it) }

                node.left = null
                node.right = null

                return null 
            }

            // if not in set, we need to keep the tree as it is
            return node    
        }

        val newRoot = dfs(root)
        // if root is not deleted we add that too in forest
        newRoot?.let { forest.add(newRoot) }

        return forest
    }
}
```