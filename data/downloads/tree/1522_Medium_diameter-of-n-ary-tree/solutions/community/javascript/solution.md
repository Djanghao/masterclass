# JavaScript Solution - DFS Approach

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1781871/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1781871/)

---

I got the idea of using `max1` and `max2` from another problem that I solved.

```
var diameter = function(root) {
    let max = 0;
    
    dfs(root);
    
    return max;
    
    function dfs(node) {
        if (node == null) return 0;
        
        let max1 = 0;
        let max2 = 0;
        
        for (let i = 0; i < node.children.length; i++) {
            const childNode = node.children[i];
            
            const len = dfs(childNode) + 1;
            
            if (max1 == 0 || len > max1) {
                max2 = max1;
                max1 = len;
            }
            else if (max2 == 0 || len > max2) {
                max2 = len;
            }
        }
        
        max = Math.max(max, max1 + max2);
        
        return max1;
    }
};
```