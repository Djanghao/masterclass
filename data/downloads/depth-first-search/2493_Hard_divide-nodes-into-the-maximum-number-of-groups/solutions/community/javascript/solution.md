# [Javascript] Union Find & BFS

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2876565/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2876565/)

---

**Solution: Union Find & BFS**

1. Build the graph and connect nodes using union find.
2. Find the groups of connected nodes.
3. Find the maximum groups to divide for each connected group.
*   Use level-by-level BFS to find the maximum depth of the group.
*   How to detect an odd-lengthed cycle: Cycles are bound to meet in the middle since we are traversing level-by-level, so if the level of a neighbor node is equal to the current level, the cycle is odd-lengthed.

`n = number of nodes`, `m = number of edges`
Time Complexity: `O(n * (n + m))` 639ms
Space Complexity: `O(n + m)` 64.6MB
```
var magnificentSets = function(n, edges) {
  let uf = new UnionFind(n + 1);
  let graph = Array(n + 1).fill(0).map(() => []);
  for (let [a, b] of edges) { // 1. Build graph, connect nodes
    graph[a].push(b);
    graph[b].push(a);
    uf.union(a, b);
  }
  
  let groups = {};
  for (let i = 1; i <= n; i++) { // 2. Find groups of connected nodes
    let parent = uf.find(i);
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(i);
  }
  
  let totalGroups = 0;
  for (let parent in groups) { // 3. Find the maximum groups to divide for each connected group
    let group = groups[parent];
    let maxGroups = 0;
    for (let node of group) {
      let numGroups = bfs(graph, node);
      if (numGroups === -1) return -1;
      maxGroups = Math.max(maxGroups, numGroups);
    }
    totalGroups += maxGroups;
  }
  return totalGroups;
};

function bfs(graph, startNode) {
  let queue = [startNode], n = graph.length;
  let levels = Array(n).fill(-1), level = 0;
  levels[startNode] = 0;
  while (queue.length) {
    for (let i = queue.length; i > 0; i--) {
      let node = queue.shift();
      for (let nei of graph[node]) {
        if (levels[nei] === -1) {
          levels[nei] = level + 1;
          queue.push(nei);
        } else if (levels[nei] === level) { // found an odd-lengthed cycle, we can't divide into groups
          return -1;
        }
      }
    }
    level++;
  }
  return level;
}

class UnionFind {
  constructor(size) {
    this.root = Array(size);
    this.rank = Array(size)
    for (var i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }
  find(x) {
    if (this.root[x] === x) {
      return x;
    }
    return this.root[x] = this.find(this.root[x]);
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
```