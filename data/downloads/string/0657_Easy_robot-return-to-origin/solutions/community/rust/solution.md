# Rust ( fold )

**Author:** dedmonds
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/2705133/](https://leetcode.com/problems/robot-return-to-origin/solutions/2705133/)

---

```
impl Solution {
    pub fn judge_circle(moves: String) -> bool {
        (0, 0) == moves.chars()
            .fold((0, 0), |(x, y), c| {
                match c {
                    'U' => (x, y + 1),
                    'D' => (x, y - 1),
                    'R' => (x + 1, y),
                    'L' => (x - 1, y),
                    _ => (x, y),
                }
             })
    }
}
```