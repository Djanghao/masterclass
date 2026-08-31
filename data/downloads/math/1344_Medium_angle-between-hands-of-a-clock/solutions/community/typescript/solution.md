# Amazon Question angleClock

**Author:** krdilip276
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/3027173/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/3027173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
here small unit is minutes. so we have to check the state/speed of both clock with respect to minutes.

note: the hour hand will not be on 12th position in case the time will 12:xx where xx can be any valid non zero minutes.

# Approach
<!-- Describe your approach to solving the problem. -->
1. find the distance/angle from start for hourHand with respect to hour
2. find the extra distance for hour hand due to minutes i.e. delta
3. add deltAngle and hourAngle to get exact distance/angle for hourHand.
4. find the distance/angle from start for minuteHand with respect to minutes
5. get difference between angle by absolute minus ??
6. as we are talking about angle between these both hands so we will intrested in positive value
7. if angle is greater than 180 then as per complimentry rule there will be another angle which will be smaller between these hands.
8. A + B = 360;
9. if A > 180 then B < 180

# Complexity
- Time complexity: O(1);
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function angleClock(hour: number, minutes: number): number {
    const anglePerHour = (360 / 12);
    const delta = (anglePerHour / 60);
    const anglePerMinute = (360/60);
    const hourAngleFromStart = (anglePerHour * (hour % 12)) + (delta * minutes)
    const minuteAngleFromStart = anglePerMinute * minutes;
    const angle = Math.abs(hourAngleFromStart - minuteAngleFromStart);
    return angle <=180 ? angle : 360 - angle;
};
```