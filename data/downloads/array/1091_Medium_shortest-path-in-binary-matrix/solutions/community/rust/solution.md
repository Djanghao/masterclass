# [Rust] A*

**Author:** keep_of_kalessin
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/1698121/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/1698121/)

---

```rust
use std::cmp::Reverse;
use std::collections::BinaryHeap;

const N: &[(isize, isize); 8] = &[
    (-1, -1),
    (-1, 0),
    (-1, 1),
    (0, -1),
    (0, 1),
    (1, -1),
    (1, 0),
    (1, 1),
];

pub fn shortest_path_binary_matrix(mut grid: Vec<Vec<i32>>) -> i32 {
    if grid[0][0] != 0 {
        return -1;
    }

    let mut pq = BinaryHeap::new();
    pq.push((Reverse((heuristic(&grid, 0, 0) + 1, 1i32)), (0, 0)));

    while let Some((Reverse((_, s)), (r, c))) = pq.pop() {
        if grid[r][c] != 0 {
            continue;
        }
        grid[r][c] = 255;

        if r == grid.len() - 1 && c == grid[0].len() - 1 {
            return s;
        }

        for (dr, dc) in N.iter().copied() {
            let rr = (r as isize) + dr;
            if rr < 0 || rr as usize >= grid.len() {
                continue;
            }

            let cc = (c as isize) + dc;
            if cc < 0 || cc as usize >= grid[0].len() {
                continue;
            }

            let rr = rr as usize;
            let cc = cc as usize;
            if grid[rr][cc] != 0 {
                continue;
            }

            let m = heuristic(&grid, rr, cc);
            let s = s + 1;
            pq.push((Reverse((m + s, s)), (rr, cc)));
        }
    }

    -1
}

fn heuristic(grid: &Vec<Vec<i32>>, r: usize, c: usize) -> i32 {
    const D1: isize = 1;
    const D2: isize = 1;

    let dx = (grid.len() - r - 1) as isize;
    let dy = (grid[0].len() - c - 1) as isize;

    (D1 * (dx + dy) + (D2 - 2 * D1) * dx.min(dy)) as i32
}

```