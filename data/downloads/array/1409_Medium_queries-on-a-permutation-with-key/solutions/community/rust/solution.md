# Rust: 0ms - VecDeque Solution

**Author:** seandewar
**Votes:** 1
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1255997/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1255997/)

---

```rust
impl Solution {
    pub fn process_queries(queries: Vec<i32>, m: i32) -> Vec<i32> {
        let mut p: std::collections::VecDeque<_> = (1..=m).collect();
        queries
            .iter()
            .map(|q| {
                let i = p.iter().position(|x| x == q).unwrap();
                let x = p.remove(i).unwrap();
                p.push_front(x);
                i as _
            })
            .collect()
    }
}
```