# ✅ [Rust] 67 ms, FASTEST (100%) NO OVERCOUNTING (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2696524/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2696524/)

---

This [**solution**](https://leetcode.com/submissions/detail/821145620/) employs dynamic programming using a no-overcounting approach. It demonstrated **67 ms runtime (100.00%)** and used **12.6 MB memory (93.75%)**. Time complexity is linear: **O(m\\*n\\*k)**. Space complexity is linear: **O(m\\*n\\*k)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution
{
    pub fn number_of_paths(grid: Vec<Vec<i32>>, k: i32) -> i32 
    {
        let m = grid.len(); 
        let n = grid[0].len(); 
        
        // [1] to count correct paths, we observe that there is a unique
        //     remainder (mod k) that can ENTER the last (bottom-right) cell;
        //     the same applies to every other cell; thus, our DP strategy is
        //     to send requests from every cell to its top & left neighbours;
        //     this request contains the unique remainder value and a number
        //     of accumulated paths with the identical request;
        //     these requests are accumulated in the following array that is
        //     initialized with '-1' for all cells and all remainders except
        //     for the bottom-right corner, from which there is a single (fake)
        //     outgoing path with the expected remainder (mod k) being equal 0
        let mut paths = vec![vec![vec![-1i32; k as usize]; n]; m];
        paths[m-1][n-1][0] = 1;
                
        let mut p       : i32;
        let mut new_rem : usize;
        let mut pp      : &mut i32;
        
        // [2] here, we scan every cell and propagate state for only those
        //     remainders that are requested by each cell; 
        //     WE DO NOT COMPUTE STATES THAT ARE NOT REQUESTED
        for i in (0..m).rev()
        {
            for j in (0..n).rev()
            {
                for rem in 0..k as usize
                {
                    p = paths[i][j][rem];
                    
                    if p >= 0  // propagating only correct paths
                    {
                        new_rem = (rem as i32 - grid[i][j]).rem_euclid(k) as usize;
                        if i > 0
                        {
                            pp = &mut paths[i-1][j][new_rem];
                            if *pp < 0 { *pp = p; }
                            else       { *pp = (*pp + p) % 1_000_000_007; }
                        }
                        if j > 0
                        {
                            pp = &mut paths[i][j-1][new_rem];
                            if *pp < 0 { *pp = p; }
                            else       { *pp = (*pp + p) % 1_000_000_007; }
                        }
                    }
                }
            }
        }
        
        // [3] in the end, for the starting (top-left) cell, we
        //     have a final request that consists of accumulated
        //     number of paths for each outgoing remainder...
        //     so we extract the number of accumulated paths for 
        //     the actual remainder that is present in the matrix,
        //     i.e., for grid[0][0]%k
        paths[0][0][(grid[0][0]%k) as usize].max(0)
    }
}
```
