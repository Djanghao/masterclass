# Rust BFS

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/3843634/](https://leetcode.com/problems/minimum-knight-moves/solutions/3843634/)

---

# Code
```
impl Solution {
    pub fn min_knight_moves(x: i32, y: i32) -> i32 {
        use std::collections::{VecDeque, HashSet};

        const DIRS: [(i32, i32); 8] = [
            (1, -2),
            (1, 2),
            (2, -1),
            (2, 1),
            (-1, -2),
            (-1, 2),
            (-2, 1),
            (-2, -1),
        ];

        let mut queue = VecDeque::new();
        queue.push_back((0, 0, 0));
        let mut seen = HashSet::new();
        seen.insert((0, 0));

        while let Some((r, c, moves)) = queue.pop_front() {
            if r == x && c == y {
                return moves;
            }

            for d in &DIRS {
                let (nx, ny) = (r+d.0,c+d.1);
                if !seen.contains(&(nx,ny)) {
                    seen.insert((nx, ny));
                    queue.push_back((nx, ny, moves + 1));
                }
            }
        }

        panic!("oops")
    }
}
```