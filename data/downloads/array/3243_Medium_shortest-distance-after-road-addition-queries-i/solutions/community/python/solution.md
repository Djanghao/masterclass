# Shortest path using BFS | Breadth-First-Search |✅✅Beats 100% | C++ | Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087268/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087268/)

---


# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F

---


## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).

---


```cpp []
class Solution {
public:
    // BFS to find the shortest path from 'start' to 'end'
    int bfs(int start, int end, int n, const vector<vector<int>>& graph) {
        vector<int> dist(n, INT_MAX);
        queue<int> q;
        dist[start] = 0;
        q.push(start);

        while (!q.empty()) {
            int curr = q.front();
            q.pop();

            for (int u : graph[curr]) {
                if (dist[u] > dist[curr] + 1) {
                    dist[u] = dist[curr] + 1;
                    q.push(u);
                }
            }
        }

        return dist[end];
    }

    vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& queries) {
        vector<int> answer;
        vector<vector<int>> graph(n);

        for (int i = 0; i < n - 1; i++) {
            graph[i].push_back(i + 1);
        }

        for (auto query : queries) {
            int u = query[0], v = query[1];
            graph[u].push_back(v);
            answer.push_back(bfs(0, n - 1, n, graph));
        }

        return answer;
    }
};
```

```python []
from collections import deque

class Solution:
    def bfs(self, start, end, n, graph):
        dist = [float('inf')] * n
        dist[start] = 0
        q = deque([start])

        while q:
            curr = q.popleft()
            for u in graph[curr]:
                if dist[u] > dist[curr] + 1:
                    dist[u] = dist[curr] + 1
                    q.append(u)

        return dist[end]

    def shortestDistanceAfterQueries(self, n, queries):
        answer = []
        graph = [[] for _ in range(n)]

        for i in range(n - 1):
            graph[i].append(i + 1)

        for u, v in queries:
            graph[u].append(v)
            answer.append(self.bfs(0, n - 1, n, graph))

        return answer
```

```java []
import java.util.*;

class Solution {
    public int bfs(int start, int end, int n, List<List<Integer>> graph) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;
        Queue<Integer> q = new LinkedList<>();
        q.add(start);

        while (!q.isEmpty()) {
            int curr = q.poll();
            for (int u : graph.get(curr)) {
                if (dist[u] > dist[curr] + 1) {
                    dist[u] = dist[curr] + 1;
                    q.add(u);
                }
            }
        }

        return dist[end];
    }

    public List<Integer> shortestDistanceAfterQueries(int n, int[][] queries) {
        List<Integer> answer = new ArrayList<>();
        List<List<Integer>> graph = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < n - 1; i++) {
            graph.get(i).add(i + 1);
        }

        for (int[] query : queries) {
            int u = query[0], v = query[1];
            graph.get(u).add(v);
            answer.add(bfs(0, n - 1, n, graph));
        }

        return answer;
    }
}
```

```javascript []
class Solution {
    bfs(start, end, n, graph) {
        const dist = Array(n).fill(Infinity);
        const queue = [];
        dist[start] = 0;
        queue.push(start);

        while (queue.length > 0) {
            const curr = queue.shift();

            for (const u of graph[curr]) {
                if (dist[u] > dist[curr] + 1) {
                    dist[u] = dist[curr] + 1;
                    queue.push(u);
                }
            }
        }

        return dist[end];
    }

    shortestDistanceAfterQueries(n, queries) {
        const answer = [];
        const graph = Array.from({ length: n }, () => []);

        for (let i = 0; i < n - 1; i++) {
            graph[i].push(i + 1);
        }

        for (const [u, v] of queries) {
            graph[u].push(v);
            answer.push(this.bfs(0, n - 1, n, graph));
        }

        return answer;
    }
}
```

### Explanation:
1. **Graph Initialization**: We first build the graph with consecutive roads between each city, so each city connects to the next.
2. **BFS Implementation**: The BFS algorithm is used to calculate the shortest path between the start and end cities. We update the distances for each city as we explore neighbors.
3. **Process Queries**: For each query, a new road is added to the graph. After the update, the shortest path is recalculated.

---

# Approach:
1. **Graph Representation**: An adjacency list is used to represent the graph. Each city is a node, and the roads between them are edges.
2. **BFS Algorithm**: BFS ensures that the shortest path from the start to the end city is found efficiently by exploring all possible paths level by level.
3. **Query Processing**: Each query modifies the graph by adding a new road, and then BFS is called to find the updated shortest path.

---

# Complexity:
- **Time Complexity**: \\(O(q \	imes (V + E))\\), where \\(q\\) is the number of queries, \\(V = n\\) (number of cities), and \\(E\\) is the number of edges (roads).
- **Space Complexity**: \\(O(V + E)\\) for storing the graph and BFS structures.

---

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*