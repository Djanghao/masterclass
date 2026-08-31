# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5026446/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5026446/)

---


```
impl Solution {
    pub fn minimum_value_sum(nums: Vec<i32>, and_values: Vec<i32>) -> i32 {
        let mut dp = vec![vec![std::collections::HashMap::new(); 11]; nums.len() + 2];
        let n = Solution::f(&mut dp, &nums, &and_values, 0, 0, (1 << 19) - 1);
        if n == 1_000_000_000 {
            -1
        } else {
            n
        }
    }

    fn f(
        dp: &mut Vec<Vec<std::collections::HashMap<i32, i32>>>,
        nums: &Vec<i32>,
        and_values: &Vec<i32>,
        i: usize,
        array_no: usize,
        ans: i32,
    ) -> i32 {
        if i >= nums.len() {
            if array_no == and_values.len() {
                return 0;
            } else {
                return 1_000_000_000;
            }
        }

        if array_no == and_values.len() {
            return 1_000_000_000;
        }

        if dp[i][array_no].contains_key(&ans) {
            return dp[i][array_no][&ans];
        }

        let mut r1 = 1_000_000_000;
        if ans & nums[i] == and_values[array_no] {
            r1 = nums[i] + Solution::f(dp, nums, and_values, i + 1, array_no + 1, (1 << 19) - 1);
        }
        let r2 = Solution::f(dp, nums, and_values, i + 1, array_no, ans & nums[i]);
        dp[i][array_no].insert(ans, r1.min(r2));
        r1.min(r2)
    }
}
```