# O(1) runtime | fast | Math utilization | 1 line

**Author:** Tristesse02
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3676164/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3676164/)

---

# Intuition
POV: Today you just re-learn some basic math
The formular that I am using is just the formular to find solution in quadratic equation:

x1,2 = -b +- sqrt(delta) / 2a 
with delta = b^2 - 4ac

# Code
```
function maximumGroups(grades: number[]): number {
    return Math.floor((Math.sqrt(1 + 2*4*1*grades.length) - 1)/2)
};
```