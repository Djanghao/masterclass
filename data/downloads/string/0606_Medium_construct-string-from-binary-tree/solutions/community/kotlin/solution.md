# Kotlin solution

**Author:** nothingelsematters
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376862/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376862/)

---

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code

```
class Solution {
    fun tree2str(root: TreeNode?): String {
        val sb = StringBuilder()
        root?.let { treeToStr(it, sb) }
        return sb.toString()
    }

    private fun treeToStr(v: TreeNode, sb: StringBuilder) {
        sb.append(v.`val`)

        if (v.left != null || v.right != null) {
            sb.append('(')
            v.left?.let { treeToStr(it, sb) }
            sb.append(')')
        }

        if (v.right != null) {
            sb.append('(')
            treeToStr(v.right!!, sb)
            sb.append(')')
        }
    }
}
```