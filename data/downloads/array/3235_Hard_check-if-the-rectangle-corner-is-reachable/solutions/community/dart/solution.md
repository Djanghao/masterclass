# 🔥BEATS 💯 % 🎯 || DART || JAVA || JAVASCRIPT || PYTHON || C++|| 🍭✨

**Author:** CodeWithSparsh
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5547728/](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5547728/)

---

![image.png](./images/0.png)

# Intuition
The problem involves determining whether a path is blocked in a grid with circular obstacles. The first step is to visualize the problem as a graph where nodes represent circles and connections (edges) represent overlapping circles. If circles overlap, they form a continuous path blocking access to certain grid corners.

# Approach
1. **Graph Representation**: Represent the circles and their connections as a graph. Each circle is a node, and an edge exists between nodes if the circles overlap.
2. **Construct Graph**: Use the Euclidean distance to determine if two circles overlap. Additionally, check if any circle touches the borders of the grid.
3. **Breadth-First Search (BFS)**: Use BFS to check if there is a path connecting specific nodes, which represent the corners of the grid. If a path exists, it indicates a blockage.
4. **Check Blockage**: Specifically check for paths connecting the start (corner) to other corners through overlapping circles.

# Complexity
- **Time complexity**: \\(O(n^2)\\), where \\(n\\) is the number of circles. This is due to the need to check every pair of circles for overlap.
- **Space complexity**: \\(O(n)\\), for storing the graph representation and visited nodes.



### DART IMPLEMENATATION

# Code
```dart

import 'dart:collection';
import 'dart:math';

class Solution {
  int bfs(List<List<int>> graph, int start, int target1, int target2, int nodes) {
    Queue<int> q = Queue<int>();
    List<int> visited = List<int>.filled(nodes + 4, 0);
    q.add(start);
    visited[start] = 1;
    
    while (q.isNotEmpty) {
      int u = q.removeFirst();
      for (int v in graph[u]) {
        if (visited[v] == 0) {
          q.add(v);
          visited[v] = 1;
        }
      }
    }
    return visited[target1] | visited[target2];
  }

  bool canReachCorner(int X, int Y, List<List<int>> circles2) {
    List<Map<String, int>> circles = List<Map<String, int>>.filled(circles2.length, {}, growable: false);
    List<List<int>> graph = List<List<int>>.generate(circles2.length + 4, (_) => []);
    int numCircles = circles2.length;
    
    for (int i = 0; i < numCircles; ++i) {
      circles[i] = {
        'x': circles2[i][0],
        'y': circles2[i][1],
        'r': circles2[i][2]
      };
    }
    
    for (int i = 0; i < numCircles; ++i) {
      if (circles[i]['x']! <= circles[i]['r']!) {
        graph[numCircles].add(i);
        graph[i].add(numCircles);
      }
      if (X - circles[i]['x']! <= circles[i]['r']!) {
        graph[numCircles + 2].add(i);
        graph[i].add(numCircles + 2);
      }
      if (circles[i]['y']! <= circles[i]['r']!) {
        graph[numCircles + 1].add(i);
        graph[i].add(numCircles + 1);
      }
      if (Y - circles[i]['y']! <= circles[i]['r']!) {
        graph[numCircles + 3].add(i);
        graph[i].add(numCircles + 3);
      }
      for (int j = i + 1; j < numCircles; ++j) {
        double distance = sqrt(pow(circles[i]['x']! - circles[j]['x']!, 2) + pow(circles[i]['y']! - circles[j]['y']!, 2));
        int radiusSum = circles[i]['r']! + circles[j]['r']!;
        if (radiusSum >= distance) {
          graph[i].add(j);
          graph[j].add(i);
        }
      }
    }
    
    int isBlocked = 0;
     // Check for bottom-left corner
    isBlocked = max(isBlocked, bfs(graph, numCircles, numCircles + 1, numCircles + 2, numCircles + 4));
    // Check for top-right corner
    isBlocked = max(isBlocked, bfs(graph, numCircles + 3, numCircles + 2, numCircles + 1, numCircles + 4)); 

    
    if (isBlocked != 0) return false;
    return true;
  }
}

```
### C++ IMPLEMENATATION


