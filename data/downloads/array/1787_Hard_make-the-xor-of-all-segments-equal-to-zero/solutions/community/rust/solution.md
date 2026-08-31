# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/3213580/](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/3213580/)

---

# Code
```
impl Solution {
    pub fn min_changes(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let k = k as usize;
        let mut dp = vec![vec![n + 1; 1025]; k];
        let mut freq = vec![vec![0; 1025]; k];
        let mut numbers = vec![vec![]; k];
        for i in 0..n {
            freq[i % k][nums[i] as usize] += 1;
            numbers[i % k].push(nums[i]);
        }
        let mut mnm = 0;
        for i in 0..k {
            let total = numbers[i].len();
            for j in 0..1024 {
                if i == 0 {
                    dp[i][j] = total - freq[i][j];
                } else {
                    for it in &numbers[i] {
                        dp[i][j] = dp[i][j].min(dp[i - 1][j ^ *it as usize] + total - freq[i][*it as usize]);
                    }
                    dp[i][j] = dp[i][j].min(mnm + total);
                }
            }
            mnm = *dp[i].iter().min().unwrap();
        }
        dp[k - 1][0] as _
    }
}
```