# 7ms (Beats 99.99%)🔥🔥|| Full Explanation✅|| Breadth First Search✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 73
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170023/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170023/)

---

# Intuition :
- Here we are given a graph with two types of edges (red and blue), the goal is to find the shortest path from node 0 to every other node such that no two consecutive edges have the same color.
<!-- Describe your first thoughts on how to solve this problem. -->

# Explanation to Approach :
- So we are using a breadth-first search (BFS) algorithm to traverse the graph, keeping track of the distance from node 0 to every other node and the previous edge color. 
- The graph is represented as an adjacency list, where graph[u] is a list of pairs (v, edgeColor) representing an edge from node u to node v with color edgeColor.
- The BFS algorithm starts from node 0 and adds node v to the queue if it is not visited yet or if the color of the edge from u to v is different from the previous edge color. 
- The distance from node 0 to node v is incremented in each step. 
- The ans array is updated with the minimum distance found so far to each node. If a node is visited again, its distance in ans is not updated.
- The algorithm terminates when the queue is empty, meaning that all reachable nodes have been visited. 
- If a node is not visited, its distance in ans remains -1, indicating that it is not reachable from node 0.
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] with Comments :
```C++ []
enum class Color { kInit, kRed, kBlue };

class Solution {
 public:
  vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges,
                                       vector<vector<int>>& blueEdges) {
    vector<int> ans(n, -1);
    vector<vector<pair<int, Color>>> graph(n);  // graph[u] := [(v, edgeColor)]
    queue<pair<int, Color>> q{{{0, Color::kInit}}};  // [(u, prevColor)]

    for (const vector<int>& edge : redEdges) {
      const int u = edge[0];
      const int v = edge[1];
      graph[u].emplace_back(v, Color::kRed);
    }

    for (const vector<int>& edge : blueEdges) {
      const int u = edge[0];
      const int v = edge[1];
      graph[u].emplace_back(v, Color::kBlue);
    }

    for (int step = 0; !q.empty(); ++step)
      for (int sz = q.size(); sz > 0; --sz) {
        const auto [u, prevColor] = q.front();
        q.pop();
        ans[u] = ans[u] == -1 ? step : ans[u];
        for (auto& [v, edgeColor] : graph[u]) {
          if (v == -1 || edgeColor == prevColor)
            continue;
          q.emplace(v, edgeColor);
          v = -1;  // Mark (u, v) as used.
        }
      }

    return ans;
  }
};
```
```Java []
enum Color { kInit, kRed, kBlue }

class Solution {
  public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
    int[] ans = new int[n];
    Arrays.fill(ans, -1);
    // graph[u] := [(v, edgeColor)]
    List<Pair<Integer, Color>>[] graph = new List[n];
    // [(u, prevColor)]
    Queue<Pair<Integer, Color>> q = new ArrayDeque<>(Arrays.asList(new Pair<>(0, Color.kInit)));

    for (int i = 0; i < n; ++i)
      graph[i] = new ArrayList<>();

    for (int[] edge : redEdges) {
      final int u = edge[0];
      final int v = edge[1];
      graph[u].add(new Pair<>(v, Color.kRed));
    }

    for (int[] edge : blueEdges) {
      final int u = edge[0];
      final int v = edge[1];
      graph[u].add(new Pair<>(v, Color.kBlue));
    }

    for (int step = 0; !q.isEmpty(); ++step)
      for (int sz = q.size(); sz > 0; --sz) {
        final int u = q.peek().getKey();
        Color prevColor = q.poll().getValue();
        ans[u] = ans[u] == -1 ? step : ans[u];
        for (int i = 0; i < graph[u].size(); ++i) {
          Pair<Integer, Color> node = graph[u].get(i);
          final int v = node.getKey();
          Color edgeColor = node.getValue();
          if (v == -1 || edgeColor == prevColor)
            continue;
          q.add(new Pair<>(v, edgeColor));
          // Mark (u, v) as used.
          graph[u].set(i, new Pair<>(-1, edgeColor));
        }
      }

    return ans;
  }
}
```
```Python3 []
from enum import Enum

class Color(Enum):
  kInit = 0
  kRed = 1
  kBlue = 2

class Solution:
  def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
    ans = [-1] * n
    graph = [[] for _ in range(n)]  # graph[u] := [(v, edgeColor)]
    q = collections.deque([(0, Color.kInit)])  # [(u, prevColor)]

    for u, v in redEdges:
      graph[u].append((v, Color.kRed))

    for u, v in blueEdges:
      graph[u].append((v, Color.kBlue))

    step = 0
    while q:
      for _ in range(len(q)):
        u, prevColor = q.popleft()
        if ans[u] == -1:
          ans[u] = step
        for i, (v, edgeColor) in enumerate(graph[u]):
          if v == -1 or edgeColor == prevColor:
            continue
          q.append((v, edgeColor))
          graph[u][i] = (-1, edgeColor)  # Mark (u, v) as used.
      step += 1

    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
