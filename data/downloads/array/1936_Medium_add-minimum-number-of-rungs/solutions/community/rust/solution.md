# Simple O(n) Solution | Rust | Beats 100%

**Author:** Prog_Jacob
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3158297/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3158297/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
use std::cmp::max;

impl Solution {
    pub fn add_rungs(rungs: Vec<i32>, dist: i32) -> i32 {
        let (mut far, mut ans, n) = (0, 0, rungs.len());

        for i in 0..n {
            if rungs[i] - far > dist {
                ans += (rungs[i] - far - 1) / dist;
                far += rungs[i] - far - 1;
            }
 
            far = max(far, rungs[i]);
        }

        ans
    }
}
```