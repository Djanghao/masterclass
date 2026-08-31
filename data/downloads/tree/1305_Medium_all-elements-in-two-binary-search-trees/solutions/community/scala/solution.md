# Scala solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/2730299/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/2730299/)

---

```
object Solution {
    def getAllElements(root1: TreeNode, root2: TreeNode): List[Int] = {
        def flatten(node: TreeNode): List[Int] = {
            if (node == null) return List()
            node.value :: flatten(node.left) ::: flatten(node.right)
        }
        (flatten(root1) ::: flatten(root2)).sorted
    }
}
```