# Dart Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274406/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274406/)

---

# Code
```
import 'dart:math';

class Graph {
  late List<List<int>> grph;
  late int v;

  int dijkstra(int n1, int n2, List<List<int>> grph) {
    List<int> dist = List.filled(v, 1000000000);
    dist[n1] = 0;
    List<bool> visit = List.filled(v, false);

    for (int i = 0; i < v - 1; i++) {
      int u = -1;
      for (int k = 0; k < v; k++) {
        if (!visit[k] && (u == -1 || dist[k] < dist[u])) u = k;
      }
      visit[u] = true;
      for (int j = 0; j < v; j++) {
        if (grph[u][j] != 0 && !visit[j]) {
          dist[j] = min(dist[j], dist[u] + grph[u][j]);
        }
      }
    }

    if (dist[n2] == 1000000000) return -1;
    return dist[n2];
  }

  Graph(int n, List<List<int>> edges) {
    grph = List.generate(n, (i) => List.filled(n, 0));
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        grph[i][j] = 0;
      }
    }

    for (var r in edges) {
      grph[r[0]][r[1]] = r[2];
    }

    v = n;
  }

  void addEdge(List<int> edge) {
    grph[edge[0]][edge[1]] = edge[2];
  }

  int shortestPath(int node1, int node2) {
    return dijkstra(node1, node2, grph);
  }
}


/**
 * Your Graph object will be instantiated and called as such:
 * Graph obj = Graph(n, edges);
 * obj.addEdge(edge);
 * int param2 = obj.shortestPath(node1,node2);
 */
```