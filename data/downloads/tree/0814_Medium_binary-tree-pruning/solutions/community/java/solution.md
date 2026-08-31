# ✅✅JAVA || 100% Faster || EASY || Post-Order Traversal ||

**Author:** _dc
**Votes:** 25
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2538651/](https://leetcode.com/problems/binary-tree-pruning/solutions/2538651/)

---

*Simply do a POST-ORDER Traversal and check if current Node is 0 && BOTH :- left and right side of current Node is Null or not. If its Null then this current Node must be Pruned as well if not then return current Node. 
**For better Understanding refer to Tutorials of how Post-Order Traversal Works in a Binary-Tree***

```
class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if(root==null){return null;}
        root.left= pruneTree(root.left);
        root.right=pruneTree(root.right);
        if(root.val==0&&root.left==null&&root.right==null)
        {return null;}
         
        return root;
    }
}
```