# C# Solution for Angle Between Clock Hands 🕰️

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5947428/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5947428/)

---

## Intuition
To solve the problem of finding the angle between the hour and minute hands of a clock, we observe that:
- The hour hand moves 30 degrees per hour (360\xB0 / 12 hours).
- The minute hand moves 6 degrees per minute (360\xB0 / 60 minutes).

We need to compute the absolute difference between the two angles and return the smallest angle (if the angle is more than 180\xB0, return the complement from 360\xB0).

## Approach
1. **Hour hand**:  
   The hour hand moves 30 degrees for every hour, plus 0.5 degrees for every minute.
2. **Minute hand**:  
   The minute hand moves 6 degrees per minute.
3. **Final angle**:  
   Calculate the absolute difference between the two angles and return the smaller angle.

## Complexity
- **Time complexity**:  
   O(1) \u2014 The solution runs in constant time because we perform a fixed number of arithmetic operations.
   
- **Space complexity**:  
   O(1) \u2014 We only use a few variables, so the space complexity is constant.

## Code
```csharp
public class Solution {
    public double AngleClock(int hour, int minutes) {
        var result = Math.Abs((hour + (double)minutes / 60) * 30 - minutes * 6);
        return result > 180 ? 360 - result : result;
    }
}
```
