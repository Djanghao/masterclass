# Rust Math solution, easy to understand, O(N)

**Author:** xyzwithashok
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/5084427/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/5084427/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```rs
use std::cmp::{max, min};

impl Solution {
    pub fn max_abs_val_expr(arr1: Vec<i32>, arr2: Vec<i32>) -> i32 {
        let n = arr1.len();

        let (mut a_min, mut a_max) = (i32::MAX, i32::MIN);  // a + b + i
        let (mut b_min, mut b_max) = (i32::MAX, i32::MIN);  // a + b - 1
        let (mut c_min, mut c_max) = (i32::MAX, i32::MIN);  // a - b + i
        let (mut d_min, mut d_max) = (i32::MAX, i32::MIN);  // a - b - 1

        for i in 0..n {
            let v1 = arr1[i] + arr2[i] + i as i32;  // a + b + i
            let v2 = arr1[i] + arr2[i] - i as i32;  // a + b - i
            let v3 = arr1[i] - arr2[i] + i as i32;  // a - b + i
            let v4 = arr1[i] - arr2[i] - i as i32;  // a - b - i

            (a_min, a_max) = (min(v1, a_min), max(v1, a_max));
            (b_min, b_max) = (min(v2, b_min), max(v2, b_max));
            (c_min, c_max) = (min(v3, c_min), max(v3, c_max));
            (d_min, d_max) = (min(v4, d_min), max(v4, d_max));
        }
        max(max(a_max - a_min, b_max - b_min), max(c_max - c_min, d_max - d_min))
    }
}

```