# JS/TS Solution Effective Traversal

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5833063/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5833063/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity: O(n + m)
- The time complexity of this solution is O(n + m), where n is the number of nodes and m is the number of edges in the graph. This is because we are using a breadth-first search algorithm to traverse the graph, which visits each node and each edge once.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(n)
- The space complexity is O(n), where n is the number of nodes in the graph. This is because we are using sets and queues to keep track of visited nodes and nodes to visit, which can potentially store all nodes in the graph.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {

    let adjList = new Map();
    let restrictedSet = new Set(restricted);

    for (let [a, b] of edges) {
        if (!adjList.has(a)) adjList.set(a, []);
        if (!adjList.has(b)) adjList.set(b, []);

        adjList.get(a).push(b);
        adjList.get(b).push(a);
    }

    let visited = new Set();
    let queue = [0];

    while (queue.length > 0) {
        let vertex = queue.pop();

        if (restrictedSet.has(vertex) || visited.has(vertex)) continue;

        visited.add(vertex);
        for (let neighbour of adjList.get(vertex) || []) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour);
            }
        }
    }

    return visited.size;
};
```