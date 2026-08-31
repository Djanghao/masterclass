# why is this a question

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5594475/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5594475/)

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
impl Solution {
    pub fn find_delayed_arrival_time(arrival_time: i32, delayed_time: i32) -> i32 {
        (arrival_time+delayed_time) % 24
    }
}
```