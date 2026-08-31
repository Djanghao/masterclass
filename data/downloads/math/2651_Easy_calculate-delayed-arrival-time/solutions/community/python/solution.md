# [c++ & Python] O(1) time and space

**Author:** Augus7
**Votes:** 5
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3446380/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3446380/)

---


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
class Solution {
public:
    int findDelayedArrivalTime(int at, int dt) {
        int arrive = at + dt;
        return arrive >= 24 ? arrive - 24 : arrive;
    }
};
```

# Python / Python 3
```
class Solution:
    def findDelayedArrivalTime(self, at: int, dt: int) -> int:
        arrive = at + dt
        if arrive >= 24:
            return arrive - 24
        return arrive
```