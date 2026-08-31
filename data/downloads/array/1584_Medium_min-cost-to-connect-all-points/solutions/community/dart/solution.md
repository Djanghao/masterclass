# Dart

**Author:** darv
**Votes:** 4
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4046184/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4046184/)

---

# Code
```
class DSU {
  List<int> parent = [];
  DSU(int n) {
    parent = List.generate(n, (it) => it);
  }
  int find(int v) {
    if (parent[v] == v) return v;
    return parent[v] = find(parent[v]);
  }
  void merge(int a, int b) {
    parent[find(b)] = find(a);
  }
}

class Solution {
  int minCostConnectPoints(List<List<int>> points) {
    List<List<int>> triples = [];
    final dsu = DSU(points.length);
    for (int i = 0; i < points.length; i++) {
      final int x1 = points[i][0], y1 = points[i][1];
      for (int j = i + 1; j < points.length; j++) {
        final int x2 = points[j][0], y2 = points[j][1];
        triples.add([i, j, (x1-x2).abs() + (y1-y2).abs()]);
      }
    }

    triples.sort((a, b) => a[2] - b[2]);
    var res = 0;
    for (final triple in triples) {
      if (dsu.find(triple[0]) != dsu.find(triple[1])) {
        res += triple[2];
        dsu.merge(triple[0], triple[1]);
      }
    }
    return res;
  }
}
```