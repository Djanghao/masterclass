# [Rust] Binary Indexed Tree + 1D array

**Author:** night-crawler
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2065006/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2065006/)

---

```rust
use std::ops::{Add, Sub};

pub struct NumMatrix {
    tree: Vec<i32>,
    num_rows: usize,
    num_cols: usize,
}

#[inline]
fn lsb_indices(
    start: usize,
    end: usize,
    op: fn(isize, isize) -> isize,
) -> impl Iterator<Item = usize> {
    let (mut start, end) = (start as isize, end as isize);
    let range = start.min(end).max(1)..=start.max(end);

    std::iter::repeat_with(move || {
        let next = op(start, start & -start);
        std::mem::replace(&mut start, next)
    })
    .take_while(move |index| range.contains(index))
    .map(|index| index as usize)
}

impl NumMatrix {
    #[inline]
    pub fn new(matrix: Vec<Vec<i32>>) -> Self {
        let num_rows = matrix.len();
        let num_cols = matrix[0].len();

        let mut nm = Self { tree: vec![0; (num_cols + 1) * (num_rows + 1)], num_rows, num_cols };
        nm.update_from(matrix);
        nm
    }

    #[inline]
    fn update_from(&mut self, matrix: Vec<Vec<i32>>) {
        for row in 1..self.num_rows + 1 {
            for col in 1..self.num_cols + 1 {
                self.update_internal(row, col, matrix[row - 1][col - 1]);
            }
        }
    }

    #[inline]
    fn update_internal(&mut self, row: usize, col: usize, val: i32) {
        for r in lsb_indices(row, self.num_rows, isize::add) {
            for c in lsb_indices(col, self.num_cols, isize::add) {
                let index = self.transform_coords(r, c);
                self.tree[index] += val;
            }
        }
    }

    #[inline]
    fn query_internal(&self, row: usize, col: usize) -> i32 {
        let mut sum = 0;
        for r in lsb_indices(row, 0, isize::sub) {
            for c in lsb_indices(col, 0, isize::sub) {
                let index = self.transform_coords(r, c);
                sum += self.tree[index];
            }
        }
        sum
    }

    pub fn update(&mut self, row: i32, col: i32, val: i32) {
        let old_val = self.sum_region(row, col, row, col);
        let diff = val - old_val;
        self.update_internal(row as usize + 1, col as usize + 1, diff);
    }

    pub fn sum_region(&self, row1: i32, col1: i32, row2: i32, col2: i32) -> i32 {
        let (row1, col1, row2, col2) =
            (row1 as usize + 1, col1 as usize + 1, row2 as usize + 1, col2 as usize + 1);

        let bottom_right = self.query_internal(row2, col2);
        let top_left = self.query_internal(row1 - 1, col1 - 1);

        let bottom_left = self.query_internal(row2, col1 - 1);
        let top_right = self.query_internal(row1 - 1, col2);

        (bottom_right + top_left) - (bottom_left + top_right)
    }

    #[inline(always)]
    fn transform_coords(&self, row: usize, col: usize) -> usize {
        (self.num_cols + 1) * row + col
    }
}
```