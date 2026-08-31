# [Dart] Simple solution with 'Union Find'

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4776771/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4776771/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';
class Solution {
  // union find
  List<int> findAllPeople(int n, List<List<int>> meetings, int f) {
    // answer set
    final sett = <int>{0, f};
    // sort by time
    meetings.sort((a,b) => a[2].compareTo(b[2]));
    // 
    final sameTimeMeetings = <List<int>>[];
    for (int i = 0; i <= meetings.length; i++){
      // meetings at same time => union find
      if (sameTimeMeetings.isNotEmpty && (i == meetings.length || sameTimeMeetings.last[2] < meetings[i][2])){
        final parent = <int, int>{0:0};
        for (final meet in sameTimeMeetings){
          parent[meet[0]] ??= sett.contains(meet[0]) ? 0 : meet[0];
          parent[meet[1]] ??= sett.contains(meet[1]) ? 0 : meet[1];
          union(meet[0], meet[1], parent);
        }
        sett.addAll(parent.entries.where((e) => find(e.value, parent) == 0)
              .map((e) => e.key)
              .toSet());
        sameTimeMeetings.clear();
        if (i == meetings.length) break;
      }
      sameTimeMeetings.add(meetings[i]);
    }
    return sett.toList();
  }

  void union(int a, int b, Map<int, int> parent){
    a = find(a, parent);
    b = find(b, parent);
    if (a < b){
      parent[b] = a;
      return;
    }
    parent[a] = b;    
  }

  int find (int c, Map<int, int> parent){
    if (parent[c]! != c){
      parent[c] = find(parent[c]!, parent);
    }
    return parent[c]!;
  }
}
```