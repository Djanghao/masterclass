# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/3416123/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/3416123/)

---

# Code
```
impl Solution {
    pub fn shortest_distance(mut grid: Vec<Vec<i32>>) -> i32 {
        use std::collections::VecDeque;
        const DIR: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
        let mut total = vec![vec![0; grid[0].len()]; grid.len()];
        let mut level = 0;
        let mut min_dist = i32::MAX;
        for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] == 1 {
                    min_dist = i32::MAX;
                    let mut steps = 0;
                    let mut queue = VecDeque::new();
                    queue.push_back((i as i32, j as i32));
                    while !queue.is_empty() {
                        steps += 1;
                        for _ in 0..queue.len() {
                            let (x, y) = queue.pop_front().unwrap();
                            for (nx, ny) in DIR {
                                let (ux, uy) = (x + nx, y + ny);
                                if ux >= 0
                                    && ux < grid.len() as i32
                                    && uy >= 0
                                    && uy < grid[0].len() as i32
                                    && grid[ux as usize][uy as usize] == level
                                {
                                    total[ux as usize][uy as usize] += steps;
                                    grid[ux as usize][uy as usize] -= 1;
                                    min_dist = min_dist.min(total[ux as usize][uy as usize]);

                                    queue.push_back((ux, uy));
                                }
                            }
                        }
                    }
                    level -= 1;
                }
            }
        }
        if min_dist == i32::MAX {
            -1
        } else {
            min_dist
        }        
    }
}
```