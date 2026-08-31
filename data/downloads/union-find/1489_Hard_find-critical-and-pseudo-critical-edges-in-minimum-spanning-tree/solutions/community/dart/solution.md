# [Dart] MST using Union-Find

**Author:** thanhsontruong
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/4000756/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/4000756/)

---



# Code
```
class UnionFind {
  late List<int> parent;
  UnionFind(int n) {
    parent = List.generate(n, (_) => 0);
    for (int i = 0; i < n; i++) {
      parent[i] = i;
    }
  }

  int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
  }

  void union(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return;

    parent[px] = py;
  }
}

class Solution {
  List<List<int>> findCriticalAndPseudoCriticalEdges(
      int n, List<List<int>> edges) {
    int minWeight = 0;
    for (int i = 0; i < edges.length; i++) {
      edges[i].add(i);
    }
    edges.sort((a, b) => a[2].compareTo(b[2]));
    UnionFind uf = UnionFind(n);
    for (int i = 0; i < edges.length; i++) {
      int a = edges[i][0], b = edges[i][1], w = edges[i][2];
      if (uf.find(a) == uf.find(b)) continue;
      uf.union(a, b);
      minWeight += w;
    }
    List<int> criticalEdges = [], pseudoCriticalEdges = [];
    for (var i = 0; i < edges.length; i++) {
      UnionFind newUf = UnionFind(n);
      int newWeight = 0, edgesCnt = 0;
      for (int j = 0; j < edges.length; j++) {
        int a = edges[j][0], b = edges[j][1], w = edges[j][2];
        if (i == j || newUf.find(a) == newUf.find(b)) continue;
        newUf.union(a, b);
        edgesCnt++;
        newWeight += w;
      }

      if (newWeight > minWeight || edgesCnt != n - 1) {
        criticalEdges.add(edges[i][3]);
      } else {
        UnionFind tempUf = UnionFind(n);
        int newWeight = edges[i][2];
        tempUf.union(edges[i][0], edges[i][1]);
        for (int j = 0; j < edges.length; j++) {
          int a = edges[j][0], b = edges[j][1], w = edges[j][2];
          if (i == j || tempUf.find(a) == tempUf.find(b)) continue;
          tempUf.union(a, b);
          newWeight += w;
        }
        if (newWeight == minWeight) {
          pseudoCriticalEdges.add(edges[i][3]);
        }
      }
    }
    return [
      [...criticalEdges],
      [...pseudoCriticalEdges]
    ];
  }
}

```