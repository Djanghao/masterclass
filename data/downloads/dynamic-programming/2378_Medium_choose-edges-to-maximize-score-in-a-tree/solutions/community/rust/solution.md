# Rust Solution using Dynamic Programing

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/4276049/](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/4276049/)

---

# Code
```
fn dfs(memo: &mut Vec<(i64,i64)>, g: &Vec<Vec<(usize,i64)>>, ci:usize) {
  let mut used_tot = 0;
  let mut not_used_tot = 0;
  for &(ni, _) in &g[ci] {
    dfs(memo, g, ni);
    not_used_tot += memo[ni].0.max(memo[ni].1);
  }

  for &(ni, val) in &g[ci] {
    let temp = not_used_tot - memo[ni].0.max(memo[ni].1);
    let temp = temp + memo[ni].0 + val;
    used_tot = used_tot.max(temp);
  }

  memo[ci].0 = not_used_tot;
  memo[ci].1 = used_tot;
}

impl Solution {
  pub fn max_score(edges: Vec<Vec<i32>>) -> i64 {
    let n = edges.len();
    let mut memo = vec![(0,0);n];

    let mut g = vec![vec![];n];
    for i in 1..n {
      let j = edges[i][0] as usize;
      let v = edges[i][1] as i64;
      g[j].push((i,v));
    }

    dfs(&mut memo, &g, 0);
    memo[0].0.max(memo[0].1)
  }
}
```