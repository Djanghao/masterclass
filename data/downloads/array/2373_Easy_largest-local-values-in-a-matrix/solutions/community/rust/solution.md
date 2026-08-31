# ✅ [Rust] 0 ms, functional-style efficient sliding windows (with detailed comments)

**Author:** iablokov
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2559654/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2559654/)

---

This [solution](https://leetcode.com/submissions/detail/796636578/) employs a functional-style approach with sliding windows to first compute maximum values for triples across rows, then across columns. It demonstrated **0 ms runtime (100%)** and used **2.2 MB memory (66.34%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::cmp::max;

impl Solution 
{
    pub fn largest_local(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> 
    {
        // [1] first, we compute maximum values across
        //     3-windows in each row
        let max_rows: Vec<Vec<i32>> = 
            grid
                .iter()
                .map(|v| 
                      v.windows(3)
                       .map(|w| *w.iter().max().unwrap())
                       .collect()
                ).collect();

        // [2] second, we compute maximum values across
        //     3-windows in each column;
        max_rows
            .windows(3)
            .map(|w: &[Vec<i32>]| 
        // [3] to scan columns in a 3-row slice, we zip 3 iterators...
                  w[0].iter()
                      .zip(w[1].iter())
                      .zip(w[2].iter())
        // [4] ...and compute maximum across each column
                      .map(|((a,b),c)| max(max(*a,*b),*c))
                      .collect()
            ).collect()
    } 
}
```