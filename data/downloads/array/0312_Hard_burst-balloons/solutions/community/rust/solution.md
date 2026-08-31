# Rust | Clean DP Iterative Bottom-up | Time: cube, Space: square

**Author:** melvinsamxd
**Votes:** 1
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/2476660/](https://leetcode.com/problems/burst-balloons/solutions/2476660/)

---

```rust
pub fn max_coins(mut nums: Vec<i32>) -> i32 {
        nums.push(1);
        nums.insert(0, 1);
        let n = nums.len();
        
        let mut dp = vec![vec![0; n]; n];
        for i in (1..n - 1).rev() {
            for j in i..n - 1 {
                for k in i..=j {
                    let coins = nums[i - 1]*nums[k]*nums[j + 1] + dp[i][k - 1] + dp[k + 1][j];
                    dp[i][j] = dp[i][j].max(coins);
                }
            }
        }
        dp[1][n - 2]
    }
```
