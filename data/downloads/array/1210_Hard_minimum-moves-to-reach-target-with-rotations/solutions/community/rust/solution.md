# Rust - - 12 ms Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/5949387/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/5949387/)

---


# Code
```rust []
use std::collections::{HashMap, VecDeque};

impl Solution {
    pub fn minimum_moves(grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len() as i32;
        let mut moves = 0;
        let mut visited = HashMap::new();
        let mut queue = VecDeque::new();

        // Initialize with starting position (horizontal, tail at (0,0), head at (0,1))
        queue.push_back((0, (0, 1)));
        visited.insert((0, (0, 1)), true);

        while !queue.is_empty() {
            let level_size = queue.len();

            for _ in 0..level_size {
                let (position, (x, y)) = queue.pop_front().unwrap();

                // Check if we've reached the target
                if x == n - 1 && y == n - 1 && position == 0 {
                    return moves;
                }

                if position == 0 { // Horizontal position
                    // Move right
                    if y + 1 < n && grid[x as usize][y as usize + 1] == 0 && 
                       !visited.contains_key(&(0, (x, y + 1))) {
                        queue.push_back((0, (x, y + 1)));
                        visited.insert((0, (x, y + 1)), true);
                    }

                    // Move down
                    if x + 1 < n && grid[x as usize + 1][y as usize] == 0 && 
                       grid[x as usize + 1][y as usize - 1] == 0 && 
                       !visited.contains_key(&(0, (x + 1, y))) {
                        queue.push_back((0, (x + 1, y)));
                        visited.insert((0, (x + 1, y)), true);
                    }

                    // Rotate clockwise
                    if x + 1 < n && grid[x as usize + 1][y as usize] == 0 && 
                       grid[x as usize + 1][y as usize - 1] == 0 && 
                       !visited.contains_key(&(1, (x + 1, y - 1))) {
                        queue.push_back((1, (x + 1, y - 1)));
                        visited.insert((1, (x + 1, y - 1)), true);
                    }
                } else { // Vertical position
                    // Move down
                    if x + 1 < n && grid[x as usize + 1][y as usize] == 0 && 
                       !visited.contains_key(&(1, (x + 1, y))) {
                        queue.push_back((1, (x + 1, y)));
                        visited.insert((1, (x + 1, y)), true);
                    }

                    // Move right
                    if y + 1 < n && grid[x as usize][y as usize + 1] == 0 && 
                       grid[x as usize - 1][y as usize + 1] == 0 && 
                       !visited.contains_key(&(1, (x, y + 1))) {
                        queue.push_back((1, (x, y + 1)));
                        visited.insert((1, (x, y + 1)), true);
                    }

                    // Rotate counter-clockwise
                    if y + 1 < n && grid[x as usize][y as usize + 1] == 0 && 
                       grid[x as usize - 1][y as usize + 1] == 0 && 
                       !visited.contains_key(&(0, (x - 1, y + 1))) {
                        queue.push_back((0, (x - 1, y + 1)));
                        visited.insert((0, (x - 1, y + 1)), true);
                    }
                }
            }

            moves += 1;
        }

        -1 // No solution found
    }
}
```