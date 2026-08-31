# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/5366947/](https://leetcode.com/problems/count-univalue-subtrees/solutions/5366947/)

---

```
object Solution {
    def countUnivalSubtrees(root: TreeNode): Int = {
        def count(node: TreeNode): (Int, Int, Boolean) = {
            node match {
                case null => (Int.MinValue, 0, true)
                case n if n.left == null && n.right == null => (node.value, 1, true)
                case _ =>
                    val (leftVal, leftUnivals, leftUnivalSoFar) = count(node.left)
                    val (rightVal, rightUnivals, rightUnivalSoFar) = count(node.right)
                    if 
                        leftUnivalSoFar && rightUnivalSoFar && (
                            (leftVal == Int.MinValue && rightVal == node.value) ||
                            (rightVal == Int.MinValue && leftVal == node.value) ||
                            (leftVal == rightVal && rightVal == node.value)
                        )
                            then (node.value, 1 + leftUnivals + rightUnivals, true) 
                            else (node.value, leftUnivals + rightUnivals, false)
            }
        }
        val (_, univals, _) = count(root)
        univals
    }
}
```