``` cpp
class Solution {
public:
    int bfs(vector<vector<int>> &graph, int start, int target1, int target2, int nodes) {
    queue<int> q;
    vector<int> visited(nodes + 4, 0);
    q.push(start);
    visited[start] = 1;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : graph[u]) {
            if (!visited[v]) {
                q.push(v);
                visited[v] = 1;
            }
        }
    }
    return visited[target1] || visited[target2];
}
    
    bool canReachCorner(int X, int Y, vector<vector<int>>& circles2) {
         vector<pair<pair<int, int>, int>> circles(circles2.size());
         vector<vector<int>> graph(circles2.size() + 4);
        int num_circles=circles2.size();
        
        for (int i = 0; i < num_circles; ++i) {
            circles[i].first.first=circles2[i][0];
            circles[i].first.second=circles2[i][1];
            circles[i].second=circles2[i][2];
            // cin >> circles[i].first.first >> circles[i].first.second >> circles[i].second;
        }
        
        
        
         for (int i = 0; i < num_circles; ++i) {
             
            if (circles[i].first.first <= circles[i].second) {
                graph[num_circles].push_back(i);
                graph[i].push_back(num_circles);
            }
            if (X - circles[i].first.first <= circles[i].second) {
                graph[num_circles + 2].push_back(i);
                graph[i].push_back(num_circles + 2);
            }
            if (circles[i].first.second <= circles[i].second) {
                graph[num_circles + 1].push_back(i);
                graph[i].push_back(num_circles + 1);
            }
            if (Y - circles[i].first.second <= circles[i].second) {
                graph[num_circles + 3].push_back(i);
                graph[i].push_back(num_circles + 3);
            }
            for (int j = i + 1; j < num_circles; ++j) {
                double distance = sqrt(pow(circles[i].first.first - circles[j].first.first, 2) +
                                       pow(circles[i].first.second - circles[j].first.second, 2));
                int radius_sum = circles[i].second + circles[j].second;
                if (radius_sum >= distance) {
                    graph[i].push_back(j);
                    graph[j].push_back(i);
                }
            }
        }
        
        int is_blocked = 0;
        // is_blocked = max(is_blocked, bfs(graph, num_circles, num_circles + 3, num_circles + 2, num_circles + 4));
        // is_blocked = max(is_blocked, bfs(graph, num_circles + 1, num_circles + 2, num_circles + 3, num_circles + 4));
is_blocked = max(is_blocked, bfs(graph, num_circles, num_circles + 1, num_circles + 2, num_circles + 4)); // Check for bottom-left corner
    is_blocked = max(is_blocked, bfs(graph, num_circles + 3, num_circles + 2, num_circles + 1, num_circles + 4)); // Check for top-right corner
        // cout<<is_blocked<<endl;
        if (is_blocked){return false;}
        return true;
       
        
    }
};
```

### JavaScript Implementation

```javascript
class Solution {
  bfs(graph, start, target1, target2, nodes) {
    let q = [];
    let visited = Array(nodes + 4).fill(0);
    q.push(start);
    visited[start] = 1;
    
    while (q.length > 0) {
      let u = q.shift();
      for (let v of graph[u]) {
        if (visited[v] === 0) {
          q.push(v);
          visited[v] = 1;
        }
      }
    }
    return visited[target1] || visited[target2];
  }

  canReachCorner(X, Y, circles2) {
    let circles = Array(circles2.length);
    let graph = Array.from({ length: circles2.length + 4 }, () => []);
    let numCircles = circles2.length;
    
    for (let i = 0; i < numCircles; ++i) {
      circles[i] = { x: circles2[i][0], y: circles2[i][1], r: circles2[i][2] };
    }
    
    for (let i = 0; i < numCircles; ++i) {
      if (circles[i].x <= circles[i].r) {
        graph[numCircles].push(i);
        graph[i].push(numCircles);
      }
      if (X - circles[i].x <= circles[i].r) {
        graph[numCircles + 2].push(i);
        graph[i].push(numCircles + 2);
      }
      if (circles[i].y <= circles[i].r) {
        graph[numCircles + 1].push(i);
        graph[i].push(numCircles + 1);
      }
      if (Y - circles[i].y <= circles[i].r) {
        graph[numCircles + 3].push(i);
        graph[i].push(numCircles + 3);
      }
      for (let j = i + 1; j < numCircles; ++j) {
        let distance = Math.sqrt(Math.pow(circles[i].x - circles[j].x, 2) + Math.pow(circles[i].y - circles[j].y, 2));
        let radiusSum = circles[i].r + circles[j].r;
        if (radiusSum >= distance) {
          graph[i].push(j);
          graph[j].push(i);
        }
      }
    }
    
    let isBlocked = 0;
    isBlocked = Math.max(isBlocked, this.bfs(graph, numCircles, numCircles + 1, numCircles + 2, numCircles + 4)); // Check for bottom-left corner
    isBlocked = Math.max(isBlocked, this.bfs(graph, numCircles + 3, numCircles + 2, numCircles + 1, numCircles + 4)); // Check for top-right corner
    
    return isBlocked === 0;
  }
}
```

### Python Implementation

