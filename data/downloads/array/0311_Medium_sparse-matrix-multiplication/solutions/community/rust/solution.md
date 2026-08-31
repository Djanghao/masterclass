# Rust | Binary Search

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4012079/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4012079/)

---

# Code
```rust
pub fn to_sparse(
    mat: Vec<Vec<i32>>,
) -> Vec<([usize; 2], i32)> {
    let mut ret = vec![];

    for (i, row) in mat.into_iter().enumerate() {
        for (j, e) in row.into_iter().enumerate() {
            if e == 0 { continue; }
            ret.push(([i, j], e));
        }
    }

    ret
}

pub fn transpose(
    sparse_mat: Vec<([usize; 2], i32)>,
) -> Vec<([usize; 2], i32)> {
    let mut ret = sparse_mat.into_iter()
        .map(|([i, j], e)| ([j, i], e))
        .collect::<Vec<_>>();
    ret.sort_unstable();
    ret
}

impl Solution {
    pub fn multiply(
        op_0: Vec<Vec<i32>>,
        op_1: Vec<Vec<i32>>,
    ) -> Vec<Vec<i32>> {
        let (m, k, n) = (op_0.len(), op_0[0].len(), op_1[0].len());
        println!("m: {}, k: {}, n: {}", m, k, n);

        let op_0 = to_sparse(op_0);
        let op_1 = to_sparse(op_1);

        let mut ret = vec![vec![0i32; n]; m];

        for ([i, j], e0) in op_0 {
            for x in 0..n {
                let coord_1 = [j, x];
                let ptr_0 = op_1.partition_point(
                    |&(coord, _)| coord < coord_1
                );
                if ptr_0 >= op_1.len() {
                    continue;
                }
                if op_1[ptr_0].0 != coord_1 {
                    continue;
                }

                let e1 = op_1[ptr_0].1;

                ret[i][x] += e0 * e1;
            }
        }

        ret
    }
}
```