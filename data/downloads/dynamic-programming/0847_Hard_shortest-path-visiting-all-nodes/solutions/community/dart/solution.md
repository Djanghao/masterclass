# Clean solution using BFS and bit masking, complexity explained

**Author:** jolleekin
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/4725318/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/4725318/)

---

# Intuition
- Shortest path with unit edges => BFS
- Need to try each node as the root (starting node)
- State is `(current_node, visited_nodes, path_length)`
- Next state is `(neighbor, visited_nodes + [neighbor], path_length + 1)`
- Stop when all nodes are visited

# Approach

To store visited nodes efficiently, we use a bit mask. For 3 nodes, 
- 111 means all nodes are visited
- 101 means node 0 and node 2 are visited

# Complexity
We loop through `n` nodes. For each node, try up to $$n 2^n$$ states.

- Time complexity: $$O(n^2 2^n)$$
- Space complexity: $$O(n 2^n)$$

# Code
```dart []
// BFS with bit masking.
class Solution {
  int shortestPathLength(List<List<int>> graph) {
    final n = graph.length;

    // Set of (current node, bit mask of visited nodes).
    final visited = <(int, int)>{};

    // Queue of (current node, bit mask of visited nodes, visited node count).
    final queue = <(int, int, int)>[];

    final all = (1 << n) - 1;

    for (var i = 0; i < n; ++i) {
      visited.add((i, 1 << i));
      queue.add((i, 1 << i, 1));
    }

    var i = 0;
    while (i < queue.length) {
      // Dequeue without removing any element.
      // More memory but likely faster than `removeAt(0)`.
      final (node, visitedMask, nodeCount) = queue[i++];

      if (visitedMask == all) return nodeCount - 1;

      for (final nextNode in graph[node]) {
        final nextVisitedMask = visitedMask | 1 << nextNode;
        final tuple = (nextNode, nextVisitedMask);
        if (visited.add(tuple)) {
          queue.add((nextNode, nextVisitedMask, nodeCount + 1));
        }
      }
    }

    return -1;
  }
}

```
```typescript []
// BFS with bit masking.
// Time: O(n^2 * 2^n)
// Space: O(n * 2^n)
function shortestPathLength(graph: number[][]): number {
  const n = graph.length;

  // Each element is pair of [current node, visited bit mask] encoded as follows:
  // - The lower `n` bits are a bit mask that stores the visited nodes.
  // - The higher bits stores the current node.
  //
  // Can use Array<Set<number>> or Array<Array<boolean>> instead (more memory).
  const visited = new Set<number>();

  // Queue of [pair, visited node count along the path].
  const queue: [number, number][] = [];

  const all = (1 << n) - 1;

  for (let i = 0; i < n; ++i) {
    const visitedMask = 1 << i;
    const pair = i << n | visitedMask;
    visited.add(pair);
    queue.push([pair, 1]);
  }

  while (queue.length) {
    const [pair, nodeCount] = queue.shift()!;

    // Decode the pair.
    const node = pair >> n;
    const visitedMask = pair & all;

    if (visitedMask === all) return nodeCount - 1;

    for (const nextNode of graph[node]) {
      const nextVisitedMask = visitedMask | 1 << nextNode;
      const nextPair = nextNode << n | nextVisitedMask;
      if (!visited.has(nextPair)) {
        visited.add(nextPair);
        queue.push([nextPair, nodeCount + 1]);
      }
    }
  }

  return -1;
}
```