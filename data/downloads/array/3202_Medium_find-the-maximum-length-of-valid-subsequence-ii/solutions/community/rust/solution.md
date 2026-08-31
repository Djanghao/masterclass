# 40 ms Beats 42.10% (rust)

**Author:** K11E3R
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5456702/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5456702/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::max;

impl Solution {
    pub fn maximum_length(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut f = vec![vec![0; k]; k];
        let mut ans = 0;

        for &num in nums.iter() {
            let x = (num % k as i32) as usize;
            for j in 0..k {
                let y = (j + k - x) % k;
                f[x][y] = f[y][x] + 1;
                ans = max(ans, f[x][y]);
            }
        }

        ans
    }
}

```