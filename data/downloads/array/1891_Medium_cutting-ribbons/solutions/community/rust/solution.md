# Rust Solution using binary search

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/2209216/](https://leetcode.com/problems/cutting-ribbons/solutions/2209216/)

---

```
impl Solution {
    pub fn max_length(ribbons: Vec<i32>, k: i32) -> i32 {
        let n = ribbons.len();
        let k = k as usize;
        let ribbons = ribbons.into_iter().map(|v| v as usize).collect::<Vec<usize>>();

        let tot = ribbons.iter().sum::<usize>();
        if tot < k {
            return 0
        }

        let mut left = 0;
        let mut right = 1_000_000_000;
        while left + 1 < right {
            let mid = (left + right) / 2;
            let mut count = 0;
            for i in 0..n {
                count += ribbons[i] / mid;
            }

            if count < k {
                right = mid;
            } else {
                left = mid;
            }
        }

        left as i32
    }
}
```