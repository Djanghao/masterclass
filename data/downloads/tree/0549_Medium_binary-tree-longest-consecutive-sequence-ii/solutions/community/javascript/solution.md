# JavaScript Solution

**Author:** Deadication
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/867603/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/867603/)

---

```
var longestConsecutive = function(root) {
    let longestPath = 0;
    
    findLongestPaths(root);
    
    return longestPath;
    
    function findLongestPaths(node) {
        if (node == null) return [0, 0];
        
        const [leftDec, leftInc] = findLongestPaths(node.left);
        const [rightDec, rightInc] = findLongestPaths(node.right);
        
        let currDec = 0;
        let currInc = 0;
        
        if (node.left) {
            if (node.val - 1 == node.left.val) currDec = leftDec;
            else if (node.val + 1 == node.left.val) currInc = leftInc;
        }
        
        if (node.right) {
            if (node.val - 1 == node.right.val) currDec = Math.max(currDec, rightDec);
            else if (node.val + 1 == node.right.val) currInc = Math.max(currInc, rightInc);
        }
        
        longestPath = Math.max(longestPath, currDec + currInc + 1);
        
        return [currDec + 1, currInc + 1];
    }
};
```