# dp

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/6026419/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/6026419/)

---

```rust []
impl Solution {
    pub fn max_energy_boost(a: Vec<i32>, b: Vec<i32>) -> i64 {
        let n = a.len();
        let mut dp : Vec<Vec<i64>> = vec![vec![0; n]; 2];
        for i in 0..n {
            let i1 = i.wrapping_sub(1);
            let i2 = i.wrapping_sub(2);
            dp[0][i] = a[i] as i64 + dp[0].get(i1).unwrap_or(&0)
                                .max(dp[1].get(i2).unwrap_or(&0));
            dp[1][i] = b[i] as i64 + dp[1].get(i1).unwrap_or(&0)
                                .max(dp[0].get(i2).unwrap_or(&0));
        }
        dp[0][n-1].max(dp[1][n-1])
    }
}
```