# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/2921293/](https://leetcode.com/problems/largest-sum-of-averages/solutions/2921293/)

---

# Code
```
impl Solution {
    pub fn largest_sum_of_averages(nums: Vec<i32>, k: i32) -> f64 {
        fn solve(nums: &Vec<i32>, idx: usize, k: i32, dp: &mut Vec<Vec<f64>>) -> f64 {
            if idx >= nums.len() {
                return 0.0;
            }
            if k == 0 {
                return std::f64::MIN;
            }
            if dp[idx][k as usize] != -1.0 {
                return dp[idx][k as usize];
            }
            let mut ans = std::f64::MIN;
            let mut sum = 0.0;
            for i in idx..nums.len() {
                sum += nums[i] as f64;
                ans = ans.max(sum / (i - idx + 1) as f64 + solve(nums, i + 1, k - 1, dp));
            }
            dp[idx][k as usize] = ans;
            ans
        }

        let n = nums.len();
        let mut dp = vec![vec![-1.0; k as usize + 1]; n + 1];
        solve(&nums, 0, k, &mut dp)
    }
}
```