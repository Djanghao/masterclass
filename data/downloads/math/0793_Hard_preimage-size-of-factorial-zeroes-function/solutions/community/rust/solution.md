# check powers of 5

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/5059577/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/5059577/)

---

We need to expand k in a series

sum a[n] x[n], with n = 1, 2, .. 

where x[1] = 6 and x[k+1] = 5 * x[k] + 1.

Then we need to check a[n].


# Code
```
impl Solution {
    pub fn preimage_size_fzf(mut k: i32) -> i32 {
        let mut x = 6;
        while x < k {
            x = 5*x + 1;
        }
        while x > 1 {
            k = k % x;
            if k == x - 1 {return 0}
            x = (x-1)/5;
        }
        5
    }
}
```