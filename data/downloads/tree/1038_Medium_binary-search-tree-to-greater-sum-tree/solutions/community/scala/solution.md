# Scala: Simple recursion, short

**Author:** bartekskorulski
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/2011964/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/2011964/)

---

```
object Solution {
    def bstToGst(root: TreeNode): TreeNode = {
        
        def gst(node: TreeNode, greater: Int): Int = {
            if( node == null) return greater;
            node.value += gst(node.right, greater)
            gst(node.left, node.value)
        }
        
        gst(root, 0)
        root
    }
}
```