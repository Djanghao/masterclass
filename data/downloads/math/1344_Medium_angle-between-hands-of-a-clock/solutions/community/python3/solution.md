# [Java/Python/C++] Simple Math on Clock angles

**Author:** sankalpdayal5
**Votes:** 175
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/502738/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/502738/)

---

**Basic Unitary Method**
(Credits - @rajcm)

**Hour Hand**
In 12 hours Hour hand complete whole circle and cover 360\xB0
So, 1 hour = 360\xB0 / 12 = 30\xB0

Since 1 hours = 30\xB0
In 1 minute, hours hand rotate -> 30\xB0 / 60 = 0.5\xB0
So total angle because of minutes by hour hand is `minutes/60 * 30` or `minutes * 0.5`

**Minute Hand**
In 60 minutes Minute Hand completes whole circle and cover 360\xB0.
So, 1 minute -> 360\xB0 / 60 = 6\xB0

<br><br>

**Java**
```
class Solution {
    public double angleClock(int hour, int minutes) {
        
         // Degree covered by hour hand (hour area + minutes area)
        double h = (hour%12 * 30) + ((double)minutes/60 * 30);
        
         // Degree covered by minute hand (Each minute = 6 degree)
        double m = minutes * 6;
        
         // Absolute angle between them
        double angle = Math.abs(m - h);
        
         // If the angle is obtuse (>180), convert it to acute (0<=x<=180)
        if (angle > 180) angle = 360.0 - angle;
        
        return angle;
    }
}
```
<br><br>

**Python**

```
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        
        # Degree covered by hour hand (hour area + minutes area)
        h = (hour%12 * 30) + (minutes/60 * 30)
        
        # Degree covered by minute hand (Each minute = 6 degree)
        m = minutes * 6
        
        # Absolute angle between them
        angle = abs(m - h)
        
        # If the angle is obtuse (>180), convert it to acute (0<=x<=180)
        if angle > 180:
            angle = 360.0 - angle
        
        return (angle)
```

**C++**
Credits : [MichaelZ](https://leetcode.com/michaelz/)
Thanks for the C++ code.
```
double angleClock(int hour, int minutes) {
        double minute=minutes*6, hr=hour*30+(double)minutes/2, diff=abs(hr-minute);
        return min(diff, 360-diff);
    }
```	

Please upvote if you found this useful.
If you have any queries, please post in comment section.
Thank you