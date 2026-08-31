# JavaScript Dict DFS solution beats 99%

**Author:** ChaoWan_2021
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/557195/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/557195/)

---

```
var findLeaves = function(root) {
    const res = {};
    const dfs = (node) => {
        if(!node) return 0;
        const depth = Math.max(dfs(node.left), dfs(node.right));
        if(res[depth]) {
            res[depth].push(node.val);
        } else {
            res[depth] = [node.val];
        }
        return depth + 1;
    }
    dfs(root);
    return Object.values(res);
};
```