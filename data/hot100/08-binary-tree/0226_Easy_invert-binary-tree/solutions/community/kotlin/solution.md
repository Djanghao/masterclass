# Kotlin: 1 line

**Author:** dzmtr
**Votes:** 9
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/3301957/](https://leetcode.com/problems/invert-binary-tree/solutions/3301957/)

---

```
    fun invertTree(root: TreeNode?): TreeNode? =
        root?.apply { left = invertTree(right).also { right = invertTree(left) } }
```