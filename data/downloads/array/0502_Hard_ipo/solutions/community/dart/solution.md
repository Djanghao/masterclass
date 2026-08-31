# Dart using PriorityQueues

**Author:** Dartist
**Votes:** 2
**Link:** [https://leetcode.com/problems/ipo/solutions/5189773/](https://leetcode.com/problems/ipo/solutions/5189773/)

---

# Code
```
import 'package:collection/collection.dart';

typedef proCap = ({int capital, int profit});

class Solution {
  int findMaximizedCapital(int k, int w, List<int> profits, List<int> capital) {
    final pqCap = PriorityQueue<proCap>((a, b) => a.capital - b.capital);
    final pqPro = PriorityQueue<proCap>((a, b) => b.profit - a.profit);

    for (int i = 0; i < profits.length; i++) {
      pqCap.add((capital: capital[i], profit: profits[i]));
    }

    for (int i = 0; i < k; i++) {
      while (pqCap.isNotEmpty && pqCap.first.capital <= w) {
        pqPro.add(pqCap.removeFirst());
      }

      if (pqPro.isEmpty) break;

      w += pqPro.removeFirst().profit;
    }

    return w;
  }
}
```