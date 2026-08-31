# distance to corners

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5886751/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5886751/)

---

By looking at the degree, we identify the top-left $u$ and the top-right $w$ corner of the matrix. 
For element $(i,j)$, the distance to $u$ is $i+j$ and to $w$ it is $i + m - 1 - j$. Hence, we can compute both distances for all nodes and then solve for indices $(i,j)$ of row and column.


```rust []
use std::collections::{HashMap, VecDeque};

fn dist(n: usize, adj: &HashMap<usize, Vec<usize>>, u: usize) -> Vec<usize> {
    let mut dd = vec![usize::MAX; n];
    let mut q : VecDeque<(usize, usize)> = VecDeque::new();
    dd[u] = 0;
    q.push_back((0,u));
    while let Some((d,x)) = q.pop_front() {
        for &v in &adj[&x] {
            if dd[v] == usize::MAX {
                dd[v] = d + 1;
                q.push_back((d+1, v));
            }
        }
    }
    return dd
}

impl Solution {
    pub fn construct_grid_layout(n: i32, edges: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = n as usize;
        let mut seen = vec![false; n];

        let adj : HashMap<usize, Vec<usize>> = edges.into_iter()
                  .fold(HashMap::new(), |mut adj, e| {
                    let u = e[0] as usize;
                    let v = e[1] as usize;
                    adj.entry(u).or_default().push(v);
                    adj.entry(v).or_default().push(u);
                    adj
                  });
        let u = (0..n).min_by_key(|u|adj[u].len()).unwrap();
       
        let d1 = dist(n, &adj, u);

        if adj[&u].len() == 1 { // 1d case
            let mut r = vec![vec![0; n]; 1];
            for u in 0..n {
                r[0][d1[u]] = u as i32
            }
            return r
        } 

        let w = (0..n).filter(|x|adj[x].len()==2 && d1[*x]>0).min_by_key(|&x|d1[x]).unwrap();
        let d2 = dist(n, &adj, w);

        let m = d1[w];
        let mut r = vec![vec![0; m+1]; n/(m+1)];
        for u in 0..n {
            let i = (d1[u] + d2[u] - m) / 2;
            let j = d1[u] - i;
            r[i][j] = u as i32
        }
        r
       
    }
}
```