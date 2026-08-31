# Rust HashMap solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1171405/](https://leetcode.com/problems/brick-wall/solutions/1171405/)

---

```rust
impl Solution {
    pub fn least_bricks(wall: Vec<Vec<i32>>) -> i32 {
        wall.len() as i32
            - wall
                .iter()
                .fold(std::collections::HashMap::new(), |mut acc, row| {
                    row.iter()
                        .take(row.len() - 1)
                        .scan(0, |state, &x| {
                            *state += x;
                            Some(*state)
                        })
                        .for_each(|x| *acc.entry(x).or_default() += 1);
                    acc
                })
                .values()
                .max()
                .unwrap_or(&0)
    }
}
```