# Really working solution with WHITE/BLACK/GRAY marking of nodes

**Author:** dimau777
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/3335616/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/3335616/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Solution is based on basic algorithm for looking of cycles in graph (with marking nodes as BLACK / WHITE / GRAY) and DFS
Memoization is absolutely needed because of Time Exceeded in another case

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
  // Prepare adjacent list
  // Based on this data sctructure we can find all adjacent vertices for current vertice in O(1) time
  const graph = new Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    graph[edge[0]].push(edge[1]);
  }

  // Prepare colors for vertices
  // Based on this array we can find cycles in graph
  const color = new Array(n).fill("WHITE");

  // Initialize cache
  // Memoization for recursive function
  const cache = new Array(n).fill(null);

  return leadsToDest(source);

  function leadsToDest(curr: number) {
    // Check in cache first
    if (cache[curr] !== null) return cache[curr];

    // Check that we find a least node different from destination
    if (graph[curr].length === 0) {
      return curr === destination ? true : false;
    }

    // Check that we are not in the cycle
    if (color[curr] === "GRAY") {
      return false
    }

    // Mark this node in color array 
    // If futher we return to the same node we will see it because it will be "GRAY"
    if (color[curr] === "WHITE") {
      color[curr] = "GRAY"
    }

    for (let vert of graph[curr]) {
      if (leadsToDest(vert) === false) return false;
    }

    // Save result of this call in cache for Memoization
    cache[curr] = true;

    color[curr] = "BLACK";
    return true;
  }
}
```