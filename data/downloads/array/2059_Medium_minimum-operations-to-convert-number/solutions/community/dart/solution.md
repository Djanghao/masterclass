# [Dart] BFS, Try all possibilities

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/3205306/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/3205306/)

---

# Approach
Calc both 3 operations and put into the queue for iterate again. Visited set will check it's already seen. If found return steps.


# Code
```
import 'dart:collection';

class Solution {
  int minimumOperations(List<int> nums, int start, int goal) {
    int n = nums.length;
    Queue<int> q = Queue();
    HashSet<int> visited = HashSet();
    q.add(start);
    bool check(x) => x < 0 || x > 1000 || visited.contains(x);
    int steps = 0;
    while (q.isNotEmpty) {
      int k = q.length;
      steps++;
      for (var i = 0; i < k; i++) {
        int p = q.removeFirst();
        if (check(p)) {
          continue;
        }
        visited.add(p);
        for (var j = 0; j < n; j++) {
          var x = nums[j];
          int add = p + x;
          int sub = p - x;
          int xor = p ^ x;

          if (add == goal || sub == goal || xor == goal) {
            return steps;
          }
          q.add(add);
          q.add(sub);
          q.add(xor);
        }
      }
    }
    return -1;
  }
}
```