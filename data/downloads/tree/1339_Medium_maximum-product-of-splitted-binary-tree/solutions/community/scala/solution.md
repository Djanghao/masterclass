# Scala O(N) time & O(H) space solution

**Author:** minato_yukina
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413592/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413592/)

---

```
object Solution {
    var totalSum: Int = 0
    
    def sum(node: TreeNode): Int =
        if (node == null) 0
        else {
            node.value += sum(node.left) + sum(node.right)
            node.value
        }
    
    def split(node: TreeNode): Long =
        if (node == null) 0
        else List(split(node.left), split(node.right), node.value.toLong * (totalSum - node.value)).max
    
    def maxProduct(root: TreeNode): Int = {
        totalSum = sum(root)
        (split(root) % 1000000007).toInt
    }
}
```