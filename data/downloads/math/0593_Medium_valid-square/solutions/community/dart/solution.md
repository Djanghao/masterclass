# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-square/solutions/4006062/](https://leetcode.com/problems/valid-square/solutions/4006062/)

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
  bool validSquare(List<int> p1, List<int> p2, List<int> p3, List<int> p4) {
    final List<List<int>> points = [p1, p2, p3, p4];
    Map<String, int> pointsMap = {};
    for (var j in points) {
      if (!pointsMap.containsKey(j.toString())) {
        pointsMap[j.toString()] = 1;
      } else {
        pointsMap[j.toString()] = pointsMap[j.toString()]! + 1;
      }
    }
    if (pointsMap.values.length < 4) {
      return false;
    }
    final d1 = distanceFormula(p1.first, p1.last, p2.first, p2.last);
    final d2 = distanceFormula(p1.first, p1.last, p3.first, p3.last);
    final d3 = distanceFormula(p2.first, p2.last, p4.first, p4.last);
    final d4 = distanceFormula(p3.first, p3.last, p4.first, p4.last);
    final d5 = distanceFormula(p1.first, p1.last, p4.first, p4.last);
    final d6 = distanceFormula(p2.first, p2.last, p3.first, p3.last);
    final List<double> res = [d1, d2, d3, d4, d5, d6];
    Map<double, int> distancesMap = {};
    for (var i in res) {
      if (!distancesMap.containsKey(i)) {
        distancesMap[i] = 1;
      } else {
        distancesMap[i] = distancesMap[i]! + 1;
      }
    }
    return distancesMap.values.length == 2 && distancesMap.values.contains(4);
  }

  double distanceFormula(int x1, int y1, int x2, int y2) {
      final deltaY = pow(y2 - y1, 2).toInt();
      final deltaX = pow(x2 - x1, 2).toInt();
      return sqrt(deltaY + deltaX);
  }
}
```