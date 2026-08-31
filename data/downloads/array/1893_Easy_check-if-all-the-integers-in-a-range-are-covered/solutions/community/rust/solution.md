# Rust | 0ms | 1-liner

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5821828/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5821828/)

---

# Code
```rust []
impl Solution {
    pub fn is_covered(ranges: Vec<Vec<i32>>, left: i32, right: i32) -> bool {
        (left..=right).all(|num| ranges.iter().any(|v| (v[0]..=v[1]).contains(&num)))
    }
}
```