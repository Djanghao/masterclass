# [Python] Mathematical Solution with Explanation

**Author:** C0R3
**Votes:** 20
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/502816/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/502816/)

---

The minute hand moves by ```minute_deg_per_min = 360\xB0 / 60 = 6\xB0``` per minute.
The hour hand moves by ```hour_deg_per_hour = 360\xB0 / 12 = 30\xB0``` per hour.
The hour hand has an additional movement of ```hour_deg_per_min = hour_deg_per_hour / 60 = 30\xB0 / 60 = 0.5\xB0``` per minute.

Therefore we get the following movements:
```
hour_hand_deg = hour * hour_deg_per_hour + minutes * hour_deg_per_min = hour * 30 + minutes * 0.5
minute_hand_deg = minutes * minute_deg_per_min = minutes * 6
```

We need the absolute difference between those two:
```
diff_deg = |hour_hand_deg - minute_hand_deg| = |hour * 30 + minutes * 0.5 - minutes * 6| = |hour * 30 - minutes * 5.5|
```

As we can easily see when looking at a clock there are two different angles between the hands:
The minimum angle on one side is between 0\xB0 and 180\xB0.
The maximum angle on the other side is between 180\xB0 and 360\xB0.
We need the minimum angle. If our formular returned a number above 180\xB0 we got the maximum angle.
We can calculate the minimum angle by subtracting the maximum angle from 360\xB0.

Time and space complexity: ```O(1)```
```python
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        diff = abs(30 * hour - 5.5 * minutes)
        return diff if diff <= 180 else 360 - diff
```