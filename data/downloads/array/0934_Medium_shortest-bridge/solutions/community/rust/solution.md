# Rust beats 100%

**Author:** suikalala
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/2984554/](https://leetcode.com/problems/shortest-bridge/solutions/2984554/)

---

# Intuition
1. mark one island, change all points of the island to 2
2. use bfs extend the marked island until we find the other island
    we can use queue to store the marked island points with level 1. If the point is 1, meaning we have found the shortest bridge and we just return the level. Every time we search the four directions of each point, there are three conditions
    (1) if we find a 2, we can directly skip it, since we aleady stored it in the queue
    (2) if we find a 0, we can change it to 2 meaning we extend the marked island and we also need to up the level
    (3) if we find a 1, we just stored is in the queue
Notes: there's some tricks here, no matter we find 1 or 0 around 2, we change the value to 2 - value, since for 0 is 2, for 1 is 1 (no change). Also, we up the level for these two cases. So when we find 1, we should return level - 1


# Approach
BFS

# Code
```
impl Solution {
    pub fn shortest_bridge(mut grid: Vec<Vec<i32>>) -> i32 {
        // mark one island
        'outer: for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] == 1 {
                    Self::mark(&mut grid, i as i32, j as i32);
                    break 'outer;
                }
            }
        }

        // bfs from marked island until find the other land
        let mut queue = std::collections::VecDeque::new();
        for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] == 2 {
                    queue.push_back((i, j, 0 as i32));
                }
            }
        }

        while !queue.is_empty() {
            let (x, y, level) = queue.pop_front().unwrap();
            if grid[x][y] == 1 {
                return level - 1;
            }

            if x > 0 && grid[x - 1][y] != 2 {
                grid[x - 1][y] = 2 - grid[x - 1][y];
                queue.push_back((x - 1, y, level + 1));
            }

            if x + 1 < grid.len() && grid[x + 1][y] != 2 {
                grid[x + 1][y] = 2 - grid[x + 1][y];
                queue.push_back((x + 1, y, level + 1));
            }

            if y > 0 && grid[x][y - 1] != 2 {
                grid[x][y - 1] = 2 - grid[x][y - 1];
                queue.push_back((x, y - 1, level + 1));
            }

            if y + 1 < grid[0].len() && grid[x][y + 1] != 2 {
                grid[x][y + 1] = 2 - grid[x][y + 1];
                queue.push_back((x, y + 1, level + 1));
            }
        }
        unreachable!()
    }

    fn mark(grid: &mut Vec<Vec<i32>>, x: i32, y: i32) {
        if !(x >= 0 && x < grid.len() as i32 && y >= 0 && y < grid[0].len() as i32) {
            return;
        }

        let (x, y) = (x as usize, y as usize);
        if grid[x][y] != 1 {
            return;
        }
        grid[x][y] = 2;

        Self::mark(grid, x as i32 - 1, y as i32);
        Self::mark(grid, x as i32 + 1, y as i32);
        Self::mark(grid, x as i32, y as i32 - 1);
        Self::mark(grid, x as i32, y as i32 + 1);
    }
}
```