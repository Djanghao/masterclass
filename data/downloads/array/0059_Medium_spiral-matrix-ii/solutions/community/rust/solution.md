# Rust functional solution inspired by ldm0

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/1941205/](https://leetcode.com/problems/spiral-matrix-ii/solutions/1941205/)

---

The credit goes to https://leetcode.com/problems/spiral-matrix-ii/discuss/732201/A-different-and-quick-approach-(In-Rust-but-explained). Explanation of the approach can be found there.
The good thing is that `fn calc(x, y, n)` can be used to find the value of matrix[x][y] in O(1) without generating the matrix.
```rust
pub fn generate_matrix(n: i32) -> Vec<Vec<i32>> {
    (0..n).map(|x|
        (0..n).map(|y|
            1 + Self::calc(x, y, n)
        ).collect()
    ).collect()
}

fn calc(x: i32, y: i32, n: i32) -> i32 {
    let level = x.min(n - x - 1).min(y).min(n - y - 1);
    let loop_area = n*n - (n - 2*level)*(n - 2*level);
    let seq = if y >= x {
        x + y - 2*level
    }
    else { // = 4*(n - 2*level - 1) - (x + y - 2*level)
        4*n - 6*level - 4 - x - y
    };
    loop_area + seq
}
```