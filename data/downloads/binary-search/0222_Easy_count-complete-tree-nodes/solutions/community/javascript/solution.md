# JavaScript Clean Binary Search O(logN * logN)

**Author:** control_the_narrative
**Votes:** 23
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/704112/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/704112/)

---

Time Complexity = `O(logN * logN)`. Because at each step during the binary search we're traversing  `logN` height. At end of each binary search step we're discarding half the tree. 
```javascript
var countNodes = function(root) {
    
    function leftDepth(node) {
        if(!node) return 0;
        return leftDepth(node.left) + 1;
    }
    
    function rightDepth(node) {
        if(!node) return 0;
        return rightDepth(node.right) + 1;
    }
    
    function traverse(node) {
        const leftLen = leftDepth(node);
        const rightLen = rightDepth(node);
        
        if(leftLen === rightLen) return Math.pow(2, leftLen) - 1;
        return traverse(node.left) + traverse(node.right) + 1;
    }
    return traverse(root);
};
```