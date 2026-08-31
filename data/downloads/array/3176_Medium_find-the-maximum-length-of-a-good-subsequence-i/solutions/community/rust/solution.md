# Dynamic Programming

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5332299/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5332299/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic Programming

# Complexity
- Time complexity: $O(n^2 \\cdot k)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n \\cdot k)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $nums$ array

# Code
```
impl Solution {
    pub fn maximum_length(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let n = nums.len();        

        let mut dp = vec![vec![-1; k + 1]; n];

        let mut r = 0;

        for i in 0..n {
            r = r.max(
                Self::dfs(i, 0, k, n, &nums, &mut dp)
            );
        }

        r
    }

    pub fn dfs(i: usize, j: usize, k: usize, n: usize, v: &Vec<i32>, dp: &mut Vec<Vec<i32>>) -> i32 {
        if dp[i][j] >= 0 {
            return dp[i][j];
        }

        let mut r = 1;

        if i < n - 1 {
            if v[i+1] == v[i] {
                r = r.max(1 + Self::dfs(i + 1, j, k, n, v, dp));
            } else {
                for l in i+1..n {
                    if v[l] == v[i] {
                        r = r.max(1 + Self::dfs(l, j, k, n, v, dp));
                        break;
                    } 

                    if j < k {
                        r = r.max(1 + Self::dfs(l, j + 1, k, n, v, dp));
                    }
                }
            }
        }

        dp[i][j] = r;

        r
    }
}
```