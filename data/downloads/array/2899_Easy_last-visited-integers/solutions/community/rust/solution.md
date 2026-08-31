# Rust | 0ms | Short Solution

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/6058105/](https://leetcode.com/problems/last-visited-integers/solutions/6058105/)

---

# Code
```rust []
impl Solution {
    pub fn last_visited_integers(nums: Vec<i32>) -> Vec<i32> {
        let (mut seen, mut k) = (std::collections::VecDeque::with_capacity(100), 0);
        nums.into_iter().fold(Vec::with_capacity(100), |mut acc, num| {
            if num.is_positive() {
                seen.push_front(num);
                k = 0;
            } else {
                acc.push(seen.get(k).map_or(-1, |v| *v));
                k += 1;
            }
            acc
        })
    }
}
```