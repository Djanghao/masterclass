# Rust | 6 Solutions | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2762597/](https://leetcode.com/problems/toeplitz-matrix/solutions/2762597/)

---

The problem is easy enough - compare each entry with another on the same diagonal to see that all elements on the same diagonal have the same value. So let us have some fun with different ways of solving this with Rust.

**One-liner 1**

Iterate over all elements not on the first row or first column, and check if they have the same values as their north-west neighbors. Here we use iterators over the indicies, and index into `matrix` directly.

```
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        (1..matrix.len()).all(|r| (1..matrix[0].len()).all(|c| matrix[r][c] == matrix[r-1][c-1]))
    }
}
```

**One-liner 2**

Use `windows` to get pairs of matrix rows and `zip` and `skip` to get pairs of elements on the same diagonal. Check that all pairs match up.

```
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        matrix.windows(2).all(|w| w[0].iter().zip(w[1].iter().skip(1)).all(|(a,b)| a.eq(b)))
    }
}
```

**One-liner 3**

Use `windows` and `skip` like before, but also `take` to get iterators of equal length that we can compare directly with `eq`.

```
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        matrix.windows(2).all(|w| w[0].iter().take(w[0].len() - 1).eq(w[1].iter().skip(1)))
    }
}
```

**One-liner 4**

Use `windows` as before, but instead of iterators, take slices of the rows that can be compared directly.

```
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        matrix.windows(2).all(|w| w[0][..w[0].len()-1] == w[1][1..])
    }
}
```

**Cache the Diagonal Values**

We use a cache-friendly stack-allocated array that we fill with the top and left elements. Check that other elements are the same as the cached diagonal elements, using the fact that `r - c` is unique for each diagonal.

```
const MAX_DIM: usize = 20 as _;

impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        let mut diags = [0; 2*MAX_DIM];
        (0..matrix.len()).map(|r| (r, 0)).chain((0..matrix[0].len()).map(|c| (0, c)))
            .for_each(|(r, c)| diags[MAX_DIM + r - c] = matrix[r][c]);
        (1..matrix.len()).all(|r| (1..matrix[0].len()).all(|c| matrix[r][c] == diags[MAX_DIM + r - c]))
    }
}
```

**Hardcore Imperative**

For true C fans - our only grief is that we don't have C-style for loops in Rust. But we make that up by unecessarily using a `return` statement as our last line instead of just `true`. :)

```
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        for r in 1..matrix.len() {
            for c in 1..matrix[0].len() {
                if matrix[r][c] != matrix[r-1][c-1] {
                    return false;
                }
            }
        }
        return true;
    }
}
```
