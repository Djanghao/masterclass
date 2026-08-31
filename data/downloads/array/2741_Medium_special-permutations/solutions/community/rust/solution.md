# Rust + DP

**Author:** unknown-
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3652754/](https://leetcode.com/problems/special-permutations/solutions/3652754/)

---

```
impl Solution {
    pub fn special_perm(nums: Vec<i32>) -> i32 {
        let mut dp = vec![vec![-1; (1 << nums.len()) - 1]; nums.len()];
        Self::dfs(0, 0, &nums, &mut dp)
    }

    fn dfs(i: usize, mask: usize, nums: &[i32], dp: &mut [Vec<i32>]) -> i32 {
        if mask == (1 << nums.len()) - 1 {
            return 1;
        }

        if dp[i][mask] != -1 {
            return dp[i][mask];
        }
        
        let mut t = 0;
        for j in 0..nums.len() {
            if (mask & (1 << j)) == 0 && (mask == 0 || nums[i] % nums[j] == 0 || nums[j] % nums[i] == 0) {
                t = (t + Self::dfs(j, mask | (1 << j), nums, dp)) % 1_000_000_007;
            }
        }
        dp[i][mask] = t;
        t
    }
}
```