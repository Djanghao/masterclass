# scala code with detailed comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4620501/](https://leetcode.com/problems/two-sum-bsts/solutions/4620501/)

---

# Complexity
- Time complexity:
DFS on the First Tree (dfs Method):

In the worst case, the DFS will visit every node in the first tree.
If there are n nodes in the first tree, the time complexity for the DFS part is $$O(n)$$.
BS on the Second Tree (bs Method):

For each node visited in the first tree, a binary search is performed on the second tree.

In the worst case, the height of a BST is proportional to the number of nodes in the tree, leading to $$O(m)$$ time for a tree with $$m$$ nodes. However, in a balanced BST, the height is $$O(log m)$$, where $$m$$ is the number of nodes in the second tree.

Since binary search is performed for each node in the first tree, the worst-case time complexity for this part is $$O(n log m)$$ in a balanced tree, or $$O(nm)$$ in the worst case of an unbalanced tree.

Combining these, the total worst-case time complexity is:

$$O(n log m)$$ for balanced trees.
$$O(nm)$$ for unbalanced trees.

- Space complexity:
DFS Stack Space:

The maximum depth of the recursive stack due to DFS in the worst case is equal to the height of the first tree.
For a balanced tree, this is $$O(log n)$$, and for an unbalanced tree, it could be as bad as$$O(n)$$.

No Additional Data Structures:

The algorithm does not use any significant additional data structures that scale with the input size.
Therefore, the space complexity is primarily determined by the recursive stack space:

$$O(log n)$$ for a balanced first tree.
$$O(n)$$ in the worst case for an unbalanced first tree.

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  // Main function to check if two elements from BSTs sum up to the target
  def twoSumBSTs(root1: TreeNode, root2: TreeNode, target: Int): Boolean = {
    // Traverse the first tree and check if there's a complement in the second tree
    dfs(root1, root2, target)
  }

  // Helper function for DFS on the first tree
  private def dfs(node1: TreeNode, root2: TreeNode, target: Int): Boolean = {
    if (node1 == null) {
      return false
    }

    // Check if there's a complement in the second tree
    if (bs(root2, target - node1.value)) {
      return true
    }

    // Continue searching for a complement in the left and right subtrees of the first tree
    dfs(node1.left, root2, target) || dfs(node1.right, root2, target)
  }

  // Helper function for binary search on the second tree
  private def bs(node: TreeNode, value: Int): Boolean = {
    if (node == null) {
      return false
    }

    if (node.value == value) {
      return true
    } else if (node.value > value) {
      bs(node.left, value)
    } else {
      bs(node.right, value)
    }
  }
}
```