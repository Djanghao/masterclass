# Rust solution

**Author:** sugyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/924155/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/924155/)

---

```rust
impl Solution {
    pub fn min_cost_to_move_chips(position: Vec<i32>) -> i32 {
        let odd = position.iter().filter(|&p| p % 2 == 1).count();
        std::cmp::min(odd, position.len() - odd) as i32
    }
}
```