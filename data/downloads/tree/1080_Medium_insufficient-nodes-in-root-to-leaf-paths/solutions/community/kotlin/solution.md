# Simple recursion

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4238955/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4238955/)

---

# Intuition
Simple recursion

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun sufficientSubset(root: TreeNode?, limit: Int): TreeNode? {
        fun helper(root: TreeNode?, sum: Int): Boolean {
            if (root?.left == null && root?.right == null) {
                return sum + root?.`val`!! < limit
            }
            var left = true
            var right = true
            if (root?.left != null) {
                left = helper(root.left, sum + root.`val`!!)
                if (left) root.left = null
            }
            if (root?.right != null) {
                right = helper(root!!.right, sum + root.`val`!!)
                if (right) root.right = null
            }
            return left && right
        }
        return if (helper(root, 0)) null else root
    }
}
```