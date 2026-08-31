# 🔥🔥🔥 4 Solutions; Python; Java; C++, Javascript; Djakistras algorithm; Beats 99% submissions🔥🔥🔥

**Author:** bhanu_bhakta
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5127795/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5127795/)

---

# Intuition
- The goal is to determine the minimum cost to buy apples from each town, considering both the cost of the apples and the travel expenses.
- The problem combines aspects of shortest path algorithms with modifications to accommodate specific cost constraints and requirements.
- Given that each town has a fixed cost for apples and roads have associated travel costs, the focus is on calculating the most cost-effective route for each town.

# Approach
- **Graph Representation:** Use a graph where nodes represent towns and edges represent roads, with each edge having a modified weight (k + 1) * cost to account for travel costs between towns.
- **Apple Cost Initialization:** Add a direct connection from a fictional "town 0" to every other town with an edge weight equal to the apple cost of that town. This setup simplifies the problem to finding shortest paths from "town 0."
- **Use of Dijkstra's Algorithm:** Utilize a modified version of Dijkstra's algorithm with a priority queue to explore the minimum costs efficiently. Start exploration from "town 0" to leverage the initial apple costs as starting paths.
- **Priority Queue for Efficient Cost Comparison:** Use a deque to manage towns to visit next; however, using a priority queue would generally be more efficient for Dijkstra's algorithm to always process the currently cheapest option first.
- **Cost Update and Propagation:** For each town visited, update the minimum cost if a cheaper path is found and continue to propagate this information to neighboring towns. This process iterates until all possible paths are evaluated or no cheaper paths are found.

# Complexity
- Time complexity:
O(N+E)

- Space complexity:
O(N+E)

# Code
```python []
class Solution:
    def minCost(self, n: int, roads: List[List[int]], appleCost: List[int], k: int) -> List[int]:
        n += 1
        visited = [float("inf")] * n

        graph = defaultdict(list)

        for i in range(1, n):
            graph[0].append((i, appleCost[i - 1]))

        for src, dst, cost in roads:
            graph[src].append((dst, (k + 1) * cost))
            graph[dst].append((src, (k + 1) * cost))

        def explore(src):
            queue = deque([(src, 0)])

            while queue:
                node, cost = queue.popleft()
                if visited[node] < cost:
                    continue
                for nei, neiCost in graph[node]:
                    newCost = cost + neiCost

                    if visited[nei] > newCost:
                        visited[nei] = newCost
                        queue.append((nei, newCost))
        explore(0)
        return visited[1:]
```
```Java []
class Solution {
    public long[] minCost(int n, int[][] roads, int[] appleCost, int k) {
        n += 1; // To adjust index since towns are considered from 1 to n-1
        int[] visited = new int[n];
        Arrays.fill(visited, Integer.MAX_VALUE); // Initialize distances with infinity
        visited[0] = 0; // Starting point cost is 0

        // Creating a graph as adjacency list
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int i = 0; i < n; i++) {
            graph.put(i, new ArrayList<>());
        }

        // Connect 'town 0' to all other towns with appleCost
        for (int i = 1; i < n; i++) {
            graph.get(0).add(new int[] { i, appleCost[i - 1] });
        }

        // Building the graph with given roads and modified costs
        for (int[] road : roads) {
            int src = road[0];
            int dst = road[1];
            int cost = road[2];
            int adjustedCost = (k + 1) * cost; // Adjusting cost as per problem statement
            graph.get(src).add(new int[] { dst, adjustedCost });
            graph.get(dst).add(new int[] { src, adjustedCost });
        }

        // Method to perform BFS using a Queue
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] { 0, 0 }); // Start with 'town 0' at cost 0

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int currentNode = current[0];
            int currentCost = current[1];

            if (visited[currentNode] < currentCost) {
                continue;
            }

            // Explore neighbors
            for (int[] neighbor : graph.get(currentNode)) {
                int nextNode = neighbor[0];
                int travelCost = neighbor[1];
                int newCost = currentCost + travelCost;

                if (visited[nextNode] > newCost) {
                    visited[nextNode] = newCost;
                    queue.add(new int[] { nextNode, newCost });
                }
            }
        }

        // Converting List<Integer> to long[]
        long[] result = new long[n - 1];
        for (int i = 1; i < n; i++) {
            result[i - 1] = visited[i]; // Convert int to long implicitly
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<long long> minCost(int n, vector<vector<int>>& roads,
                              vector<int>& appleCost, int k) {
        n += 1; // Adjusting index to include a fictional town 0
        vector<long long> visited(
            n,
            LLONG_MAX); // Use long long and LLONG_MAX for maximum integer value
        visited[0] = 0; // Cost to reach town 0 is 0

        // Create an adjacency list
        vector<vector<pair<int, int>>> graph(n);

        // Connect town 0 to all other towns with apple costs
        for (int i = 1; i < n; ++i) {
            graph[0].push_back({i, appleCost[i - 1]});
        }

        // Build the graph with roads and adjusted costs
        for (const auto& road : roads) {
            int src = road[0];
            int dst = road[1];
            int cost = road[2];
            int adjustedCost =
                (k + 1) * cost; // Adjusting cost as per problem statement

            graph[src].push_back({dst, adjustedCost});
            graph[dst].push_back({src, adjustedCost});
        }

        // Use a queue for BFS
        queue<pair<int, int>> q;
        q.push({0, 0}); // Start with town 0 at cost 0

        while (!q.empty()) {
            auto current = q.front();
            q.pop();
            int currentNode = current.first;
            int currentCost = current.second;

            if (visited[currentNode] < currentCost) {
                continue;
            }

            // Explore neighbors
            for (const auto& neighbor : graph[currentNode]) {
                int nextNode = neighbor.first;
                int travelCost = neighbor.second;
                long long newCost = currentCost + travelCost;

                if (visited[nextNode] > newCost) {
                    visited[nextNode] = newCost;
                    q.push({nextNode, newCost});
                }
            }
        }

        // Prepare the result (excluding town 0)
        vector<long long> result;
        for (int i = 1; i < n; ++i) {
            result.push_back(visited[i]);
        }

        return result;
    }
};
```
```Javascript []
/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} k
 * @return {number[]}
 */
var minCost = function (n, roads, appleCost, k) {
    n += 1; // Include the fictional town 0
    const visited = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    visited[0] = 0; // Starting from town 0

    // Create an adjacency list for the graph
    const graph = Array.from({ length: n }, () => []);

    // Connect town 0 to all other towns with appleCost
    for (let i = 1; i < n; i++) {
        graph[0].push([i, appleCost[i - 1]]);
    }

    // Build the graph with roads and adjusted costs
    roads.forEach(([src, dst, cost]) => {
        const adjustedCost = (k + 1) * cost;
        graph[src].push([dst, adjustedCost]);
        graph[dst].push([src, adjustedCost]);
    });

    // Queue for BFS
    const queue = [[0, 0]];

    while (queue.length > 0) {
        const [currentNode, currentCost] = queue.shift();

        if (visited[currentNode] < currentCost) {
            continue;
        }

        // Explore neighbors
        graph[currentNode].forEach(([nextNode, travelCost]) => {
            const newCost = currentCost + travelCost;
            if (visited[nextNode] > newCost) {
                visited[nextNode] = newCost;
                queue.push([nextNode, newCost]);
            }
        });
    }

    // Prepare the result (excluding town 0)
    return visited.slice(1);
};
```
**Please upvote**