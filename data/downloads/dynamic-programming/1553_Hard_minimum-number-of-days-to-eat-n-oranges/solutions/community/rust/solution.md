# Rust dp recursion

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4472866/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4472866/)

---

```
use std::collections::HashMap;

impl Solution {
    pub fn min_days(n: i32) -> i32 {
        fn dp(n: i32, memo: &mut HashMap<i32, i32>) -> i32 {
            if n <= 1 {
                return n;
            }
            if memo.contains_key(&n) {
                return memo[&n];
            }
            let res = 1 + std::cmp::min(n % 2 + dp(n / 2, memo), n % 3 + dp(n / 3, memo));
            memo.insert(n, res);
            res
        }
        dp(n, &mut HashMap::new())
    }
}
```