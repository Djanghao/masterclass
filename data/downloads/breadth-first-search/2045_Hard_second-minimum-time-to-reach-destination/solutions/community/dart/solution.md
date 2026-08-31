# ✨BEATS 100 % 🎯 || GRAPH  🍭

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547374/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547374/)

---

![image.png](./images/0.png)


### Intuition
To find the second minimum time to travel from vertex 1 to vertex n in a graph where each vertex has traffic lights changing color at regular intervals, we need to use a breadth-first search (BFS) approach. The key is to account for the traffic light cycles and ensure we correctly handle the time spent waiting for green signals.

### Approach
1. Represent the graph as an adjacency list.
2. Use BFS to explore the shortest paths, considering traffic light cycles.
3. Track the number of visits and the times for each node to find the second minimum time.
4. For each neighbor, calculate the potential new time considering traffic signal cycles and update the visit count and times.

### Complexity
- **Time complexity**: \\(O(n + m)\\), where \\(n\\) is the number of vertices and \\(m\\) is the number of edges.
- **Space complexity**: \\(O(n + m)\\), for storing the graph and the BFS queue.

### Dart Code
```dart
import 'dart:collection';

class Solution {
  int secondMinimum(int n, List<List<int>> edges, int time, int change) {
    // Create the graph as an adjacency list
    List<List<int>> graph = List.generate(n + 1, (_) => []);
    for (var edge in edges) {
      int u = edge[0], v = edge[1];
      graph[u].add(v);
      graph[v].add(u);
    }

    // Initialize the queue, visited count array, and time array
    Queue<List<int>> deque = Queue();
    List<int> visitedNum = List.filled(n + 1, 0);
    List<int> timeArr = List.filled(n + 1, -1);
    
    // Start from node 1 with time 0
    deque.add([1, 0]);
    timeArr[0] = 0;

    while (deque.isNotEmpty) {
      int curSize = deque.length;
      for (int i = 0; i < curSize; i++) {
        var cur = deque.removeFirst();
        int curNode = cur[0];
        int curTime = cur[1];

        // Calculate the next time considering the traffic light
        int nextTime;
        int curLight = curTime ~/ change;
        if (curLight % 2 == 0) {
          nextTime = curTime + time;
        } else {
          nextTime = (curLight + 1) * change + time;
        }

        // Traverse all neighbors of the current node
        for (int nextNode in graph[curNode]) {
          if (visitedNum[nextNode] < 2 && timeArr[nextNode] < nextTime) {
            deque.add([nextNode, nextTime]);
            visitedNum[nextNode]++;
            timeArr[nextNode] = nextTime;
            if (nextNode == n && visitedNum[nextNode] == 2) return nextTime;
          }
        }
      }
    }
    return -1;
  }
}

void main() {
  Solution solution = Solution();
  int n = 2;
  List<List<int>> edges = [
    [1, 2]
  ];
  int time = 3;
  int change = 2;

  print(solution.secondMinimum(n, edges, time, change));  // Expected output: 11
}
```

### Java Code
```java
import java.util.*;

class Solution {
    public int secondMinimum(int n, int[][] edges, int time, int change) {
        List<Integer>[] graph = new ArrayList[n + 1];
        for (int i = 0; i < n + 1; i++) graph[i] = new ArrayList<>();
        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
            graph[edge[1]].add(edge[0]);
        }

        Queue<int[]> deque = new LinkedList<>();
        int[] visitedNum = new int[n + 1];
        int[] timeArr = new int[n + 1];
        Arrays.fill(timeArr, -1);
        deque.offer(new int[]{1, 0});
        timeArr[0] = 0;

        while (!deque.isEmpty()) {
            int curSize = deque.size();
            for (int i = 0; i < curSize; i++) {
                int[] cur = deque.poll();
                int curNode = cur[0], curTime = cur[1];

                int nextTime = 0;
                int curLight = curTime / change;
                if (curLight % 2 == 0) {
                    nextTime = curTime + time;
                } else {
                    nextTime = (curLight + 1) * change + time;
                }

                for (int nextNode : graph[curNode]) {
                    if (visitedNum[nextNode] < 2 && timeArr[nextNode] < nextTime) {
                        deque.offer(new int[]{nextNode, nextTime});
                        visitedNum[nextNode]++;
                        timeArr[nextNode] = nextTime;
                        if (nextNode == n && visitedNum[nextNode] == 2) return nextTime;
                    }
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int n = 2;
        int[][] edges = {
            {1, 2}
        };
        int time = 3;
        int change = 2;

        System.out.println(solution.secondMinimum(n, edges, time, change));  // Expected output: 11
    }
}
```

