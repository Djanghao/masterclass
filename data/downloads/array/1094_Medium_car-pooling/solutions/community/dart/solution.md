# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-pooling/solutions/4733646/](https://leetcode.com/problems/car-pooling/solutions/4733646/)

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
class Solution {
  bool carPooling(List<List<int>> trips, int capacity) {
    final List<int> stops = List.filled(1001, 0);
    for (final trip in trips) {
        final passengers = trip[0];
        final from = trip[1];
        final to = trip[2];

        stops[from] += passengers;
        stops[to] -= passengers;
    }

    for (int i = 0; i < stops.length; i++) {
        capacity -= stops[i];
        if (capacity < 0) {
            return false;
        }
    }

    return true;
  }
}

```