# 1 Liner C++  ||  100% faster

**Author:** noogler1
**Votes:** 3
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3478275/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3478275/)

---

```
class Solution {
public:
    int findDelayedArrivalTime(int arrivalTime, int delayedTime) {
        return (arrivalTime+delayedTime)%24;
    }
};
```