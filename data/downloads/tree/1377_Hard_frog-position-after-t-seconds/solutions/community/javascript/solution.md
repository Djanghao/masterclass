# Javascript, bfs, easy to understand

**Author:** andyoung
**Votes:** 1
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1139255/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1139255/)

---

```js
var frogPosition = function(n, edges, t, target) {
  // build graph
  const graph = new Map();
  for (const [u, v] of edges) {
    addToGraph(u, v);
    addToGraph(v, u);
  }
  
  // follow the graph to bfs to the target
  const visited = new Set();
  const q = [[1, 1]];
  while (q.length && t >= 0) {
    const L = q.length;
    for (let i = 0; i < L; i += 1) {
      const [vertex, prob] = q.shift();
      visited.add(vertex);
      const children = getChildren(vertex);
      const numOfChildren = children.length;
      if (vertex == target) { // if reach target 
        // return current prob if time is up or no vertex to jump
        if (t == 0 || numOfChildren == 0) return prob;
        // return 0 if jump further 
        if (numOfChildren) return 0;
      }
      if (numOfChildren > 0) {
        for (const child of children) {
          q.push([child, prob / numOfChildren]);
        }
      }
    }
    t -= 1;
  }
  
  function addToGraph (u, v) {
    if (!graph.has(u)) {
      graph.set(u, [v]);
    } else {
      graph.get(u).push(v);
    }
  }
  
  function getChildren (u) {
    if (!graph.has(u)) return [];
    return graph.get(u).filter(node => !visited.has(node));
  }
  
  return 0;
};
```