# Count 'em

**Author:** devious-coffee
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5125836/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5125836/)

---



# Code
```
# @param {Integer[]} hours
# @param {Integer} target
# @return {Integer}
def number_of_employees_who_met_target(hours, target)
    hours.count { |employee_hours| employee_hours >= target }
end
```