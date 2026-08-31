# 4 Line Solution

**Author:** spagetighost
**Votes:** 1
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5833809/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5833809/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let hourDeg = (hour % 12)*30 + 30*(minutes/60)
    let minuteDeg = minutes/60 * 360

    let angle1 = Math.abs(hourDeg - minuteDeg)

    return Math.min(angle1, 360 - angle1)
};
```