# JavaScript Solution - DFS Approach (Last Updated 10/01/20)

**Author:** Deadication
**Votes:** 8
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/646545/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/646545/)

---

```
var subtreeWithAllDeepest = function(root) {
    let height = 0;
    let maxNode = null;
    
    dfs(root, 0);
    
    return maxNode;
    
    function dfs(node, currDepth) {
        if (node == null) return currDepth - 1;
        
        height = Math.max(height, currDepth);
        
        const leftDepth = dfs(node.left, currDepth + 1);
        const rightDepth = dfs(node.right, currDepth + 1);
        
        if (leftDepth == height && rightDepth == height) {
            maxNode = node;
        }
        
        return Math.max(leftDepth, rightDepth);
    }
};
```