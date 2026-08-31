# Simple recursive Scala solution

**Author:** tumakha
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/706499/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/706499/)

---

```scala
  def sumNumbers(root: TreeNode): Int = {
    def sum(node: TreeNode, previous: Int): Int = {
      if (node == null) return 0

      val num = previous * 10 + node.value

      if (node.left == null && node.right == null) num
      else sum(node.left, num) + sum(node.right, num)
    }

    sum(root, 0)
  }
  ```