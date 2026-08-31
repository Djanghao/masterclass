# DFS twice: calc the sum and then delete node

**Author:** jialihan
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/5588326/](https://leetcode.com/problems/delete-tree-nodes/solutions/5588326/)

---

#### Code
```
/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function(nodes, parent, value) {
    let root;
    const map = new Map();
    const deleteSet = new Set();
    // 1. build the treee
    for(let i = 0; i<nodes; i++) {
        if(parent[i] === -1) {
            root = i;
        }
        if(!map.has(parent[i])) {
            map.set(parent[i], []);
        }
        map.get(parent[i]).push(i);
    }
    // 2. dfs bottom up
    function dfs(node) {
        let sum = 0;
        if(map.has(node)) {
            for(const next of map.get(node)) {
                sum += dfs(next);
            }
        }
        sum += value[node];
        if(sum===0) {
            deleteSet.add(node);
            map.delete(node);
        }
        return sum;
    }
    dfs(root);
    // 3. count remaining node
   let ans = 0;
    function dfs2(node) {
        if(deleteSet.has(node)) {
            return;
        }
        ans++;
        if(!map.has(node)) {
            return;
        }
        for(const child of map.get(node)) {
            if(!deleteSet.has(child)) {
                dfs2(child);
            }
        }
    }
    dfs2(root);
    return ans;
};
```