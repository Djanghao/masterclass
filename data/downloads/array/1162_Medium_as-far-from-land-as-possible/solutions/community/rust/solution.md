# Java and Rust

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3169708/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3169708/)

---

# Complexity
- Time complexity: $$O(N^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    public int maxDistance(int[][] grid) {
        int n = grid.length;
        LinkedList<int[]> q = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    q.add(new int[]{i, j});
                }
            }
        }

        int dist = -1;
        while (!q.isEmpty()) {
            int j = q.size();

            while (j-- > 0) {
                int[] p = q.poll();
                for (int[] dir: dirs) {
                    int[] np = new int[]{dir[0] + p[0], dir[1] + p[1]};
                    if (np[0] >= 0 && np[1] >= 0 && np[0] < n && np[1] < n && grid[np[0]][np[1]] == 0) {
                        grid[np[0]][np[1]] = 1;
                        q.addLast(np);
                    }
                }
            }

            dist += 1;
        }

        return dist == 0 ? -1: dist;
    }
}
```
```Rust []
use std::collections::VecDeque;
impl Solution {
    const DIRS: [[i32; 2]; 4] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    pub fn max_distance(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let mut queue = VecDeque::new();
        for i in 0..n {
            for j in 0..n {
                if grid[i][j] == 1 {
                    queue.push_back((i as i32, j as i32));
                }
            }
        }

        let mut dist = -1;
        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (x, y) = queue.pop_front().unwrap();
                for dir in Self::DIRS.iter() {
                    let x = x + dir[0];
                    let y = y + dir[1];
                    if x < 0 || y < 0 {
                        continue;
                    }
                    let (x, y) = (x as usize, y as usize);
                    if x < n && y < n && grid[x][y] == 0 {
                        grid[x][y] = 1;
                        queue.push_back((x as i32, y as i32));
                    }
                }
            }
            dist += 1;
        }

        if dist == 0 {
            -1
        } else {
            dist
        }
    }
}

```
