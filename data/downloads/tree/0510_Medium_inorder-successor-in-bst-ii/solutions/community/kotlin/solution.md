# Concise Kotlin solution (10 lines) beats 95%, find min right subtree or parent

**Author:** Unrelentingfox
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/2333615/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/2333615/)

---

```
class Solution {
    fun inorderSuccessor(node: Node?): Node? {
        var curr = node
        return if (curr?.right == null) {
            while (curr?.parent?.left != curr) curr = curr?.parent 
            curr?.parent // we will end up with the successor OR null
        } else {
            curr = curr?.right
            while (curr?.left != null) curr = curr?.left // we will end up with the min value in the right subtree
            curr
        }
    }
}
```