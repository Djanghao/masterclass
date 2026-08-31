# [Rust] Simple DFS

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/1536748/](https://leetcode.com/problems/number-of-closed-islands/solutions/1536748/)

---

This is essentially the same problem as [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) and  [1020. Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)


```rust
const MARKED: i32 = 2;
const LAND: i32 = 0;

pub fn closed_island(mut grid: Vec<Vec<i32>>) -> i32 {
    let grid = &mut grid;

    // mark cells connected to the border
    for col in 0..grid[0].len() {
        if grid[0][col] == LAND {
            mark_connected_cells(grid, 0, col);
        }
    }
    for col in 0..grid[grid.len() - 1].len() {
        if grid[grid.len() - 1][col] == LAND {
            mark_connected_cells(grid, grid.len() - 1, col);
        }
    }
    for row in 1..grid.len() - 1 {
        if grid[row][0] == LAND {
            mark_connected_cells(grid, row, 0);
        }

        if grid[row][grid[row].len() - 1] == LAND {
            mark_connected_cells(grid, row, grid[row].len() - 1);
        }
    }

    let mut closed_islands = 0;
    for r in 1..grid.len() - 1 {
        for c in 1..grid[r].len() - 1 {
            if grid[r][c] == LAND {
                closed_islands += 1;
                mark_connected_cells(grid, r, c);
            }
        }
    }
    closed_islands
}

fn mark_connected_cells(grid: &mut Vec<Vec<i32>>, r: usize, c: usize) {
    if grid[r][c] != LAND {
        return;
    }

    grid[r][c] = MARKED;

    if r > 0 {
        mark_connected_cells(grid, r - 1, c);
    }
    if c > 0 {
        mark_connected_cells(grid, r, c - 1);
    }
    if c < grid[r].len() - 1 {
        mark_connected_cells(grid, r, c + 1);
    }
    if r < grid.len() - 1 {
        mark_connected_cells(grid, r + 1, c);
    }
}

```
