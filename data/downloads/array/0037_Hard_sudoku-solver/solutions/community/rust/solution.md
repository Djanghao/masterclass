# Not-so-fast but easy to understand Rust solution

**Author:** Boiethios
**Votes:** 4
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/300781/](https://leetcode.com/problems/sudoku-solver/solutions/300781/)

---

A simple, commented, backtracking solution:

```rust
impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        let mut board: Vec<_> = board.iter_mut().map(Vec::as_mut_slice).collect();

        solve_backtrack(board.as_mut_slice(), 0);
    }
}

/// The actual solving algorithm. Checks for each cell.
fn solve_backtrack(grid: &mut [&mut [char]], cell: usize) -> bool {
    match (cell / 9, cell % 9) {
        // Terminal condition (all the lines were checked):
        (9, _) => true,
        // The cell has already a number, check the next cell:
        (y, x) if grid[y][x] != '.' => solve_backtrack(grid, cell + 1),
        // Check for every number, and go for the next cell if the grid is valid:
        (y, x) => "123456789.".chars().any(|c| {
            grid[y][x] = c;
            c != '.' && is_grid_valid(grid, y, x) && solve_backtrack(grid, cell + 1)
        }),
    }
}

/// Checks if the grid is valid when we write a number at the position (y, x).
/// It checks in the right line, column and square.
fn is_grid_valid(grid: &mut [&mut [char]], y: usize, x: usize) -> bool {
    fn uniq(chs: impl Iterator<Item = char>, ch: char) -> bool {
        chs.filter(|&c| c == ch).count() == 1
    }

    let c = grid[y][x];
    let line = grid[y].iter().cloned();
    let column = grid.iter().map(|l| l[x]);
    let (x, y) = (x / 3 * 3, y / 3 * 3);
    let square = grid[y..y + 3].iter().flat_map(|l| &l[x..x + 3]).cloned();

    uniq(line, c) && uniq(column, c) && uniq(square, c)
}
```

Result:

```none
Runtime: 4 ms, faster than 57.89% of Rust online submissions for Sudoku Solver.
Memory Usage: 2.5 MB, less than 60.00% of Rust online submissions for Sudoku Solver.
```
