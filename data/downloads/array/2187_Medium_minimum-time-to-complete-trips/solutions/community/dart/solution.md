# 🔥🔥  Wow!!! Very easy Dart Binary Search solution!!! 😈100% Beats!!! O(N*logN) time complexity ✅✅

**Author:** LTDigor
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3269178/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3269178/)

---


# Complexity
- Time complexity: $$O(N*logN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int minimumTime(List<int> time, int totalTrips) {
      int maxTime = time.reduce(min) * totalTrips;
      int minTime = 0;

      while (minTime <= maxTime) {
          int middle = (maxTime + minTime) ~/ 2;

          //count trips(middle)
          int trips = 0;
          for (int busTime in time) {
              trips += middle ~/ busTime;
          }

          if (trips >= totalTrips) {
              maxTime = middle - 1;
          }
          else {
              minTime = middle + 1;
          }
      }

      return minTime;
  }
}
```