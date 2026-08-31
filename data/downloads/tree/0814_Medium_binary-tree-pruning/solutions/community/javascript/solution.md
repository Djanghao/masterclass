# Java Script simple solution

**Author:** ramiloif
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/492972/](https://leetcode.com/problems/binary-tree-pruning/solutions/492972/)

---

```
const pruneTree = function(root) {
 root.right = root.right && pruneTree(root.right);
 root.left = root.left && pruneTree(root.left);
 if(root.val === 0 && !root.right && !root.left)
   return null
 else
   return root;
}
```