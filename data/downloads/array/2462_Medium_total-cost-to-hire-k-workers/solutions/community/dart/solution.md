# Dart, 2 priority queues

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/5062211/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/5062211/)

---

# Note
Since we don't have access to the standard collection package from Leetcode, I created a PrioityQueue equivalent from a SplayTreeMap. It is almost as efficient and will avoid the TLE. Feel free to use it in your own submissions since the aim of these questions is not to re-create a Priority Queue but to use it.

# Code
```
import 'dart:collection';

const MAX_INT = 0x7FFFFFFFFFFFFFFF;

class Solution {
  int totalCost(List<int> costs, int workers, int candidates) {
    int i = 0;
    int j = costs.length - 1;
    var pqLeft  = PriorityQueue<int>();
    var pqRight = PriorityQueue<int>();

    int totalCost = 0;
    for (; workers > 0; workers--) {
      while (pqLeft.length < candidates && i <= j) {
        pqLeft.add(costs[i++]);
      }
      while (pqRight.length < candidates && i <= j) {
        pqRight.add(costs[j--]);
      }

      int topCostLeft  = pqLeft.first ?? MAX_INT;
      int topCostRight = pqRight.first ?? MAX_INT;

      if (topCostLeft <= topCostRight) {
        totalCost += topCostLeft;
        pqLeft.removeFirst();
      } else {
        totalCost += topCostRight;
        pqRight.removeFirst();
      }
    }
    return totalCost;
  }
}

class PriorityQueue<T> {
  var pq = SplayTreeMap<T, int>();
  var length = 0;

  T? get first => pq.keys.isEmpty ? null : pq.keys.first;

  void add(key) {
    pq[key] = (pq[key] ?? 0) + 1;
    length++;
  }

  T removeFirst() {
    var key = pq.keys.first;
    pq[key] = pq[key]! - 1;
    if (pq[key]! == 0) pq.remove(key);
    length--;
    return key;
  }
}
```