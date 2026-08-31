# Quick Ruby solution, some comments

**Author:** blither
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/833227/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/833227/)

---

Ruby solution, tried to explain the logic behind the math with comments.
```
def angle_clock(hour, minutes)
    # Angles for hour, minute.
    # Hour moves 0.5deg/min.
    hour_angle = (360/12) * hour + (minutes*0.5)
    minute_angle = (360/60) * minutes
    
    # Calculate, absolute value.
    angle = (hour_angle - minute_angle).abs
    
    # Minimum of angle, 360 - angle.
    [angle, 360-angle].min
end
```