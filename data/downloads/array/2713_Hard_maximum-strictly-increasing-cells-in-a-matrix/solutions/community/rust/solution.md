# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/4166993/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/4166993/)

---

```
impl Solution {
    pub fn max_increasing_cells(mat: Vec<Vec<i32>>) -> i32 {
        use std::cmp::max;
        let n = mat.len();
        let m = mat[0].len();
        let mut ret = 1;
        let mut q = std::collections::BinaryHeap::new();
        let mut best_row = vec![0; n];
        let mut best_col = vec![0; m];
        let mut next_best_row = vec![0; n];
        let mut next_best_col = vec![0; m];
        for (i, item) in mat.iter().enumerate().take(n) {
            for (j, inner_item) in item.iter().enumerate().take(m) {
                q.push((*inner_item, i, j));
            }
        }
        let mut last_x = i32::MAX;
        let mut buffer = Vec::new();
        while let Some((x, i, j)) = q.pop() {
            if x != last_x {
                while let Some((i, j)) = buffer.pop() {
                    best_row[i] = next_best_row[i];
                    best_col[j] = next_best_col[j];
                }
            }
            next_best_row[i] = max(next_best_row[i], max(best_col[j] + 1, best_row[i] + 1));
            next_best_col[j] = max(next_best_col[j], max(best_row[i] + 1, best_col[j] + 1));
            ret = max(max(ret, next_best_row[i]), next_best_col[j]);
            last_x = x;
            buffer.push((i, j));
        }
        ret
    }
}

```