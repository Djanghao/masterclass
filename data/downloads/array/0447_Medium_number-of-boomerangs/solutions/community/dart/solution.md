# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/4495966/](https://leetcode.com/problems/number-of-boomerangs/solutions/4495966/)

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
  int numberOfBoomerangs(List<List<int>> points) {
    var c = 0;
    if (points.length < 3) {
        return 0;
    }
    for (int i = 0; i < points.length; i++) {
        Map<int, int> m = {};
        for (int j = 0; j < points.length; j++) {
            if (i != j) {
                final d = distance(points[i], points[j]);
                if (!m.containsKey(d)) {
                    m[d] = 1;
                } else {
                    m[d] = m[d]! + 1;
                }
            }
        }

        for (final value in m.values) {
            c += (value * (value - 1));
        }
    }

    return c;
  }

  int distance(List<int> x, List<int> y) {
      final dx = x.first - y.first;
      final dy = x.last - y.last;
      return (dx * dx) + (dy * dy);
  }
}
```