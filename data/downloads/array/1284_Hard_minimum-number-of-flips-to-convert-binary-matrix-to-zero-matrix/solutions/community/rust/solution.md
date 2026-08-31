# Rust ---- 0 ms Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/5953875/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/5953875/)

---



# Code
```rust []
use std::collections::{HashSet, VecDeque};

impl Solution {
    pub fn min_flips(mat: Vec<Vec<i32>>) -> i32 {
        let m = mat.len();
        let n = mat[0].len();
        
        // Convert matrix to a single number for easier state tracking
        let mut start_state = 0;
        for i in 0..m {
            for j in 0..n {
                if mat[i][j] == 1 {
                    start_state |= 1 << (i * n + j);
                }
            }
        }
        
        // If already zero matrix, return 0
        if start_state == 0 {
            return 0;
        }
        
        // BFS queue stores (state, steps)
        let mut queue = VecDeque::new();
        let mut visited = HashSet::new();
        
        queue.push_back((start_state, 0));
        visited.insert(start_state);
        
        // Possible neighbor offsets (up, right, down, left)
        let directions = [(0, 1), (1, 0), (0, -1), (-1, 0)];
        
        while let Some((state, steps)) = queue.pop_front() {
            // Try flipping each cell and its neighbors
            for i in 0..m {
                for j in 0..n {
                    let mut new_state = state;
                    
                    // Flip center cell
                    new_state ^= 1 << (i * n + j);
                    
                    // Flip neighbors
                    for (di, dj) in &directions {
                        let ni = i as i32 + di;
                        let nj = j as i32 + dj;
                        
                        if ni >= 0 && ni < m as i32 && nj >= 0 && nj < n as i32 {
                            new_state ^= 1 << (ni as usize * n + nj as usize);
                        }
                    }
                    
                    // If we reached zero matrix, return steps + 1
                    if new_state == 0 {
                        return steps + 1;
                    }
                    
                    // If this is a new state, add it to queue
                    if visited.insert(new_state) {
                        queue.push_back((new_state, steps + 1));
                    }
                }
            }
        }
        
        -1 // Impossible to reach zero matrix
    }
}
```