# Rust Solution using Dynamic Programing

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/3008942/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/3008942/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn minimum_cost(sentence: String, k: i32) -> i32 {
    let s = sentence.split(" ").map(|v| v.len() as i32).collect::<Vec<i32>>();
    let n = s.len();
    
    let mut memo = vec![0;n+1];
    for i in 0..n {
      memo[i+1] = memo[i] + s[i];
    }

    let inf = i32::max_value();
    let mut dp = vec![inf;n+1];
    dp[0] = 0;
    for i in 0..n {
      let mut new_dp = dp.clone();
      for j in i+1..=n {
        let space_num = (j - i - 1) as i32;
        let len = memo[j] - memo[i] + space_num;
        let v = (k - len).pow(2);
        if k < len {
          break
        }

        if j == n {
          new_dp[j] = new_dp[j].min(dp[i]);
        } else {
          new_dp[j] = new_dp[j].min(dp[i] + v);
        }
      }
      dp = new_dp;
    }
    dp[n]
  }
}
```