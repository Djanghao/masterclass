# Most intuitive Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/5138159/](https://leetcode.com/problems/jump-game-iii/solutions/5138159/)

---

# Code
```
import 'dart:collection';

class Solution {
  bool canReach(List<int> arr, int start) {
    int n = arr.length;

    bool isValid(int nextNode) => 0 <= nextNode && nextNode < n;

    HashSet<int> seen = HashSet()..add(start);
    Queue<int> queue = Queue()..add(start);

    while (queue.isNotEmpty) {
      int node = queue.removeFirst();

      if (arr[node] == 0) return true;

      for (var move in [1, -1]) {
        int nextNode = node + move * arr[node];
        if (isValid(nextNode) && !seen.contains(nextNode)) {
          seen.add(nextNode);
          queue.add(nextNode);
        }
      }
    }

    return false;
  }
}

```