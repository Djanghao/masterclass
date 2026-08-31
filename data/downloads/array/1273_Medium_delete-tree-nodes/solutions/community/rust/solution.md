# Rust Solution using dfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/2094509/](https://leetcode.com/problems/delete-tree-nodes/solutions/2094509/)

---

```
fn dfs1(g: &Vec<Vec<usize>>, memo: &mut Vec<i32>,
        value: &Vec<i32>, ci:usize) -> i32 {
  let sv = value[ci];

  memo[ci] = 1;
  let mut cv = 0;
  for i in 0..g[ci].len() {
    let ni = g[ci][i];

    if memo[ni] > 0 { continue }
    cv += dfs1(g, memo, value, ni);
  }

  let result = sv + cv;
  if result == 0 {
    memo[ci] = 2;
  }
  
  result
}

fn dfs2(g: &Vec<Vec<usize>>, seen: &mut Vec<i32>, memo: &Vec<i32>,
        ci:usize, mut flag:bool) {
  seen[ci] = 1;
  if flag || memo[ci] == 2 {
    seen[ci] = 2;
    flag = true;
  }

  for i in 0..g[ci].len() {
    let ni = g[ci][i];

    if seen[ni] > 0 { continue }
    dfs2(g, seen, memo, ni, flag);
  }
}

impl Solution {
  pub fn delete_tree_nodes(nodes: i32, parent: Vec<i32>, value: Vec<i32>) -> i32 {
    let n = nodes as usize;
    let mut g = vec![vec![];n];
    for i in 0..n {
      let v = parent[i];

      if v == -1 {
        continue
      }
      let ni = v as usize;
      g[ni].push(i);
      g[i].push(ni);
    }
    
    let mut memo = vec![-1;n];
    dfs1(&g, &mut memo, &value, 0);
    let mut seen = vec![-1;n];
    dfs2(&g, &mut seen, &memo, 0, false);

    let mut result = 0;
    for v in seen {
      if v < 2 {
        result += 1;
      }
    }
    result
  }
}
```