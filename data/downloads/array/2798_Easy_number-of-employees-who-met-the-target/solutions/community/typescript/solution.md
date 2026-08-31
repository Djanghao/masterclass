# One line JavaScript & TypeScript Solution. Easiest way to solve the problem

**Author:** pratovv
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3851433/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3851433/)

---

# Complexity
- Time complexity:
46ms
Beats 97.92%of users with TypeScript

- Space complexity:
44.90mb
Beats 39.58%of users with TypeScript

# Code
```
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    return hours.filter((hour)=>hour>=target).length;
};
```