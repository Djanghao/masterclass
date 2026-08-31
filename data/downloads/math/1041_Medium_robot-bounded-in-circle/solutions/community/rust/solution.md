# Rust solution

**Author:** sugyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/850699/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/850699/)

---

```rust
impl Solution {
    pub fn is_robot_bounded(instructions: String) -> bool {
        let mut d = (0, 1);
        let mut p = (0, 0);
        for c in instructions.chars() {
            match c {
                'G' => p = (p.0 + d.0, p.1 + d.1),
                'L' => d = (-d.1, d.0),
                'R' => d = (d.1, -d.0),
                _ => {}
            }
        }
        p == (0, 0) || d != (0, 1)
    }
}
```