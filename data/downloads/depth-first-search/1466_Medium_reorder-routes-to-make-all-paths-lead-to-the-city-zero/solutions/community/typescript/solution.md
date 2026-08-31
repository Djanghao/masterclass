# JS/TS Solution DFS Approach

**Author:** giogokul13
**Votes:** 3
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5800805/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5800805/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity: O(N)
- The time complexity of this solution is O(n), where n is the number of cities. This is because we are performing a DFS traversal on the graph, which visits each city only once.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(N)
- The space complexity is O(n), where n is the number of cities. This is because we are storing the adjacency list for each city, as well as the visited array to keep track of visited cities during the DFS traversal.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let adjList = {};
    let reverseRoads = 0;
    let visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    // Step 1: Build a bidirectional graph
    for (let [a, b] of connections) {
        // Store forward and reverse roads
        adjList[a].push([b, 1]); // road goes from a to b, so 1 means road is directed away from 0
        adjList[b].push([a, 0]); // road goes from b to a (reverse connection), 0 means road is directed towards 0

    }

    // Step 2: DFS Traversal
    let dfs = (node) => {
        visited[node] = true;

        for (let [neighbor, isReversed] of adjList[node]) {
            if (!visited[neighbor]) {
                reverseRoads += isReversed;  // Count if the road is directed away from city 0
                dfs(neighbor);
            }
        }
    }

    // Step 3: Start DFS from city 0
    dfs(0);

    return reverseRoads;
};  
```