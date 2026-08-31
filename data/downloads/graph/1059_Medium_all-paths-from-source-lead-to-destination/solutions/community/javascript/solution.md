# Simple JavaScript DFS, beats 100%

**Author:** beaum
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/1294292/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/1294292/)

---

```
const leadsToDestination = (n, edges, source, destination) => {
  // First, build an adjacency list for efficient access
  const adj = new Map();
  for (let [a, b] of edges) {
    if (a === destination) {
      // An outgoing edge from the destination means either:
      //   - a cycle
      //   - a path terminating somewhere other than destination
      // So we can already give up.
      return false;
    }
    if (!adj.has(a)) {
      adj.set(a, []);
    }
    adj.get(a).push(b);
  }
  // Verify that all paths beginning at source end at destination
  return dfs(source, adj, new Set(), destination);
};

const dfs = (current, adj, visited, destination) => {
  if (visited.has(current)) {
    // If we've visited this nodes, it's a cycle, return false
    return false;
  }
  if (current === destination) {
    // We already checked that destination has no outgoing edges in the calling function, return true
    return true;
  }
  if (!adj.has(current) || !adj.get(current).length) {
    // Reached a dead-end that isn't destination, so this path fails, return false
    return false;
  }
  visited.add(current);
  for (let next of adj.get(current)) {
    if (!dfs(next, adj, visited, destination)) {
      // If any outgoing path doesn't end at destination, return false
      return false;
    }
  }
  // In the parent of this node in our recursion tree, this node is unvisited, mark it as such.
  visited.delete(current);
  return true;
};
```