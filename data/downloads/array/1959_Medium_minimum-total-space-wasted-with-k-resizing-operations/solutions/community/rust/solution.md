# Rust

**Author:** luckychacha
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/2713516/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/2713516/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 123
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 2.5
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

impl Solution {
    pub fn min_space_wasted_k_resizing(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();

        let mut total = vec![vec![-1; n]; n];
        let mut memo = vec![vec![-1; k as usize + 1]; n];

        let mut actual_space_used = 0;
        for i in 0..n {
            let mut max_value_in_i_to_j = 0;
            actual_space_used += nums[i];
            for (j, &item) in nums.iter().enumerate().skip(i) {
                max_value_in_i_to_j = max_value_in_i_to_j.max(item);
                total[i][j] = max_value_in_i_to_j * (j as i32 - i as i32 + 1);
            }
        }

        Solution::cal_min_space_used(0, k, &nums, &total, &mut memo) - actual_space_used
    }

    pub fn cal_min_space_used(
        idx: usize,
        k: i32,
        nums: &Vec<i32>,
        total: &Vec<Vec<i32>>,
        memo: &mut Vec<Vec<i32>>,
    ) -> i32 {
        let n = nums.len();
        if idx == n {
            return 0;
        }
        if k == 0 {
            return total[idx][n - 1];
        }
        if memo[idx][k as usize] != -1 {
            return memo[idx][k as usize];
        }

        let mut answer = i32::MAX;
        for i in idx..n {
            let min_space_used = Solution::cal_min_space_used(i + 1, k - 1, nums, total, memo);
            answer = answer.min(total[idx][i] + min_space_used);
        }
        memo[idx][k as usize] = answer;

        answer
    }
}
```