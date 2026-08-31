# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4840756/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4840756/)

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
import 'dart:collection';

class Solution {
  int minimumOperationsToMakeEqual(int x, int y) {
    int minDistance = 0;
    Queue<int> queue = Queue();
    queue.add(x);
    Set<int> visited = Set();
    while (queue.isNotEmpty) {
      int size = queue.length;
      for (int i = 0; i < size; i++) {
        int number = queue.removeFirst();
        if (number == y) {
          return minDistance;
        }
        if (number % 11 == 0 && !visited.contains(number ~/ 11)) {
          queue.add(number ~/ 11);
          visited.add(number ~/ 11);
        }
        if (number % 5 == 0 && !visited.contains(number ~/ 5)) {
          queue.add(number ~/ 5);
          visited.add(number ~/ 5);
        }
        if (!visited.contains(number - 1)) {
          queue.add(number - 1);
          visited.add(number - 1);
        }
        if (!visited.contains(number + 1)) {
          queue.add(number + 1);
          visited.add(number + 1);
        }
      }
      minDistance += 1;
    }
    return minDistance;
  }
}
```