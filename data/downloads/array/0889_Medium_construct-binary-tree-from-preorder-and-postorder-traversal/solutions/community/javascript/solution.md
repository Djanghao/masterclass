# JavaScript Clean DFS

**Author:** control_the_narrative
**Votes:** 7
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/760443/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/760443/)

---

## Solution-1
```javascript
var constructFromPrePost = function(pre, post) {
    let i = 0;
    
    function callDFS(arr) {
        if(!arr.length) return null;
        const node = pre[i++]
        const idx = arr.indexOf(pre[i]);
        const tree = new TreeNode(node);
        tree.left = callDFS(arr.slice(0, idx+1));
        tree.right = callDFS(arr.slice(idx+1, arr.indexOf(node)))
        return tree;
    }
    return callDFS(post)
};
```

## Solution-2: Optimized Using Hash Map
```javascript
var constructFromPrePost = function(pre, post) {
    const map = {}; let i = 0;
    
    for(let i = 0; i < post.length; i++) {
        map[post[i]] = i;
    }
    
    function callDFS(start, end) {
        if(start > end || i >= pre.length) return null;
        const node = pre[i++], idx = map[pre[i]];
        const tree = new TreeNode(node);
        if(idx < start || idx > end) return tree;
        tree.left = callDFS(start, idx);
        tree.right = callDFS(idx+1, map[node]-1)
        return tree;
    }
    return callDFS(0, post.length-1);
};
```