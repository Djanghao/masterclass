# Rust Solution Using Priority_Queue

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2901215/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2901215/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Sort the quieries so that they are processed in incresing order
2) Perform DFS using a priority_queue starting from (0, 0) with only processing the grids that have values which are less than the current query value.   
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(M * N * (Log M + Log N))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(M * N)
# Code
```
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_points(grid: Vec<Vec<i32>>, queries: Vec<i32>) -> Vec<i32> {
        let mut data = vec![];
        for i in 0 .. queries.len() { data.push((queries[i], i)); }
        data.sort();
        
        let mut ret = vec![0; data.len()];
        let (m, n) = (grid.len(), grid[0].len());
        let mut flag = vec![vec![0; n]; m];
        let mut pq = BinaryHeap::from([Reverse((grid[0][0], 0, 0))]);
        let mut count = 0;
        let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        flag[0][0] = 1;
        
        for q in data {
            while let Some(Reverse((val, u, v))) = pq.peek() {
                if *val >= q.0 { break }
                let (u, v) = (*u as i32, *v as i32);
                count += 1;
                pq.pop();
                
                for d in dirs {
                    let (i, j) = (u + d[0], v + d[1]);
                    if i < 0 || i == m as i32 || j < 0 || j == n as i32 { continue }
                    
                    let (i, j) = (i as usize, j as usize);
                    if flag[i][j] == 1 { continue }
                    
                    flag[i][j] = 1;
                    pq.push(Reverse((grid[i][j], i, j)));
                }
            }
            
            ret[q.1] = count;
        }
        
        ret
    }
}
```