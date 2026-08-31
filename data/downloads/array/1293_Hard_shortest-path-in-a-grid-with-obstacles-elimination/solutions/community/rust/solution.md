# [Rust] Dijkstra

**Author:** keep_of_kalessin
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/2758601/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/2758601/)

---

```rust
use std::cmp::Reverse;
use std::collections::BinaryHeap;

const NO_PATH: i32 = -1;
const DIR: [(isize, isize); 4] = [(-1, 0), (0, -1), (0, 1), (1, 0)];

pub fn shortest_path(grid: Vec<Vec<i32>>, k: i32) -> i32 {
    assert!(k >= 1);

    let rows = grid.len();
    assert!(rows >= 1);

    let cols = grid[0].len();
    assert!(cols >= 1);

    let mut visited = vec![vec![-1; cols]; rows];
    visited[0][0] = k;

    let mut pq = BinaryHeap::new();
    pq.push((Reverse(0), k, 0, 0));

    while let Some((Reverse(path), k, r, c)) = pq.pop() {
        if r == rows - 1 && c == cols - 1 {
            return path;
        }

        for (dr, dc) in DIR {
            let rx = r as isize + dr;
            let cx = c as isize + dc;
            if rx < 0 || cx < 0 {
                continue;
            }

            let rx = rx as usize;
            let cx = cx as usize;
            if rx >= rows || cx >= cols {
                continue;
            }

            let next_k = k - grid[rx][cx];
            if next_k < 0 {
                continue;
            }

            if visited[rx][cx] >= next_k {
                continue;
            }
            visited[rx][cx] = next_k;

            pq.push((Reverse(path + 1), next_k, rx, cx));
        }
    }

    NO_PATH
}
```