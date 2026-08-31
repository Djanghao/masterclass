# [scala] - The simplest solution possible

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/2259249/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/2259249/)

---

```scala
def evaluateTree(root: TreeNode): Boolean =
  root.value match {
    case 0 => false
    case 1 => true
    case 2 => evaluateTree(root.left) || evaluateTree(root.right)
    case 3 => evaluateTree(root.left) && evaluateTree(root.right)
  }
```