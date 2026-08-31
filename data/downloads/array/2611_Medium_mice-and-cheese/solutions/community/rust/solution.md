# Rust 15ms 🔥 3.10Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/5267290/](https://leetcode.com/problems/mice-and-cheese/solutions/5267290/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn mice_and_cheese(reward1: Vec<i32>, reward2: Vec<i32>, k: i32) -> i32 {
        (0..k)
        .fold((
            reward2.iter().sum::<i32>(),
            reward1.into_iter()
            .zip(reward2.into_iter())
            .map(|(x, y)| x-y)
            .collect::<BinaryHeap<i32>>()
        ),
        |(mut sum, mut v), _| {
            sum += v.pop().unwrap_or(0);
            (sum, v)
        }).0
    }
}
```