# Simple solution with recursion and O(n) time

**Author:** marcosbmariano
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/3761653/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/3761653/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Recursion

# Complexity
- Time complexity: O(n)


- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun bstFromPreorder(preorder: IntArray): TreeNode? {
        fun buildBST(preorder: IntArray, start: Int, end: Int): TreeNode? {
            if (start > end) return null

            val root = TreeNode(preorder[start])

            var i = start + 1
            while (i <= end && preorder[i] < root.`val`) {
                i++
            }

            root.left = buildBST(preorder, start + 1, i - 1)
            root.right = buildBST(preorder, i, end)

            return root
        }

        return buildBST(preorder, 0, preorder.lastIndex)
    }
}
```