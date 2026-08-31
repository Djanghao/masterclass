# BFS on stopped ball positions

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze/solutions/3911118/](https://leetcode.com/problems/the-maze/solutions/3911118/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let a BFS state be a (i, j) position in a maze where the ball is stopped (i.e., it hit a wall or at the start). Then at each such position, we check if we are at the destination or scan for further wall hits in four directions.

# Complexity
- Time complexity: $O(M*N*(M+N))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(M*N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn has_path(maze: Vec<Vec<i32>>, start: Vec<i32>, destination: Vec<i32>) -> bool {
        let (m, n) = (maze.len(), maze[0].len());
        let mut seen = vec![vec![false; n]; m];
        let mut q = VecDeque::from([(start[0], start[1])]);
        seen[start[0] as usize][start[1] as usize] = true;

        while !q.is_empty() {
            let (i, j) = q.pop_front().unwrap();
            if (i, j) == (destination[0], destination[1]) { return true }

            for (di, dj) in [(1, 0), (-1, 0), (0, 1), (0, -1)] {
                let (mut i, mut j) = (i, j);
                loop {
                    let (ni, nj) = (i + di, j + dj);
                    if ni < 0 || nj < 0 || ni as usize >= m || nj as usize >= n || maze[ni as usize][nj as usize] == 1 {
                        break;
                    }
                    i = ni; j = nj;
                }
                if !seen[i as usize][j as usize] { 
                    q.push_back((i, j));
                    seen[i as usize][j as usize] = true;
                }
            }
        }
        false
    }
}
```