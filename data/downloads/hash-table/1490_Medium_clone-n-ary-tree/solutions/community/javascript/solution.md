# JavaScript Solution - DFS

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/890560/](https://leetcode.com/problems/clone-n-ary-tree/solutions/890560/)

---

```
var cloneTree = function(root) {
    return dfs(root);
    
    function dfs(node) {
        if (node == null) return null;
        
        const { val, children } = node;
        const nodeCopy = new Node(val);
        
        for (const child of children) {
            nodeCopy.children.push(dfs(child));
        }
        
        return nodeCopy;
    }
};
```