# Rust Solution: 0 ms

**Author:** ajesh-mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2912667/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2912667/)

---

# Code
```
use std::cmp::max;

impl Solution {
    pub fn delete_greatest_value(grid: Vec<Vec<i32>>) -> i32 {
        let len = grid[0].len();
        let mut sorted_grid = vec![];
        let mut result = 0;
        for mut row in grid {
            row.sort_by(|a, b| b.cmp(a));
            sorted_grid.push(row);
        }
        for i in 0..len {
            let mut greatest = i32::MIN;
            for row in &sorted_grid {
                greatest = max(greatest, row[i]);
            }
            result += greatest;
        }
        result
    }
}
```