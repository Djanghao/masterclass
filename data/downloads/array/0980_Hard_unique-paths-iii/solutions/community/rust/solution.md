# Rust: 0ms - DFS + Back-tracking

**Author:** seandewar
**Votes:** 3
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/1131802/](https://leetcode.com/problems/unique-paths-iii/solutions/1131802/)

---

```
impl Solution {
    pub fn unique_paths_iii(mut grid: Vec<Vec<i32>>) -> i32 {
        let (start_x, start_y) = (0..grid.len())
            .flat_map(|y| (0..grid[0].len()).map(move |x| (x, y)))
            .find(|&(x, y)| grid[y][x] == 1)
            .expect("grid doesn't have a starting square!");
        let num_empty = grid
            .iter()
            .flat_map(|r| r.iter().filter(|&&c| c != -1))
            .count();

        Self::dfs(&mut grid, start_x, start_y, num_empty - 1) as _
    }

    fn dfs(grid: &mut Vec<Vec<i32>>, x: usize, y: usize, num_empty_unvisited: usize) -> usize {
        if x >= grid[0].len() || y >= grid.len() {
            return 0;
        }
        match grid[y][x] {
            0 | 1 => {
                grid[y][x] = -1; // mark as visited
                let num_valid_paths_from_here = [(0, 1), (1, 0), (0, -1), (-1, 0)]
                    .iter()
                    .map(|&(dx, dy)| ((x as isize + dx) as _, (y as isize + dy) as _))
                    .map(|(nx, ny)| Self::dfs(grid, nx, ny, num_empty_unvisited - 1))
                    .sum();
                grid[y][x] = 0; // backtrack and un-mark

                num_valid_paths_from_here
            }
            2 if num_empty_unvisited == 0 => 1,
            _ => 0,
        }
    }
}
```