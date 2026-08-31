# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/3112303/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/3112303/)

---

# Code
```
impl Solution {
    pub fn largest_number(cost: Vec<i32>, target: i32) -> String {
        let mut dp = vec![0; target as usize + 1];
        for i in 1..=target {
            dp[i as usize] = -1;
            for j in 0..9 {
                if i >= cost[j] && dp[(i - cost[j]) as usize] >= 0 {
                    dp[i as usize] = std::cmp::max(dp[i as usize], dp[(i - cost[j]) as usize] + 1);
                }
            }
        }
        if dp[target as usize] < 0 {
            return "0".to_string();
        }
        let mut ans = String::new();
        let mut i = target;
        for j in (0..9).rev() {
            while i >= cost[j] && dp[(i - cost[j]) as usize] == dp[i as usize] - 1 {
                ans.push(((j + 1) as u8 + b'0') as char);
                i -= cost[j];
            }
        }
        ans
    }
}
```