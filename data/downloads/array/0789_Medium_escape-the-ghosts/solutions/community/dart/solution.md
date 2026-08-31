# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/5379609/](https://leetcode.com/problems/escape-the-ghosts/solutions/5379609/)

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
  bool escapeGhosts(List<List<int>> ghosts, List<int> target) {
    List<int> player = [0, 0];

    List<int> distances = [];
    for (final g in ghosts) {
      int gx = g[0];
      int gy = g[1];
      int distance = computeDistance(gx, gy, target);
      distances.add(distance);
    }

    int playerDistanceToTarget = (player[0] - target[0]).abs() + (player[1] - target[1]).abs();
    for (final d in distances) {
      if (d <= playerDistanceToTarget) {
        return false;
      }
    }
    return true;
  }

  int computeDistance(int gx, int gy, List<int> target) {
    int tx = target[0];
    int ty = target[1];

    int distance = (gx - tx).abs() + (gy - ty).abs();

    return distance;
  }
}


```