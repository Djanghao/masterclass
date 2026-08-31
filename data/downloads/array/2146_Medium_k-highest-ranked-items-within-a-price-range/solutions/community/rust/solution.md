# Dijkstra

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/5528940/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/5528940/)

---

```
use std::collections::{BinaryHeap, HashSet};
use std::cmp::Reverse;

impl Solution {
    pub fn highest_ranked_k_items(g: Vec<Vec<i32>>, pricing: Vec<i32>, start: Vec<i32>, k: i32) -> Vec<Vec<i32>> {
        let mut q = BinaryHeap::new(); 
        q.push((Reverse(0), start[0] as usize, start[1] as usize));
        let mut seen = HashSet::new();
        seen.insert((start[0] as usize, start[1] as usize));
        let mut res = BinaryHeap::new();
        let n = g.len(); 
        let m = g[0].len();

        while let Some((Reverse(d), i,j)) = q.pop() {
            let x = g[i][j];
            if pricing[0]<= x && x  <= pricing[1] {
                res.push((d,x, i, j));
                if res.len() > k as usize {
                    res.pop();
                }
            }
            let im = i.wrapping_sub(1);
            let ip = i+1;
            let jm = j.wrapping_sub(1);
            let jp = j+1;
            for &(ii,jj) in &[(i, jm), (i,jp), (im,j), (ip, j)] {
                if ii < n && jj < m && g[ii][jj]!= 0 && seen.insert((ii,jj)) {
                    q.push((Reverse(d+1),ii,jj))
                }
            }
        }
        let mut xs = res.into_iter().collect::<Vec<_>>();
        xs.sort_unstable();
        xs.into_iter()
           .map(|(_,_,i,j)|vec![i as i32,j as i32])
           .collect::<Vec<_>>()
    }
}
```