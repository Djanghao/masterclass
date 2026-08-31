# Dart Solution using PriorityQueue 🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5657131/](https://leetcode.com/problems/ugly-number-ii/solutions/5657131/)

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
import 'package:collection/collection.dart';

class Solution {
  int nthUglyNumber(int n) {
    List<int> primes = [2, 3, 5];
    final uglyHeap = PriorityQueue<int>();
    Set<int> visited = {};

    uglyHeap.add(1);
    visited.add(1);

    int curr = 0;
    for (int i = 0; i < n; i++) {
      curr = uglyHeap.removeFirst(); // Equivalent to pop() in C++
      for (int prime in primes) {
        int newUgly = curr * prime;
        if (!visited.contains(newUgly)) {
          uglyHeap.add(newUgly);
          visited.add(newUgly);
        }
      }
    }
    return curr;
  }
}
```