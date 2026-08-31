# JavaScript Solution - Recursive Approach

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/856206/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/856206/)

---

```
var inorderSuccessor = function(root, p) {
    let found = false;
    let next = null;
    
    findNext(root, false);
    
    return next;
    
    function findNext(node) {
        if (node && !next) {
            findNext(node.left);
            
            if (found && !next) next = node;
            if (node == p) found = true;
            
            findNext(node.right);
        }
    }
};
```