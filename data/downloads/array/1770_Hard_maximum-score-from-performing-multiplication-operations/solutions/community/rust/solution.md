# Rust | Bottom-Up and Top-Down DP | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2455163/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2455163/)

---

EDIT 2022-09-16: Revisited as the Daily Problem. Celebrating this by adding two top-down DP solutions (with `HashMap` and a 2D table for memoization, respectively). It's interesting to note that they are around ten and two times slower than the bottom-up solutions, respectively (so they had to go to the bottom of the post :D ).

**Original Post**

It turns out I made a different parameterization than the reference solution, but the way I did it was the most natural for me. Let's start with the O(m^2) space DP I did first:

```
impl Solution {
    pub fn maximum_score(nums: Vec<i32>, multipliers: Vec<i32>) -> i32 {
        let (n, m) = (nums.len(), multipliers.len());
        let mut dp = vec![vec![0; m + 1]; m + 1];
        for left in (0..m).rev() {
            for right in (0..m - left).rev() {
                let multiplier = multipliers[left + right];
                dp[left][right] = (dp[left + 1][right] + multiplier * nums[left])
                    .max(dp[left][right + 1] + multiplier * nums[n - right - 1]);
            }
        }
        dp[0][0]
    }
}
```

The variables `left` and `right` stand for how many numbers are taken from the left and the right of `nums`. And the `dp[left][right]` table entry is the maximum *additional* score possible given that `left` numbers are already taken from the left, and `right` numbers are already taken from the right. With `left + right == m`, the additional possible score is 0, so we initialize the `dp` table with zeros. Then we iterate our way backward through all possible combinations. The DP entries are calculated as the maximum of taking a number from the left or right, plus the respective maximal additional scores. Our result is then the maximum additional score possible given that no numbers are taken, i.e. `dp[0][0]`.

To optimize the space needed, we use the standard technique of reducing the DP table to two rows that we reuse by swapping them after finishing a row. Since we use one more entry of the DP rows for each row processed, we always have a zero in the next position for the first entry computed (`dp[right + 1]` when `right == m - left - 1`), so we don't have to clear the reused DP row after each row.

```
impl Solution {
    pub fn maximum_score(nums: Vec<i32>, multipliers: Vec<i32>) -> i32 {
        let (n, m) = (nums.len(), multipliers.len());
        let mut dp_prev = vec![0; m + 1];
        let mut dp_curr = dp_prev.clone();
        for left in (0..m).rev() {
            for right in (0..m - left).rev() {
                let multiplier = multipliers[left + right];
                dp_curr[right] = (dp_prev[right] + multiplier * nums[left])
                    .max(dp_curr[right + 1] + multiplier * nums[n - right - 1]);
            }
            std::mem::swap(&mut dp_prev, &mut dp_curr);
        }
        dp_prev[0]
    }
}
```

**Top-Down HashMap Solution**

```
use std::collections::HashMap;

impl Solution {
    fn dp(nums: &[i32], multipliers: &[i32], left: usize, right: usize, memo: &mut HashMap<(usize, usize), i32>) -> i32 {
        let (n, m) = (nums.len(), multipliers.len());

        if left + right == m {
            0
        } else if let Some(additional_score) = memo.get(&(left, right)) {
            *additional_score
        } else {
            let rez = (nums[left] * multipliers[left + right] + Self::dp(nums, multipliers, left + 1, right, memo))
                .max(nums[n - right - 1] * multipliers[left + right] + Self::dp(nums, multipliers, left, right + 1, memo));
            memo.insert((left, right), rez);
            rez
        }
    }

    pub fn maximum_score(nums: Vec<i32>, multipliers: Vec<i32>) -> i32 {
        Self::dp(&nums, &multipliers, 0, 0, &mut HashMap::new())
    }
}
```

**Top-Down 2D Table Solution**

```
impl Solution {
    fn dp(nums: &[i32], multipliers: &[i32], left: usize, right: usize, memo: &mut [Vec<Option<i32>>]) -> i32 {
        let (n, m) = (nums.len(), multipliers.len());

        if left + right == m {
            0
        } else if let Some(additional_score) = memo[left][right] {
            additional_score
        } else {
            let rez = (nums[left] * multipliers[left + right] + Self::dp(nums, multipliers, left + 1, right, memo))
                .max(nums[n - right - 1] * multipliers[left + right] + Self::dp(nums, multipliers, left, right + 1, memo));
            memo[left][right] = Some(rez);
            rez
        }
    }

    pub fn maximum_score(nums: Vec<i32>, multipliers: Vec<i32>) -> i32 {
        Self::dp(&nums, &multipliers, 0, 0, &mut vec![vec![None; multipliers.len()]; multipliers.len()])
    }
}
```