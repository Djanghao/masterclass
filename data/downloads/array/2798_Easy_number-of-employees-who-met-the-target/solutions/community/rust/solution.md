# 2 pointers ✅

**Author:** Kay-79
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/6054293/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/6054293/)

---

# Code
```rust []
impl Solution {
    pub fn number_of_employees_who_met_target(hours: Vec<i32>, target: i32) -> i32 {
        let mut l = 0;
        let mut r = hours.len() - 1;
        let mut result = 0;
        while l < r {
            if hours[l] >= target {
                result += 1;
            }
            if hours[r] >= target {
                result += 1;
            }
            l += 1;
            r -= 1;
        }
        if r == l && hours[l] >= target {
            result += 1
        };
        result
    }
}
```