# JavaScript Solution

**Author:** Deadication
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/854478/](https://leetcode.com/problems/count-univalue-subtrees/solutions/854478/)

---

```
var countUnivalSubtrees = function(root) {
    let count = 0;
    
    findAllSubTrees(root);
    
    return count;
    
    function findAllSubTrees(node) {
        if (node == null) return true;
     
        const left = findAllSubTrees(node.left);
        const right = findAllSubTrees(node.right);
        
        if (!left || !right) return false;
        
        if (node.left != null && node.left.val != node.val) return false;
        if (node.right != null && node.right.val != node.val) return false;
        
        count++;
        return true;
    }
};
```