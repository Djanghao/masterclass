# Rust | Simple & Fast | HashSet | O(n)

**Author:** jddxf
**Votes:** 13
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/1199570/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/1199570/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let num_set: HashSet<_> = nums.into_iter().collect();
        let mut ans = 0;
        for &num in &num_set {
            if !num_set.contains(&(num - 1)) {
                let count = (num..).take_while(|x| num_set.contains(x)).count();
                ans = ans.max(count);
            }
        }
        ans as i32
    }
}
```