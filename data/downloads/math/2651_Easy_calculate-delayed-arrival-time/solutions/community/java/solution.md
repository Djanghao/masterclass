# 🔥 [LeetCode The Hard Way] 🔥 One Line

**Author:** tr1nity
**Votes:** 10
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3446040/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3446040/)

---

Please check out LeetCode The Hard Way for more solution explanations and tutorials. If you like it, please give a star and watch my Github Repository. Link in bio.

---

```cpp
class Solution {
public:
    int findDelayedArrivalTime(int arrivalTime, int delayedTime) {
        return (arrivalTime + delayedTime) % 24;
    }
};
```

```py
class Solution:
    def findDelayedArrivalTime(self, arrivalTime: int, delayedTime: int) -> int:
        return (arrivalTime + delayedTime) % 24
```

```java
class Solution {
    public int findDelayedArrivalTime(int arrivalTime, int delayedTime) {
        return (arrivalTime + delayedTime) % 24;
    }
}
```