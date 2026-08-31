# Clean Scala solution with pattern matching

**Author:** Karim_Ibrahim
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/991024/](https://leetcode.com/problems/merge-two-binary-trees/solutions/991024/)

---

```
def mergeTrees(t1: TreeNode, t2: TreeNode): TreeNode = (t1, t2) match {
        case(null, null) => null
        case(t1, null) => t1
        case(null, t2) => t2
        case _ => new TreeNode(t1.value + t2.value,
                               mergeTrees(t1.left, t2.left),
                               mergeTrees(t1.right, t2.right))
    }
	```