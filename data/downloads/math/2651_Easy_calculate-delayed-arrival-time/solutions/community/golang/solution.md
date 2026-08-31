# Python/Go | Easy Solution✅

**Author:** gmanayath
**Votes:** 4
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3488470/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3488470/)

---

# Python\u2705
```
class Solution:
    def findDelayedArrivalTime(self, arrivalTime: int, delayedTime: int) -> int:
            return (arrivalTime + delayedTime)%24
}
```
# Go\u2705
```
func findDelayedArrivalTime(arrivalTime int, delayedTime int) int {
    return (arrivalTime+delayedTime)%24
}
```