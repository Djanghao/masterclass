# O(n), one replacement per cell

**Author:** edwgiz
**Votes:** 1
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/4383859/](https://leetcode.com/problems/shift-2d-grid/solutions/4383859/)

---

# Intuition
Unlike reverse approach it should be possible performing one replacement per cell

# Approach
The main ideas behind this algorithm:
1. treating the matrix as a single array composed of its concatenated rows
2. performing circular swaps by jumping to the $$i+k$$ element and replacing its value with the previous one until all cells are visited

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1), via in-place swaps

# Code
```
use std::mem::replace;
impl Solution {
    pub fn shift_grid(mut grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    let rows = grid.len();
    let cols = grid[0].len();
    let len = rows * cols;
    let k = k as usize % len;
    let mut i = 0;
    'outer: for offset in 0..k {
        let mut j = offset;
        let mut v = grid[j / cols][j % cols];
        loop {
            j += k;
            if j >= len {
                j -= len;
            }
            let rj = j / cols;
            let cj = j % cols;
            v = replace(&mut grid[rj][cj], v);
            i += 1;
            if i == len {
                break 'outer;
            }
            if j == offset {
                break;
            }
        }
    }
    return grid;
    }
}
```