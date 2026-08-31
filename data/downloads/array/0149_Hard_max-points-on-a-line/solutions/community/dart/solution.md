# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/4467080/](https://leetcode.com/problems/max-points-on-a-line/solutions/4467080/)

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
  int maxPoints(List<List<int>> points) {
    if (points.length < 3) {
        return points.length;
    }
    final List<int> m = [];
    for (int i = 0; i < points.length; i++) {
        Map<double, int> d = {};
        for (int j = i + 1; j < points.length; j++) {
            var slope = (points[j].last - points[i].last) / (points[j].first - points[i].first);
            if (slope == double.negativeInfinity) {
                slope = double.infinity;
            }
            if (!d.containsKey(slope)) {
                d[slope] = 1;
            } else {
                d[slope] = d[slope]! + 1;
            }
            final maxi = d.values.reduce(max);
            m.add(maxi);
        }
    }
    return m.reduce(max) + 1;
  }
}
```