```python
from collections import deque
from math import sqrt

class Solution:
    def bfs(self, graph, start, target1, target2, nodes):
        q = deque([start])
        visited = [0] * (nodes + 4)
        visited[start] = 1
        
        while q:
            u = q.popleft()
            for v in graph[u]:
                if not visited[v]:
                    q.append(v)
                    visited[v] = 1
        return visited[target1] or visited[target2]

    def canReachCorner(self, X, Y, circles2):
        circles = [{'x': c[0], 'y': c[1], 'r': c[2]} for c in circles2]
        graph = [[] for _ in range(len(circles2) + 4)]
        num_circles = len(circles2)
        
        for i in range(num_circles):
            if circles[i]['x'] <= circles[i]['r']:
                graph[num_circles].append(i)
                graph[i].append(num_circles)
            if X - circles[i]['x'] <= circles[i]['r']:
                graph[num_circles + 2].append(i)
                graph[i].append(num_circles + 2)
            if circles[i]['y'] <= circles[i]['r']:
                graph[num_circles + 1].append(i)
                graph[i].append(num_circles + 1)
            if Y - circles[i]['y'] <= circles[i]['r']:
                graph[num_circles + 3].append(i)
                graph[i].append(num_circles + 3)
            for j in range(i + 1, num_circles):
                distance = sqrt((circles[i]['x'] - circles[j]['x']) ** 2 + (circles[i]['y'] - circles[j]['y']) ** 2)
                radius_sum = circles[i]['r'] + circles[j]['r']
                if radius_sum >= distance:
                    graph[i].append(j)
                    graph[j].append(i)
        
        is_blocked = 0
        is_blocked = max(is_blocked, self.bfs(graph, num_circles, num_circles + 1, num_circles + 2, num_circles + 4)) # Check for bottom-left corner
        is_blocked = max(is_blocked, self.bfs(graph, num_circles + 3, num_circles + 2, num_circles + 1, num_circles + 4)) # Check for top-right corner
        
        return is_blocked == 0
```

### Java Implementation

```java
import java.util.*;

class Solution {
    public int bfs(List<List<Integer>> graph, int start, int target1, int target2, int nodes) {
        Queue<Integer> q = new LinkedList<>();
        int[] visited = new int[nodes + 4];
        q.add(start);
        visited[start] = 1;
        
        while (!q.isEmpty()) {
            int u = q.poll();
            for (int v : graph.get(u)) {
                if (visited[v] == 0) {
                    q.add(v);
                    visited[v] = 1;
                }
            }
        }
        return visited[target1] | visited[target2];
    }

    public boolean canReachCorner(int X, int Y, int[][] circles2) {
        List<Map<String, Integer>> circles = new ArrayList<>(circles2.length);
        List<List<Integer>> graph = new ArrayList<>(circles2.length + 4);
        for (int i = 0; i < circles2.length + 4; i++) {
            graph.add(new ArrayList<>());
        }
        int numCircles = circles2.length;
        
        for (int i = 0; i < numCircles; ++i) {
            Map<String, Integer> circle = new HashMap<>();
            circle.put("x", circles2[i][0]);
            circle.put("y", circles2[i][1]);
            circle.put("r", circles2[i][2]);
            circles.add(circle);
        }
        
        for (int i = 0; i < numCircles; ++i) {
            if (circles.get(i).get("x") <= circles.get(i).get("r")) {
                graph.get(numCircles).add(i);
                graph.get(i).add(numCircles);
            }
            if (X - circles.get(i).get("x") <= circles.get(i).get("r")) {
                graph.get(numCircles + 2).add(i);
                graph.get(i).add(numCircles + 2);
            }
            if (circles.get(i).get("y") <= circles.get(i).get("r")) {
                graph.get(numCircles + 1).add(i);
                graph.get(i).add(numCircles + 1);
            }
            if (Y - circles.get(i).get("y") <= circles.get(i).get("r")) {
                graph.get(numCircles + 3).add(i);
                graph.get(i).add(numCircles + 3);
            }
            for (int j = i + 1; j < numCircles; ++j) {
                double distance = Math.sqrt(Math.pow(circles.get(i).get("x") - circles.get(j).get("x"), 2) + Math.pow(circles.get(i).get("y") - circles.get(j).get("y"), 2));
                int radiusSum = circles.get(i).get("r") + circles.get(j).get("r");
                if (radiusSum >= distance) {
                    graph.get(i).add(j);
                    graph.get(j).add(i);
                }
            }
        }
        
        int isBlocked = 0;
        isBlocked = Math.max(isBlocked, bfs(graph, numCircles, numCircles + 1, numCircles + 2, numCircles + 4)); // Check for bottom-left corner
        isBlocked = Math.max(isBlocked, bfs(graph, numCircles + 3, numCircles + 2, numCircles + 1, numCircles + 4)); // Check for top-right corner
        
        return isBlocked == 0;
    }
}
```

![image.png](./images/1.png)



