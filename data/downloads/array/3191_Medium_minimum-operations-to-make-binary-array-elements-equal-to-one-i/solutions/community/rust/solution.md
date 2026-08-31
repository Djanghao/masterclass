# left - right - sweep

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/6020716/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/6020716/)

---

```rust []
impl Solution {
    pub fn min_operations(mut xs: Vec<i32>) -> i32 {
        let mut total = 0;
        let n = xs.len();
        for i in 0..n-2 {
            if xs[i] & 1 ==  0 {
                total += 1;
                xs[i+1] += 1;
                xs[i+2] += 1;
            }
        }
        if xs[n-1] & xs[n-2] & 1 == 1  {
            total
        } else {-1}
    }
}
```