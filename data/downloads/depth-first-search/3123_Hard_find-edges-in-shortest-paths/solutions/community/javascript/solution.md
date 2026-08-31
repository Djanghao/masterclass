# BFS then DFS

**Author:** increscent
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5450795/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5450795/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function(n, edges) {
    let queue = new MinPriorityQueue({priority: x => x.dist});
    let shortestToNode = new Map();
    let graph = new Map();

    // Helper function
    let addEdge = ([a, b, w, i]) => {
        if (!graph.has(a)) {
            graph.set(a, [{node: b, weight: w, edge: i}]);
        } else {
            graph.get(a).push({node: b, weight: w, edge: i});
        }
    };

    // Build the graph
    for (let i = 0; i < edges.length; i++) {
        let [a, b, w] = edges[i];
        addEdge([a, b, w, i]);
        addEdge([b, a, w, i]);
    }

    // BFS with priority queue from the start node
    queue.enqueue({node: 0, dist: 0});
    while (!queue.isEmpty()) {
        let x = queue.dequeue().element;

        if (shortestToNode.has(x.node)) {
            // Already visited
            continue;
        }
        shortestToNode.set(x.node, x.dist);

        // It's not worth visiting any nodes after we get
        // to the end node because all the paths will just be longer
        if (x.node == n - 1) {
            break;
        }

        // Visit all the edges from the current node
        for (let n of graph.get(x.node) || []) {
            queue.enqueue({
                node: n.node,
                dist: x.dist + n.weight
            });
        }
    }

    // Work backwards from the end node, collecting all the edges
    // that are usable to create a path to the start node of the
    // length of the shortest path.
    let shortestPath = shortestToNode.get(n - 1);
    let visited = new Set();
    let shortestPathEdges = new Set();
    queue = [{node: n - 1, dist: 0}];
    while (queue.length) {
        let x = queue.shift();

        if (visited.has(x.node)) {
            continue;
        }
        visited.add(x.node);

        for (let n of graph.get(x.node) || []) {
            // Only add edges if they're part of the shortest path
            if (x.dist + n.weight + shortestToNode.get(n.node) == shortestPath) {
                queue.push({
                    node: n.node,
                    dist: x.dist + n.weight
                });
                shortestPathEdges.add(n.edge);
            }
        }
    }

    return edges.map((_, i) => shortestPathEdges.has(i));
};
```