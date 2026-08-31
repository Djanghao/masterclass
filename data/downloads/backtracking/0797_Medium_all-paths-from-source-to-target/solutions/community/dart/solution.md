# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/5145875/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/5145875/)

---

# Code
```
import 'dart:collection';

class Solution {
  Map<int, List<int>> graph = HashMap();
  Set<int> curr = LinkedHashSet()..add(0);
  List<List<int>> ans = [];
  late int target;
  List<List<int>> allPathsSourceTarget(List<List<int>> edgeList) {
    for (var i = 0; i < edgeList.length; i++) {
      graph[i] = edgeList[i];
    }

    target = edgeList.length - 1;

    backtrack();

    return ans;
  }

  void backtrack() {
    // base case
    if (curr.last == target) {
      ans.add(curr.toList());
      return;
    }

    // backtracking
    for (var neighbor in graph[curr.last]!) {
      if (!curr.contains(neighbor)) {
        curr.add(neighbor);
        backtrack();
        curr.remove(neighbor);
      }
    }
  }
}

```