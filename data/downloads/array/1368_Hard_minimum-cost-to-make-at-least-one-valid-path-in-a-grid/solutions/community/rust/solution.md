# Rust solution: BFS with PQ  - 100% ,  < 10ms

**Author:** SerVasilich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/2790856/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/2790856/)

---

# Intuition
BFS

# Approach
BFS with Priority Queue

# Complexity
- Time complexity: $$O((N+M)log(N+M))$$

- Space complexity: $$O(N*M)$$

# Code
```
use std::collections::*;

impl Solution {
    pub fn min_cost(g: Vec<Vec<i32>>) -> i32 {
        let (n, m, mut q) = (g.len(), g[0].len(), BinaryHeap::from([(0,0,0)]));
        let mut ans = [[1000;101];101]; ans[0][0]=0;
        while q.len()>0 {
            let (curr,i,j) = q.pop().unwrap();
            if -curr>ans[i][j] {continue;}
            if (i,j)==(n-1,m-1) {return ans[n-1][m-1];}
            if i+1<n {let c=curr-(g[i][j]!=3) as i32; if ans[i+1][j]>-c {ans[i+1][j]=-c; q.push((c,i+1,j));}}
            if j+1<m {let c=curr-(g[i][j]!=1) as i32; if ans[i][j+1]>-c {ans[i][j+1]=-c; q.push((c,i,j+1));}}
            if i>0 {let c=curr-(g[i][j]!=4) as i32; if ans[i-1][j]>-c {ans[i-1][j]=-c; q.push((c,i-1,j));}}
            if j>0 {let c=curr-(g[i][j]!=2) as i32; if ans[i][j-1]>-c {ans[i][j-1]=-c; q.push((c,i,j-1));}}
        }
        ans[n-1][m-1]
    }
}
```