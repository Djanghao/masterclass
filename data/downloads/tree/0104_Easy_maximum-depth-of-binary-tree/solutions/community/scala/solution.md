# Scala Solution

**Author:** phanther
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/374379/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/374379/)

---

```
object Solution {
    def maxDepth(root: TreeNode): Int = {
        if(root == null) return 0
        1 + scala.math.max(maxDepth(root.left), maxDepth(root.right))
    }
}
```