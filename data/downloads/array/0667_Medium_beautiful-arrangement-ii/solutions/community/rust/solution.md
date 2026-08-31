# Rust: 0ms - Short O(n)

**Author:** seandewar
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1155675/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1155675/)

---

```rust
impl Solution {
    pub fn construct_array(n: i32, k: i32) -> Vec<i32> {
        (1..=k + 1)
            .rev()
            .scan((k + 2, -1), |s, x| {
                s.0 += x * s.1;
                s.1 *= -1;
                Some(s.0)
            })
            .chain(k + 2..=n)
            .collect()
    }
}
```