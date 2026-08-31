# Rust with sliding window & monotonic queue

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/5624911/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/5624911/)

---

# Intuition
Finding the **maximum** number of **consecutive** robots => sliding window.

Keeping track of the **maximum** charge time **inside a sliding window** => monotonic queue.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn maximum_robots(charge_times: Vec<i32>, running_costs: Vec<i32>, budget: i64) -> i32 {
        let mut lo = 0;
        let mut run = 0;
        let mut charge = VecDeque::<(i64, usize)>::new();
        let mut ans = 0usize;
        for hi in 0..charge_times.len() {
            run += running_costs[hi] as i64;
            while !charge.is_empty()
            && charge.back().unwrap().0 <= charge_times[hi] as i64 {
                charge.pop_back();
            }
            charge.push_back((charge_times[hi] as i64, hi));

            while !charge.is_empty()
            && charge.front().unwrap().0 + (hi - lo + 1) as i64 * run > budget {
                run -= running_costs[lo] as i64;
                if charge.front().unwrap().1 == lo {
                    charge.pop_front();
                }
                lo += 1;
            }
            ans = ans.max(hi - lo + 1);
        }
        ans as i32
    }
}
```