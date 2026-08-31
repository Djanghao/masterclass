# Rust: O(n) Time, O(1) Space - Short Solution Using Rust's Iterators

**Author:** seandewar
**Votes:** 6
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/1184109/](https://leetcode.com/problems/valid-mountain-array/solutions/1184109/)

---

```rust
impl Solution {
    pub fn valid_mountain_array(arr: Vec<i32>) -> bool {
        (1..arr.len())
            .find(|&i| arr[i - 1] >= arr[i])
            .map_or(false, |j| j > 1 && (j..arr.len()).all(|j| arr[j - 1] > arr[j]))
    }
}
```