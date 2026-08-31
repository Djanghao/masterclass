# Typescript Solution (DFS + Dynamic Programming)

**Author:** nathandcornell
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/3556378/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/3556378/)

---

# Intuition
This solution assumes two things:
- It is more efficient to go deep than broad in our search (DFS over BFS)
- Saving the results of each "dive" down a graph branch will speed up later calculations (dynamic programming)

# Approach
1. Build an adjacency tree of all inbound edge nodes. This is necessary for performing any DFS operations
2. Iterate through each node that has an inbound edge (an ancestor)
3. On each iteration:
  3a. If the node has been seen already, return the precalculated ancestor list.
  3b. Mark the node as "seen"
  3c. Add all inbound nodes to a set
  3d. For each inbound node, recursively fetch their ancestors
  3e. Record the previous generation of ancestors in the ancestor result set
  3f. Add the previous generation of ancestors to the current node set
4. Convert each result set to an array and sort, as required by the prompt

# Complexity
- Time complexity:
  1. Calculate the adjacency list: O(m) (m = edges)
  2. Iterate through adjacency list keys: O(n) worst-case
  3. For each inbound edge, check adjoining inbound edges: O(m^2) or pull from the precalculated list O(m * 1)
  4. Sort each set: O(n log n)

### Total worst-case: O(m^2)

- Space complexity:
  1. Adjacency map: At most a DAG can have (n * (n - 1)) / 2 edges, so that's as long as any set could be: O((n * (n - 1)) / 2)
  2. Seen set: O(n)
  3. Result set: O(n * max edges)

### Total: O (n * (n * (n - 1)) / 2))

# Code
```
function getAncestors(n: number, edges: number[][]): number[][] {
  let result: Set<number>[] = Array(n).fill(new Set())
  let adjacencies: Map<number, Set<number>> = new Map()
  let seen: Set<number> = new Set()

  // 1. Iterate through the edges and create an adjacency list of inbound edges for each node
  for (const [from, to] of edges) {
    const adjacentNodes = adjacencies.get(to) || new Set()
    adjacencies.set(to, adjacentNodes.add(from))
  }

  const dfs = (node: number, ancestors: Set<number>): Set<number>  => {
    // 3a. If the node has been seen already, return the precalculated ancestor list
    if (seen.has(node)) { return result[node] }
    // 3b. Mark the node as "seen"
    seen.add(node)
    // 3c. Add all inbound nodes to a set
    const allAncestors = new Set(ancestors)

    // 3d. For each inbound node, recursively fetch their ancestors
    for (const ancestor of ancestors) {
      const previousGeneration = dfs(ancestor, adjacencies.get(ancestor) || new Set())

      // 3e. Record the previous generation of ancestors in the ancestor result set
      result[ancestor] = previousGeneration

      // 3f. Add the previous generation of ancestors to the current node set
      for (const member of previousGeneration) { allAncestors.add(member) }
    }
    
    return allAncestors
  }

  // 2. Iterate through each node in the map keys:
  for (const [node, adjacentNodes] of adjacencies.entries()) {
    result[node] = dfs(node, adjacentNodes)
  }

  // 3. Sort each list of ancestors
  return result.map(set => Array.from(set).sort((a, b) => a - b))
};
```