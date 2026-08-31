# beats 86% at speed, O(n) time, O(n) space, inorder traverse, stack, arraybuffer store, very simple

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/5853834/](https://leetcode.com/problems/increasing-order-search-tree/solutions/5853834/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {  
  def increasingBST(root: TreeNode): TreeNode = {  
    val values = scala.collection.mutable.ListBuffer[Int]()  

    def inorderTraversal(node: TreeNode): Unit = {  
      if (node != null) {  
        inorderTraversal(node.left)  
        values += node.value  
        inorderTraversal(node.right)  
      }  
    }  

    inorderTraversal(root)  
  
    if (values.isEmpty) return null 

    val newRoot = new TreeNode(values.head)  
    var current = newRoot  
    for (value <- values.tail) {  
      current.right = new TreeNode(value)  
      current = current.right  
    }  

    newRoot  
  }  
}
```