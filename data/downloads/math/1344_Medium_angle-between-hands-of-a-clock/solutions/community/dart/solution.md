# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4928806/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4928806/)

---

Credit to: [helpingwithmath](https://helpingwithmath.com/clock-angle-formula/). Calculate the two angles between the clock hands and return the smaller value.

# Code
```
class Solution {
  double angleClock(int hour, int minutes) {
    final angleMinutes = 6 * minutes;
    final angleHours = (30 * hour) + (0.5 * minutes);
    final diff = (angleHours - angleMinutes).abs();
    return min(360 - diff, diff);
  }
}
```