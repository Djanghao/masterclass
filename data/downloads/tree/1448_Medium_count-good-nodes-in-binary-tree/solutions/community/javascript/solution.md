# Javascript best solution beats 99.04% till date

**Author:** NarenderTyagi
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/703869/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/703869/)

---

```
var goodNodes = function(root) {
    let good = 0;
    function trav(node, max){
        if(!node) return;
        if(node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max); 
    }
    trav(root, root.val);
    return good;
    
};
```