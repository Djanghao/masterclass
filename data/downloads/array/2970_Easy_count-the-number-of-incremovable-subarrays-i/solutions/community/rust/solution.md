# ugly, cubic solution

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/5491236/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/5491236/)

---

```
fn f(xs: &[i32], i: usize, j: usize) -> bool {
    let mut k = if i == 0 {j+1} else {0};
    
    while k < xs.len() {
        let kp = if k != i-1 {k +1 } else {j+1};
        if kp >= xs.len() {break}
        if xs[k] >= xs[kp] {return false}
        k = kp
    }
    true
}

impl Solution {
    pub fn incremovable_subarray_count(nums: Vec<i32>) -> i32 {
        let mut total = 0;
        for i in 0..nums.len() {
            for j in i..nums.len() {
                if f(&nums, i, j) {
                    total += 1
                }
            }
        }
        total 
    }
}
```