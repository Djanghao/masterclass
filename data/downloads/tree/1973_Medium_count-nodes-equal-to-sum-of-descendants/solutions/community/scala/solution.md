# Scala solution

**Author:** FelAl
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/3184242/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/3184242/)

---

```
object Solution {
    def equalToDescendants(root: TreeNode): Int = {
        var validNodes = 0
        def traverse(r: TreeNode, sum: Int = 0): Int = {
            if(r == null) return 0
            val leftSum = traverse(r.left)
            val rightSum = traverse(r.right)
            if(leftSum + rightSum == r.value) {
                validNodes = validNodes + 1
            }
            leftSum + rightSum + r.value
        }
        traverse(root)
        validNodes
    }
}
```