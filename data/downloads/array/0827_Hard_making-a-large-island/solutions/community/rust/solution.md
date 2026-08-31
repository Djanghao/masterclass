# 100% in runtime and memory, Rust solution

**Author:** abhikjain360
**Votes:** 1
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/1379883/](https://leetcode.com/problems/making-a-large-island/solutions/1379883/)

---

```rust
impl Solution {
    pub fn largest_island(mut grid: Vec<Vec<i32>>) -> i32 {
        use std::collections::HashMap;

        fn neighbours(row: i32, col: i32) -> [(i32, i32); 4] {
            [
                (row + 1, col),
                (row, col + 1),
                (row - 1, col),
                (row, col - 1),
            ]
        }

        fn dfs(grid: &mut Vec<Vec<i32>>, row: i32, col: i32, index: i32) -> i32 {
            let mut area = 1;
            grid[row as usize][col as usize] = index;

            for (neighbour_row, neighbour_col) in neighbours(row, col).iter() {
                if *neighbour_col >= 0
                    && *neighbour_col < grid[row as usize].len() as i32
                    && *neighbour_row >= 0
                    && *neighbour_row < grid.len() as i32
                    && grid[*neighbour_row as usize][*neighbour_col as usize] == 1
                {
                    area += dfs(grid, *neighbour_row, *neighbour_col, index);
                }
            }

            area
        }

        let mut areas = HashMap::new();
        let mut index = 2;
        for row in 0..grid.len() {
            for col in 0..grid[row].len() {
                if grid[row][col] == 1 {
                    areas.insert(index, dfs(&mut grid, row as i32, col as i32, index));
                    index += 1;
                }
            }
        }

        let mut max_area = match areas.len() {
            0 => return 1,
            1 => *areas.values().next().unwrap(),
            _ => *areas.values().max().unwrap(),
        };

        for row in 0..grid.len() {
            for col in 0..grid[row].len() {
                if grid[row][col] == 0 {
                    let mut area = 1;
                    let mut covered_index = Vec::new();
                    for (neighbour_row, neighbour_col) in neighbours(row as i32, col as i32).iter()
                    {
                        if *neighbour_col >= 0
                            && *neighbour_col < grid[row].len() as i32
                            && *neighbour_row >= 0
                            && *neighbour_row < grid.len() as i32
                            && grid[*neighbour_row as usize][*neighbour_col as usize] > 0
                            && !covered_index
                                .contains(&grid[*neighbour_row as usize][*neighbour_col as usize])
                        {
                            area += areas
                                .get(&grid[*neighbour_row as usize][*neighbour_col as usize])
                                .unwrap();
                            covered_index
                                .push(grid[*neighbour_row as usize][*neighbour_col as usize])
                        }
                    }
                    max_area = area.max(max_area);
                }
            }
        }

        max_area

    }
}
```