# Dart Solution Regardless of the open bug of the double to int.

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/5142624/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/5142624/)

---

# Code
```
import 'dart:math' show max;

class Solution {
  int minSpeedOnTime(List<int> dist, double hour) {
    int left = 1;
    int right = dist.reduce(max);
    int misSpeed = -1;
    
    while (left <= right) {
      int mid = left + (right - left) ~/ 2;

      if (check(mid, hour, dist)) {
        misSpeed = mid;
        right = mid - 1;
      } else
        left = mid + 1;
    }
    return misSpeed;
  }

  bool check(int mid, double target, List<int> dist) {
    double hours = 0;
    int n = dist.length;
    for (var i = 0; i < dist.length; i++) {
      double t = dist[i] / mid;
      hours += i == n - 1 ? t : t.ceil(); 
    }
    return hours <= target;
  }
}
