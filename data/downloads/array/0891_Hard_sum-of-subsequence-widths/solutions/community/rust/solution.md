# Rust version

**Author:** Winterreise
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/2839218/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/2839218/)

---

# Code
Credit: https://leetcode.com/problems/sum-of-subsequence-widths/solutions/2791666/c-easy-shorts/
```
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn sum_subseq_widths(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort_unstable();

        let mut c = 1;
        let mut result: i64 = 0;
        let n = nums.len();

        for i in 0..n {
            result = (result + nums[i] as i64 * c - nums[n - i - 1] as i64 * c) % MOD;
            c = c * 2 % MOD;
        }

        ((result + MOD) % MOD) as i32
    }
}
```