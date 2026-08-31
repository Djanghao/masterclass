# Just brute-force it w/ DFS lol (clean w/ explanation)

**Author:** sdk__
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/5834785/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/5834785/)

---

# Explanation

This problem seems daunting with the sheer size of the description. Simplified, it asks us to find, for each node, the number of paths that pass through that node and whose total weight is divisible by `signalSpeed`.

With each node as root, we simply run DFS on each of its neighbors to find the number of nodes whose path to the root have total weight divisible by `signalSpeed`. We then find all pairwise combinations between those numbers.

This is an inefficient brute-force solution, as the complexity analysis will show. But the tester accepts this, and the hints guide you toward this, so there may not be a faster method.

# Code

```ts
function countPairsOfConnectableServers(
  edges: Array<[number, number, number]>,
  signalSpeed: number
): number[] {
  const numNodes = edges.length + 1; // Property of trees

  // We can use simple array indices for the adjacency list keys because
  // each node is labeled 0 to n - 1.
  const adjList: Array<Array<[number, number]>> =
    [...new Array(numNodes)].map(() => []);
  for (const [start, end, weight] of edges) {
    adjList[start].push([end, weight]);
    adjList[end].push([start, weight]);
  }

  const getNumMatches = (curr: number, prev: number, prevSum: number) => {
    let numMatches = prevSum % signalSpeed ? 0 : 1;
    if (adjList[curr].length === 1) { // Leaf
      return numMatches;
    }
    for (const [neighbor, weight] of adjList[curr]) {
      // This simple visited check works because trees are acyclic.
      if (neighbor !== prev) {
        numMatches += getNumMatches(neighbor, curr, prevSum + weight);
      }
    }
    return numMatches;
  };

  const pairs = new Array(numNodes).fill(0);
  for (let root = 0; root < numNodes; root++) {
    const neighborMatches = adjList[root].map(
      ([neighbor, weight]) => getNumMatches(neighbor, root, weight)
    );
    // Get all pairwise combinations.
    for (let i = 0; i < neighborMatches.length - 1; i++) {
      for (let j = i + 1; j < neighborMatches.length; j++) {
        pairs[root] += neighborMatches[i] * neighborMatches[j];
      }
    }
  }
  return pairs;
}
```

# Complexity

We use $V$ and $E$ to mean the numbers of vertices and edges in the graph, respectively.

Note that this graph is a tree, so $V = E + 1$, which means $O(V) = O(E)$. We choose to simplify to $E$ because we're given the edges as input.

- Time: We build the graph's adjacency list representation in $O(E)$ time. For each node, a graph traversal takes $O(V)$ time, and the pair calculations take $O(V^2)$ time. So our algorithm runs in total $O(E+V(V+V^2)) = O(E + V^2 + V^3) = O(E^3)$ time.
- Space: Our adjacency list uses $O(V+E)$ space. For each node, a graph traversal uses $O(V)$ stack space, and the array of neighbor matches uses $O(V)$ space. So our algorithm uses in total $O(V+E+V(V+V)) = O(V+E+2V^2) = O(E^2)$ space.