# Rust - Top Down DP

**Author:** nuclearoreo
**Votes:** 0
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3829270/](https://leetcode.com/problems/predict-the-winner/solutions/3829270/)

---

# Code
```
impl Solution {
    pub fn predict_the_winner(nums: Vec<i32>) -> bool {
        fn dfs(l: usize, r: usize, nums: &Vec<i32>, table: &mut Vec<Vec<i32>>) -> i32 {
            if table[l][r] != -1 { return table[l][r]; }
            if l == r { return nums[l]; }
            let left = nums[l] - dfs(l + 1, r, nums, table);
            let right = nums[r] - dfs(l, r - 1, nums, table);
            table[l][r] = left.max(right);
            table[l][r]
        }

        let n = nums.len();
        let mut table = vec![vec![-1; n]; n];
        dfs(0, n - 1, &nums, &mut table) >= 0
    }
}
```