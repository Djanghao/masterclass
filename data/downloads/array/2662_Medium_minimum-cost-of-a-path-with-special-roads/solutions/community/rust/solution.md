# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3843030/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3843030/)

---


# Code
```
use std::collections::*;

impl Solution {
  pub fn minimum_cost(start: Vec<i32>, target: Vec<i32>, special_roads: Vec<Vec<i32>>) -> i32 {
    let mut set = HashSet::new();
    let mut map = HashMap::new();
    let default_val = 10_000_000;
    for arr in special_roads {
      let x1 = arr[0];
      let y1 = arr[1];
      let x2 = arr[2];
      let y2 = arr[3];
      let v = arr[4];

      set.insert((x1,y1));
      set.insert((x2,y2));
      let entry = map.entry((x1,y1,x2,y2)).or_insert(default_val);
      if v < *entry {
        *entry = v;
      }
    }
    
    let mut dict = vec![(start[0], start[1])];
    for (x,y) in set {
      dict.push((x,y));
    }
    dict.push((target[0], target[1]));

    let n = dict.len();
    let mut g = vec![vec![];n];
    for i in 0..n {
      let (x1,y1) = dict[i];
      for j in 0..n {
        if i == j { continue }
        let (x2,y2) = dict[j];
        let sv = if let Some(&v) = map.get(&(x1,y1,x2,y2)) {
          v
        } else {
          default_val
        };
        let av = (x1-x2).abs() + (y1-y2).abs();
        g[i].push((j, sv.min(av)));
      }
    }

    let mut memo = vec![default_val;n];
    let mut stack = vec![(0,0)];
    while !stack.is_empty() {
      let mut new_stack = vec![];
      while let Some((ci,cv)) = stack.pop() {
        for &(ni, v) in &g[ci] {
          let nv = cv + v;
          if nv < memo[ni] {
            memo[ni] = nv;
            new_stack.push((ni,nv));
          }
        }
      }
      stack = new_stack;
    }

    memo[n-1]
  }
}
```