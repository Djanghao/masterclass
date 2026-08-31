# DFS (with explanation)

**Author:** Angielf
**Votes:** 4
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5168693/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5168693/)

---

# Approach
This solution uses a depth-first search (DFS) algorithm to determine the minimum number of edges that need to be changed to direct each city towards city 0. Here is an overview of the approach:

1. **Building the Graph**: The function first constructs a graph representation using an adjacency list. For each connection (road) between cities u and v, two entries are added to the adjacency list: one indicating a road from u to v with a direction of 1, and the other indicating a reverse road from v to u with a direction of 0.
2. **Depth-First Search (DFS)**: The function then performs a DFS traversal starting from city 0 (the capital city) to count the number of edges that need to be changed. The dfs function recursively visits each city's neighbors, tracking the direction of the edges and incrementing the change_count based on the direction of the edge.
3. **Counting Edge Changes**: At each step in the DFS traversal, the algorithm checks if the neighbor being visited is not the parent node to avoid revisiting the parent node. It then increments the change_count based on whether the edge needs to be changed (0 for reverse road, 1 for normal road).
4. **Returning the Result**: The function returns the final count of edge changes needed to direct each city towards city 0 after completing the DFS traversal.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of cities in the network. This complexity arises from the DFS traversal that visits each city once and explores its neighboring cities. Since the network is represented as a tree, the DFS traversal will have a maximum of n nodes to visit.

- Space complexity:
$$O(n)$$, where n is the number of cities in the network. This space is primarily used for storing the adjacency list representation of the graph, which can have up to n nodes in the case of a fully connected tree. Additionally, the recursive DFS function consumes space on the call stack proportional to the depth of the tree, which can be up to n in the worst case for a linear tree structure.

# Code
``` python3 []
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = defaultdict(list)

        for u, v in connections:
            # Road from u to v
            graph[u].append((v, 1))
            # Reverse road from v to u
            graph[v].append((u, 0))

        def dfs(node, parent):
            change_count = 0
            for neighbor, direction in graph[node]:
                if neighbor != parent:
                    # Count the edges that need to be changed
                    change_count += direction
                    change_count += dfs(neighbor, node)
            return change_count

        return dfs(0, -1)
```
``` javascript []
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = new Array(n).fill(null).map(() => []);
    
    for (const [u, v] of connections) {
        // Road from u to v
        graph[u].push([v, 1]);
        // Reverse road from v to u
        graph[v].push([u, 0]);
    }

    function dfs(node, parent) {
        let changeCount = 0;
        for (const [neighbor, direction] of graph[node]) {
            if (neighbor !== parent) {
                // Count the edges that need to be changed
                changeCount += direction;
                changeCount += dfs(neighbor, node);
            }
        }
        return changeCount;
    }

    return dfs(0, -1);
};
```
``` php []
class Solution {
    function dfs($node, $parent, $graph) {
        $changeCount = 0;
        foreach ($graph[$node] as list($neighbor, $direction)) {
            if ($neighbor !== $parent) {
                // Count the edges that need to be changed
                $changeCount += $direction;
                $changeCount += $this->dfs($neighbor, $node, $graph);
            }
        }
        return $changeCount;
    }

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer
     */
    function minReorder($n, $connections) {
        $graph = array_fill(0, $n, []);
    
        foreach ($connections as $connection) {
            list($u, $v) = $connection;
            // Road from u to v
            $graph[$u][] = [$v, 1];
            // Reverse road from v to u
            $graph[$v][] = [$u, 0];
        }

        return $this->dfs(0, -1, $graph);
    }
}
```