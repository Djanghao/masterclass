# Rust | 0ms | 1-liner

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5788490/](https://leetcode.com/problems/find-the-peaks/solutions/5788490/)

---

# Code
```rust []
impl Solution {
    pub fn find_peaks(mountain: Vec<i32>) -> Vec<i32> {
        mountain
            .windows(3)
            .enumerate()
            .filter_map(|(i, win)| (win[1] > win[0] && win[1] > win[2]).then_some((i as i32) + 1))
            .collect()
    }
}
```