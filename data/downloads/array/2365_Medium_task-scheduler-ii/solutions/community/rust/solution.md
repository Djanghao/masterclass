# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/4595582/](https://leetcode.com/problems/task-scheduler-ii/solutions/4595582/)

---

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn task_scheduler_ii(tasks: Vec<i32>, space: i32) -> i64 {
    let mut map = HashMap::new();
    let space = space as i64;
    let mut now = 0;
    let mut i = 0;
    let n = tasks.len();

    while i < n {
      now += 1 as i64;
      let v = tasks[i] as i64;

      if let Some(cv) = map.get_mut(&v) {
        let need = *cv + space;
        if need >= now {
          now += need - now + 1;
        }
        *cv = now;
      } else {
        map.insert(v, now);
      }
      i += 1;
    }

    now
  }
}
```