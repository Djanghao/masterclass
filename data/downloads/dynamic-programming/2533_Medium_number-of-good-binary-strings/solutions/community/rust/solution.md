# Rust Solution using DP

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3395519/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3395519/)

---

# Code
```
const MOD:usize = 1_000_000_007;
impl Solution {
  pub fn good_binary_strings(min_length: i32, max_length: i32, one_group: i32, zero_group: i32) -> i32 {
    let min = min_length as usize;
    let max = max_length as usize;
    let one = one_group as usize;
    let zero = zero_group as usize;
    let mut dp = vec![0;max+1];
    dp[0] = 1;

    for i in 0..max {
      let ni_one = i + one;
      if max >= ni_one {
        dp[ni_one] += dp[i];
        dp[ni_one] %= MOD;
      }

      let ni_zero = i + zero;
      if max >= ni_zero {
        dp[ni_zero] += dp[i];
        dp[ni_zero] %= MOD;
      }
    }

    let mut result = 0;
    for i in min..=max {
      result += dp[i];
      result %= MOD;
    }
    result as i32
  }
}
```