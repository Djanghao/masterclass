# Javascript 52ms DFS

**Author:** etairl
**Votes:** 61
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/549960/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/549960/)

---

```
var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    
    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
};
```