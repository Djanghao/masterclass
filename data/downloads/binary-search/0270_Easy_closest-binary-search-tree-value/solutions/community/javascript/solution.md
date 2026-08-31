# Javascript solution using recursion

**Author:** hrgplumer
**Votes:** 7
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/425857/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/425857/)

---

```
var closestValue = function(root, target) {
    let closestDiff = Infinity;
    let closestVal = Infinity;
    
    const search = (node) => {
        if (!node) return;
        
        if (Math.abs(node.val - target) < closestDiff) {
            closestDiff = Math.abs(node.val - target);
            closestVal = node.val;
        }
        
        if (target < node.val) {
            search(node.left);
        }
        else {
            search(node.right);
        }
    }
    
    search(root);
    
    return closestVal;
};
```