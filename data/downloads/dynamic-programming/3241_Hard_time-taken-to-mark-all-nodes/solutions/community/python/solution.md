# ✅ Working - 03.10.2024

**Author:** Piotr_Maminski
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5862692/](https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5862692/)

---


# Complexity
- Time complexity: (O(V + E)

- Space complexity: (O(V + E)
# Code
```python3 []
class Solution:
    def timeTaken(self, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(list) 
        for start, end in edges:
            graph[start].append(end)
            graph[end].append(start)
        dp = [defaultdict(int) for _ in range(len(graph))]
        already = [[0, 0] for _ in range(len(graph))]
        visited, times = set(), [0] * len(graph)

        def find(node: int = 0) -> int:
            visited.add(node)
            maxTime = secondMaxTime = 0
            for neighbor in graph[node]:
                if neighbor not in visited:
                    time = find(neighbor) + (1 if neighbor & 1 else 2)
                    dp[node][neighbor] = time
                    if time >= maxTime:
                        secondMaxTime = maxTime
                        maxTime = time
                    elif time > secondMaxTime:
                        secondMaxTime = time
            already[node] = [maxTime, secondMaxTime]
            return maxTime

        times[0] = find()
        for node in range(1, len(graph)):
            maxTime = 0
            for neighbor in graph[node]:
                time, tempMaxTime = (1 if neighbor & 1 else 2), 0
                max1, max2 = already[neighbor]
                tempMaxTime = (max2 if dp[neighbor][node] == max1 else max1)
                maxTime = max(maxTime, tempMaxTime + time)
                if dp[node][neighbor] != tempMaxTime + time:
                    if tempMaxTime + time >= already[node][0]:
                        already[node][1] = already[node][0]
                        already[node][0] = tempMaxTime + time
                    elif tempMaxTime + time >= already[node][1]:
                        already[node][1] = tempMaxTime + time
                dp[node][neighbor] = tempMaxTime + time
            times[node] = maxTime
        return times
```
```cpp []
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
private:
    std::vector<std::vector<int>> graph;
    std::vector<std::unordered_map<int, int>> dp;
    std::vector<std::vector<int>> already;
    std::vector<bool> visited;
    std::vector<int> times;

    int find(int node = 0) {
        visited[node] = true;
        int maxTime = 0, secondMaxTime = 0;

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                int time = find(neighbor) + (neighbor & 1 ? 1 : 2);
                dp[node][neighbor] = time;
                if (time >= maxTime) {
                    secondMaxTime = maxTime;
                    maxTime = time;
                } else if (time > secondMaxTime) {
                    secondMaxTime = time;
                }
            }
        }

        already[node] = {maxTime, secondMaxTime};
        return maxTime;
    }

public:
    std::vector<int> timeTaken(std::vector<std::vector<int>>& edges) {
        int n = edges.size() + 1;
        graph.resize(n);
        dp.resize(n);
        already.resize(n, std::vector<int>(2, 0));
        visited.resize(n, false);
        times.resize(n, 0);

        for (const auto& edge : edges) {
            int start = edge[0], end = edge[1];
            graph[start].push_back(end);
            graph[end].push_back(start);
        }

        times[0] = find();

        for (int node = 1; node < n; ++node) {
            int maxTime = 0;
            for (int neighbor : graph[node]) {
                int time = (neighbor & 1 ? 1 : 2);
                int tempMaxTime = 0;
                int max1 = already[neighbor][0], max2 = already[neighbor][1];
                tempMaxTime = (dp[neighbor][node] == max1 ? max2 : max1);
                maxTime = std::max(maxTime, tempMaxTime + time);

                if (dp[node][neighbor] != tempMaxTime + time) {
                    if (tempMaxTime + time >= already[node][0]) {
                        already[node][1] = already[node][0];
                        already[node][0] = tempMaxTime + time;
                    } else if (tempMaxTime + time >= already[node][1]) {
                        already[node][1] = tempMaxTime + time;
                    }
                }
                dp[node][neighbor] = tempMaxTime + time;
            }
            times[node] = maxTime;
        }

        return times;
    }
};
```
```java []
import java.util.*;

class Solution {
    private List<List<Integer>> graph;
    private List<Map<Integer, Integer>> dp;
    private List<int[]> already;
    private boolean[] visited;
    private int[] times;

    private int find(int node) {
        visited[node] = true;
        int maxTime = 0, secondMaxTime = 0;

        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                int time = find(neighbor) + ((neighbor & 1) == 1 ? 1 : 2);
                dp.get(node).put(neighbor, time);
                if (time >= maxTime) {
                    secondMaxTime = maxTime;
                    maxTime = time;
                } else if (time > secondMaxTime) {
                    secondMaxTime = time;
                }
            }
        }

        already.get(node)[0] = maxTime;
        already.get(node)[1] = secondMaxTime;
        return maxTime;
    }

    public int[] timeTaken(int[][] edges) {
        int n = edges.length + 1;
        graph = new ArrayList<>(n);
        dp = new ArrayList<>(n);
        already = new ArrayList<>(n);
        visited = new boolean[n];
        times = new int[n];

        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
            dp.add(new HashMap<>());
            already.add(new int[2]);
        }

        for (int[] edge : edges) {
            int start = edge[0], end = edge[1];
            graph.get(start).add(end);
            graph.get(end).add(start);
        }

        times[0] = find(0);

        for (int node = 1; node < n; node++) {
            int maxTime = 0;
            for (int neighbor : graph.get(node)) {
                int time = (neighbor & 1) == 1 ? 1 : 2;
                int tempMaxTime;
                int max1 = already.get(neighbor)[0], max2 = already.get(neighbor)[1];
                tempMaxTime = dp.get(neighbor).getOrDefault(node, 0) == max1 ? max2 : max1;
                maxTime = Math.max(maxTime, tempMaxTime + time);

                if (!dp.get(node).containsKey(neighbor) || dp.get(node).get(neighbor) != tempMaxTime + time) {
                    if (tempMaxTime + time >= already.get(node)[0]) {
                        already.get(node)[1] = already.get(node)[0];
                        already.get(node)[0] = tempMaxTime + time;
                    } else if (tempMaxTime + time >= already.get(node)[1]) {
                        already.get(node)[1] = tempMaxTime + time;
                    }
                }
                dp.get(node).put(neighbor, tempMaxTime + time);
            }
            times[node] = maxTime;
        }

        return times;
    }
}
```


![image.png](./images/0.png)
