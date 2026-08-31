# simple solution for  Calculate Delayed Arrival Time

**Author:** EsraaRiad
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/6032957/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/6032957/)

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
```dart []
class Solution {
  int findDelayedArrivalTime(int arrivalTime, int delayedTime) {
    int delayedArrivalTime=(arrivalTime+delayedTime)%24;
    return delayedArrivalTime;
  }
}
```