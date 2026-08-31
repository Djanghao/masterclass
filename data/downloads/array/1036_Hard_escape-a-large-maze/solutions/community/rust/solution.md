# Rust-Beats 83.33%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/5949291/](https://leetcode.com/problems/escape-a-large-maze/solutions/5949291/)

---



# Code
```rust []
use std::collections::{HashSet, VecDeque};

impl Solution {
    pub fn is_escape_possible(blocked: Vec<Vec<i32>>, source: Vec<i32>, target: Vec<i32>) -> bool {
        const MAX_AREA: i32 = 1_000_000;
        let blocked_set: HashSet<(i32, i32)> = blocked.into_iter().map(|v| (v[0], v[1])).collect();
        
        Self::bfs(&blocked_set, &source, &target, MAX_AREA) && Self::bfs(&blocked_set, &target, &source, MAX_AREA)
    }

    fn bfs(blocked: &HashSet<(i32, i32)>, start: &[i32], end: &[i32], max_area: i32) -> bool {
        let mut visited = HashSet::new();
        let mut queue = VecDeque::new();
        queue.push_back((start[0], start[1]));
        visited.insert((start[0], start[1]));

        let directions = [(0, 1), (1, 0), (0, -1), (-1, 0)];
        let max_blocked_area = (blocked.len() * blocked.len()) as i32;

        while let Some((x, y)) = queue.pop_front() {
            if (visited.len() as i32) > max_blocked_area || (x == end[0] && y == end[1]) {
                return true;
            }

            for (dx, dy) in directions.iter() {
                let nx = x + dx;
                let ny = y + dy;
                if nx >= 0 && nx < max_area && ny >= 0 && ny < max_area 
                   && !blocked.contains(&(nx, ny)) && !visited.contains(&(nx, ny)) {
                    queue.push_back((nx, ny));
                    visited.insert((nx, ny));
                }
            }
        }

        false
    }
}
```