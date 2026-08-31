# Rust: 8ms Solution

**Author:** seandewar
**Votes:** 4
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/1204587/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/1204587/)

---

Converting each row in the input matrix into rows of prefix sums for only the values in that row is fast enough.

```rust
struct NumMatrix {
    mat: Vec<Vec<i32>>,
}

impl NumMatrix {
    fn new(mut mat: Vec<Vec<i32>>) -> Self {
        mat.iter_mut()
            .for_each(|row| (1..row.len()).for_each(|i| row[i] += row[i - 1]));
        Self { mat }
    }

    fn sum_region(&self, row1: i32, col1: i32, row2: i32, col2: i32) -> i32 {
        let (col1, col2) = (col1 as usize, col2 as usize);
        (row1 as usize..=row2 as usize)
            .map(|y| self.mat[y][col2] - self.mat[y].get(col1 - 1).unwrap_or(&0))
            .sum()
    }
}
```

**Time complexity**: `new()`: `O(w*h)`, `sum_region()`: `O(h)`.

**Extra-space complexity**: `O(1)`, as we convert the input `mat`rix in-place and _move_ it into our struct (it will point to the same heap-allocated memory).
If we had `clone()`d the input `mat`rix instead, this would be `O(w*h)`.

_...where `w` and `h` are the width and height of the input `mat`rix respectively._