# JavaScript Simple 4-Liner

**Author:** control_the_narrative
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/1127763/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/1127763/)

---

Time: `O(E)`
Space: `O(V)`
```javascript
var findSmallestSetOfVertices = function(n, edges) {
    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    degree.forEach((deg, i) => !deg && output.push(i));
    return output;
};
```