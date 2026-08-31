# Simplest Solutions for Matrix Reshaping in TypeScript and Rust

**Author:** alihaideralsawad
**Votes:** 1
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/3705854/](https://leetcode.com/problems/reshape-the-matrix/solutions/3705854/)

---

# TypeScript
```
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const values = mat.flat();

    // Check if it's possible to reshape into r x c
    if (values.length !== r * c) {
        return mat;
    }

    const result = [];
    for (let i = 0; i < values.length; i += c) {
        result.push(values.slice(i, i + c))
    }

    return result
};
```

# Rust
```
impl Solution {
    pub fn matrix_reshape(mat: Vec<Vec<i32>>, r: i32, c: i32) -> Vec<Vec<i32>> {
        // Check if it's possible to reshape into r x c
        if (r * c) as usize != mat.len() * mat[0].len() { 
            return mat 
        }

        mat
        .concat()
        .chunks(c as usize)
        .map(|row| row.to_vec())
        .collect()
    }
}
```