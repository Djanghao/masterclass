# rust solution

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/3097879/](https://leetcode.com/problems/confusing-number-ii/solutions/3097879/)

---



```
use std::collections::HashMap;

impl Solution {
    pub fn confusing_number_ii(n: i32) -> i32 {
        let mp = HashMap::from([(0, 0), (1, 1), (6, 9), (8, 8), (9, 6)]);
        Self::dfs(0, 0, 1, n as i64, &mp) as i32
    }

    fn dfs(num: i64, rotation: i64, digit: i64, n: i64, mp: &HashMap<i64, i64>) -> i64 {
        let mut cnt = 0;
        if num != rotation {
            cnt += 1;
        }
        for (&d, &v) in mp.iter() {
            if d == 0 && num == 0 {
                continue;
            }
            if num * 10 + d <= n {
                cnt += Self::dfs(num * 10 + d, v * digit + rotation, digit * 10, n, mp);
            }
        }
        cnt
    }
}
```