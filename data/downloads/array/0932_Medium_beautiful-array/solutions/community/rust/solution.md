# Rust solution

**Author:** sugyan
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/1368499/](https://leetcode.com/problems/beautiful-array/solutions/1368499/)

---

```rust
impl Solution {
    pub fn beautiful_array(n: i32) -> Vec<i32> {
        let mut answer = Vec::with_capacity(n as usize);
        answer.push(1);
        while answer.len() < n as usize {
            answer = answer
                .iter()
                .map(|m| m * 2 - 1)
                .chain(answer.iter().map(|m| m * 2))
                .filter(|&m| m <= n)
                .collect();
        }
        answer
    }
}
```