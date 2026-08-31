# Kotlin | Algorithm that runs in less than O(n) time complexity

**Author:** naXa777
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/4934611/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/4934611/)

---

# Approach

> A complete binary tree can have at most $$2^h \u2013 1$$ nodes in total where $$h$$ is the height of the tree (This happens when all the levels are completely filled).

By this logic, compare the left sub-tree height with the right sub-tree height. If they are equal it is a full tree, then the answer will be $$2^h \u2013 1$$. Otherwise, if they aren't equal, recursively call for the left sub-tree and the right sub-tree to count the number of nodes.

# Complexity

- Time complexity: $$O((log\\ n)^2)$$
   * Calculating the height of a subtree for a binary tree with n nodes takes $$O(log\\ n)$$ time because the height of a complete binary tree is proportional to the logarithm of the number of nodes.
   * The algorithm performs a recursive division of the problem, effectively visiting nodes across different levels of the tree and performing height calculations for determining if a subtree is perfect. Because the height calculation is performed at each level of recursion, and the recursion depth itself is $$O(log\\ n)$$, the overall time complexity becomes $$O((log\\ n)^2)$$.

- Space complexity: $$O(log\\ n)$$
   * The recursion call stack depth is the primary contributor to space complexity. In a complete binary tree, the height (and thus the maximum recursion depth) is $$O(log\\ n)$$, dictating the space required for the call stack.

# Code

```kt
class Solution {
    fun countNodes(root: TreeNode?): Int {
        val lh = leftHeight(root)
        val rh = rightHeight(root)

        return if (lh == rh) {
            // formula for a complete binary tree
            (1 shl lh) - 1 // 2^lh - 1
        } else {
            1 + countNodes(root!!.left) + countNodes(root.right)
        }
    }

    private tailrec fun leftHeight(node: TreeNode?): Int {
        node ?: return 0
        return 1 + leftHeight(node.left)
    }

    private tailrec fun rightHeight(node: TreeNode?): Int {
        node ?: return 0
        return 1 + rightHeight(node.right)
    }
}
```

# Screenshot

![image.png](./images/0.png)
