# [Dart] Topological Sort approach

**Author:** thanhsontruong
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3939231/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3939231/)

---


# Code
```
import 'dart:collection';

class Solution {
  List<int> sortItems(
      int n, int m, List<int> group, List<List<int>> beforeItems) {
    for (int i = 0; i < group.length; i++) {
      if (group[i] == -1) group[i] = m++;
    }

    List<int> topoSort(List<List<int>> graph, int n) {
      List<int> ans = [];
      List<int> inDegrees = List.generate(n, (_) => 0);
      Queue<int> queue = Queue<int>();
      for (int i = 0; i < n; i++) {
        for (int u in graph[i]) {
          inDegrees[u]++;
        }
      }
      for (var i = 0; i < n; i++) {
        if (inDegrees[i] == 0) {
          ans.add(i);
          queue.add(i);
        }
      }
      while (queue.isNotEmpty) {
        int u = queue.removeFirst();
        for (int v in graph[u]) {
          inDegrees[v]--;
          if (inDegrees[v] == 0) {
            ans.add(v);
            queue.add(v);
          }
        }
      }
      return ans;
    }

    List<List<int>> adjGroup = List.generate(m, (_) => []);
    List<List<int>> adjItems = List.generate(n, (_) => []);
    for (int i = 0; i < n; i++) {
      for (var item in beforeItems[i]) {
        if (group[item] != group[i]) {
          adjGroup[group[item]].add(group[i]);
        }
        adjItems[item].add(i);
      }
    }

    List<int> topoGroup = topoSort(adjGroup, m);
    List<int> topoItems = topoSort(adjItems, n);

    if (topoGroup.length != m || topoItems.length != n) return [];

    List<List<int>> sortedItemGroup = List.generate(m, (_) => <int>[]);
    for (int i in topoItems) {
      sortedItemGroup[group[i]].add(i);
    }

    List<int> ans = [];
    for (int g in topoGroup) {
      for (int i in sortedItemGroup[g]) {
        ans.add(i);
      }
    }
    return ans;
  }
}

```