# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/2643942/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/2643942/)

---

```
pub fn min_elements(nums: Vec<i32>, limit: i32, goal: i32) -> i32 {
    let mut temp = 0isize;
    for v in nums {
        temp += v as isize;
    }
    let diff = temp - goal as isize;
    let result = diff / limit as isize;
    (if diff % limit as isize != 0 {
        result.abs() + 1
    } else {
        result.abs()
    }) as i32
}
```