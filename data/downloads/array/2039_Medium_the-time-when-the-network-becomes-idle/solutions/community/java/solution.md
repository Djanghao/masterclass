# Clear BFS solution (beats 100% Python, 96.5% Java)

**Author:** espertusnu
**Votes:** 7
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3835324/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3835324/)

---

# Intuition
After using BFS to determine the distance between the start node and every other node, we can calculate when the last messages will be sent and received.

# Approach
1. Convert the edge list into an adjacency list.
2. Use BFS to compute the distance from the start node to every other node.
3. Use a helper method `getLastSend()` to determine when the last message will be sent by a node `n`.
    1. If `patience[n]` is greater than the round trip message latency (`2 * distance[n]`), only the original message will be sent at time 0.
    2. If the round trip time is a multiple of `patience[n]`, the last message will be sent at `patience[n]` ticks before the arrival of the response to the original message.
    3. Otherwise, the last message will be sent at time `2 * distance[n] - (2 * distance[n] % patience[n])
4. Compute the maximum time for a node to receive a response to its last message. For each node, this is the sum of:
    - the last send time (computed by the helper method)
    - the round trip latency (`2 * distance[n]`)
3. Add 1 to find when the network will become idle.

# Complexity
- Time complexity: $$O(E+V)$$
    - Building the adjacency list: $$O(E)$$
    - Calculating the distances: $$O(E)$$
    - Calculating the max time: $$O(V)$$

- Space complexity: $$O(E+V)$$
    - The adjacency list: $$O(E+V)$$
    - The distance array: $$O(V)$$
    - The BFS queue: $$O(V)$$

Any of the $O(E+V)$ terms above can be replaced with $O(E)$ because the graph is connected, implying that $V < E + 1$.

# Python Code
```
class Solution:
    def networkBecomesIdle(self, edges: List[List[int]], patience: List[int]) -> int:
        # Build adjacency list.
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        # Perform BFS to find distances.
        distance = [None] * len(patience)
        distance[0] = 0
        queue = deque()
        queue.append(0)
        # Instance of explicitly keeping track of which nodes are
        # visited, use None as the distance to unvisited nodes.
        while queue:
            node = queue.popleft()
            for neighbor in graph[node]:
                if not distance[neighbor]:
                    distance[neighbor] = 1 + distance[node]
                    queue.append(neighbor)

        def getLastSend(n: int) -> int:
            """Compute when the last message is sent by node n."""
            if patience[n] >= 2 * distance[n]:
                return 0
            if (2 * distance[n]) % patience[n] == 0:
                return 2 * distance[n] - patience[n]
            return 2 * distance[n] - (2 * distance[n] % patience[n])

        # Calculate the max time for a node to receive its last response.
        maxTime = 0
        for n in range(1, len(patience)):
            lastSend = getLastSend(n)
            lastReceive = lastSend + 2 * distance[n]
            maxTime = max(maxTime, lastReceive)
        # The above loop can be replaced by a single line with a list comprehension:
        maxTime = max(getLastSend(n) + 2 * distance[n] for n in range(1, len(patience)))

        return maxTime + 1
```

# Java Code
```
class Solution {
    private int getLastSend(int d, int p) {
        if (p >= 2 * d) {
            return 0;
        }
        if ((2 * d) % p == 0) {
            return 2 * d - p;
        }
        return 2 * d - (2 * d) % p;
    }

    public int networkBecomesIdle(int[][] edges, int[] patience) {
        // Build adjacency list.
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < patience.length; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        // Perform BFS to find the min distance of each node from the root.
        int[] distance = new int[patience.length];
        boolean[] visited = new boolean[patience.length];
        visited[0] = true;
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        while (!queue.isEmpty()) {
            int node = queue.remove();
            for (int neighbor : graph.get(node)) {
                if (!visited[neighbor]) {
                    distance[neighbor] = 1 + distance[node];
                    queue.add(neighbor);
                    visited[neighbor] = true;
                }
            }
        }

        int maxTime = 0;
        for (int n = 1; n < patience.length; n++) {
            int lastSend = getLastSend(distance[n], patience[n]);
            int lastReceive = lastSend + 2 * distance[n];
            maxTime = Math.max(maxTime, lastReceive);
        }
        return maxTime + 1;
    }
}
```