### C++ Code
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {
        vector<vector<int>> graph(n + 1);
        for (auto& edge : edges) {
            int u = edge[0], v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        queue<pair<int, int>> deque;
        vector<int> visitedNum(n + 1, 0);
        vector<int> timeArr(n + 1, -1);

        deque.push({1, 0});
        timeArr[0] = 0;

        while (!deque.empty()) {
            int curSize = deque.size();
            for (int i = 0; i < curSize; i++) {
                auto cur = deque.front();
                deque.pop();
                int curNode = cur.first, curTime = cur.second;

                int nextTime;
                int curLight = curTime / change;
                if (curLight % 2 == 0) {
                    nextTime = curTime + time;
                } else {
                    nextTime = (curLight + 1) * change + time;
                }

                for (int nextNode : graph[curNode]) {
                    if (visitedNum[nextNode] < 2 && timeArr[nextNode] < nextTime) {
                        deque.push({nextNode, nextTime});
                        visitedNum[nextNode]++;
                        timeArr[nextNode] = nextTime;
                        if (nextNode == n && visitedNum[nextNode] == 2) return nextTime;
                    }
                }
            }
        }
        return -1;
    }
};

int main() {
    Solution solution;
    int n = 2;
    vector<vector<int>> edges = {
        {1, 2}
    };
    int time = 3;
    int change = 2;

    cout << solution.secondMinimum(n, edges, time, change) << endl;  // Expected output: 11
    return 0;
}
```

### Python Code
```python
from collections import deque
from typing import List

class Solution:
    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
        graph = [[] for _ in range(n + 1)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        deque = deque([(1, 0)])
        visitedNum = [0] * (n + 1)
        timeArr = [-1] * (n + 1)
        timeArr[0] = 0

        while deque:
            curSize = len(deque)
            for _ in range(curSize):
                curNode, curTime = deque.popleft()

                curLight = curTime // change
                if curLight % 2 == 0:
                    nextTime = curTime + time
                else:
                    nextTime = (curLight + 1) * change + time

                for nextNode in graph[curNode]:
                    if visitedNum[nextNode] < 2 and timeArr[nextNode] < nextTime:
                        deque.append((nextNode, nextTime))
                        visitedNum[nextNode] += 1
                        timeArr[nextNode] = nextTime
                        if nextNode == n and visitedNum[nextNode] == 2:
                            return nextTime
        return -1

# Example usage
solution = Solution()
n = 2
edges = [[1, 2]]
time = 3
change = 2

print(solution.secondMinimum(n, edges, time, change))  # Expected output: 11
```

### JavaScript Code
```javascript
class Solution {
    secondMinimum(n, edges, time, change) {
        const graph = Array.from({ length: n + 1 }, () => []);
        for (const [u, v] of edges

) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const deque = [];
        const visitedNum = new Array(n + 1).fill(0);
        const timeArr = new Array(n + 1).fill(-1);
        deque.push([1, 0]);
        timeArr[0] = 0;

        while (deque.length > 0) {
            const curSize = deque.length;
            for (let i = 0; i < curSize; i++) {
                const [curNode, curTime] = deque.shift();

                const curLight = Math.floor(curTime / change);
                let nextTime;
                if (curLight % 2 === 0) {
                    nextTime = curTime + time;
                } else {
                    nextTime = (curLight + 1) * change + time;
                }

                for (const nextNode of graph[curNode]) {
                    if (visitedNum[nextNode] < 2 && timeArr[nextNode] < nextTime) {
                        deque.push([nextNode, nextTime]);
                        visitedNum[nextNode]++;
                        timeArr[nextNode] = nextTime;
                        if (nextNode === n && visitedNum[nextNode] === 2) return nextTime;
                    }
                }
            }
        }
        return -1;
    }
}

// Example usage
const solution = new Solution();
const n = 2;
const edges = [[1, 2]];
const time = 3;
const change = 2;

console.log(solution.secondMinimum(n, edges, time, change));  // Expected output: 11
```

![image.png](./images/1.png)


