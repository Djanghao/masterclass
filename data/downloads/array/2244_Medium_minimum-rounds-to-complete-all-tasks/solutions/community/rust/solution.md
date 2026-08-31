# 1000 IQ solution

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/3133221/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/3133221/)

---

So long as difficulty d occurs more than once, all tasks of that difficulty can be completed in at best `ceil(frequency of d / 3)` operations.
Think about it.:)
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn minimum_rounds(tasks: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut ans = 0;

        for task in tasks {
            let val = map.get_mut(&task);

            if let Some(v) = val {
                *v += 1;
            } else {
                map.insert(task, 1);
            }
        }

        for count in map.into_values() {
            if count == 1 {
                return -1;
            }
            ans += (count + 2) / 3;
        }

        ans
    }
}

```