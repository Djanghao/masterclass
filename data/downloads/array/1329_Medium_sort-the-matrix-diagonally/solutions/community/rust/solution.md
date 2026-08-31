# Rust | Bucket Sort | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/2495121/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/2495121/)

---

The "algorithm" is very straight-forward. Sort the diagonals, that's it. But for Rust, I use the nice possibility to chain together iterators for the coordinates of the first elements of each diagonal that needs sorting (the corners are only one element => no sorting necessary). For each such coordinate, we step along the diagonal and collect the items in buckets for bucket sorting, so that the time complexity per diagonal  becomes O(min(m,n)) (instead of O(min(m,n) * log(min(m,n))) with "normal" sorting). And then we do another pass over the diagonal to populate it with the sorted result from the bucket sorting. A nice by-product of the bucket sorting is that the buckets are cleared as part of the process when we extract the sorted diagonal, to it's ready to go for the next round without additional clearing.

```
impl Solution {
    pub fn diagonal_sort(mut mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut buckets = [0; 101];
        let (m, n) = (mat.len(), mat[0].len());

		// Chain together iterators for first element coordinates of all relevant diagonals
        (1..m-1).map(|i| (i, 0)).chain((0..n-1).map(|j| (0, j))).for_each(|(i0, j0)| {
            let (mut i, mut j) = (i0, j0);
            let (mut min, mut max) = (i32::MAX, i32::MIN);
			// Populate buckets for bucket sorting
            while i < m && j < n {
                let element = mat[i][j];
                min = min.min(element);
                max = max.max(element);
                buckets[element as usize] += 1;
                i += 1;
                j += 1;
            }
			// Populate matrix with result of bucket sorting
            let (mut i, mut j) = (i0, j0);
            let mut k = min as usize;
            while i < m && j < n {
                while buckets[k] == 0 {
                    k += 1;
                }
                mat[i][j] = k as i32;
                buckets[k] -= 1;
                i += 1;
                j += 1;
            }
        });
        mat
    }
}
```