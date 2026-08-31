# Rust DP Solution | 1-D Vector

**Author:** jddxf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/1184944/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/1184944/)

---

```
struct Solution;

impl Solution {
    pub fn max_product_path(grid: Vec<Vec<i32>>) -> i32 {
        let (r, c) = (grid.len(), grid[0].len());
        let mut dp = Vec::with_capacity(c);
        dp.push(make_new_range((1, 1), grid[0][0] as i64));
        for i in 1..c {
            dp.push(make_new_range(dp[i - 1], grid[0][i] as i64));
        }

        for i in 1..r {
            dp[0] = make_new_range(dp[0], grid[i][0] as i64);
            for j in 1..c {
                let new_range1 = make_new_range(dp[j], grid[i][j] as i64);
                let new_range2 = make_new_range(dp[j - 1], grid[i][j] as i64);
                dp[j] = (
                    new_range1.0.min(new_range2.0),
                    new_range1.1.max(new_range2.1),
                );
            }
        }

        let max = dp[c - 1].1;
        if max < 0 {
            return -1;
        }
        (max % 1_000_000_007) as i32
    }
}

#[inline]
fn make_new_range(old_range: (i64, i64), value: i64) -> (i64, i64) {
    if value > 0 {
        (old_range.0 * value, old_range.1 * value)
    } else {
        (old_range.1 * value, old_range.0 * value)
    }
}
```