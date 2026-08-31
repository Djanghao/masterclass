# [JS] DFS

**Author:** jialihan
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5620008/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5620008/)

---

Tip:
- count the **children** node's `size`
- if no child, also valid.
#### Code
```
/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    const map = new Map(); // adj nodes map
    for(const [u, v] of edges) {
        if(!map.has(u)) {
            map.set(u, []);
        }
        if(!map.has(v)) {
            map.set(v, []);
        }
        map.get(u).push(v);
        map.get(v).push(u);
    }
    let ans = 0;
    const visited = new Set();
    function dfs(node) {
        visited.add(node);
        const size = [];
        for(const next of map.get(node)) {
            if(!visited.has(next)) {
                size.push(dfs(next));
            }
        }
        // check the same size;
        const set = new Set(size);
        if(set.size === 0 || set.size===1) {
            ans++;
        }
        return size.length === 0? 1 : size.reduce((a,b)=>a+b)+1;
    }
    dfs(0);
    return ans;
};
```