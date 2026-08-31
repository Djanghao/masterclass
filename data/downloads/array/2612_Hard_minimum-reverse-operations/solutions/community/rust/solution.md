# Rust solution with explanations

**Author:** tapoafom
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-reverse-operations/solutions/5047161/](https://leetcode.com/problems/minimum-reverse-operations/solutions/5047161/)

---

First idea, all destination indexes are separated by 2, e.g. k=4, p=6, I can send the value 1 to the indexes: 3, 5, 7, 9
Second idea, collect in a tree all possible child indexes for each index from 0 to n-1
Third idea, do not register all the children but only the first and last
Fourth idea, save already visited index ranges to avoid them and separate even and odd ranges
Fifth idea, browse the tree with Breadth-first search

# Code
```
use std::collections::{HashMap, VecDeque};
impl Solution {
  pub fn min_reverse_operations(n: i32, p: i32, banned: Vec<i32>, k: i32) -> Vec<i32> {

    let banned = banned.iter().map(|v| (v,true)).collect::<HashMap<_, _>>();
    let mut res: Vec<i32> = vec![-1; n as usize];
    res[p as usize] = 0;

    if k==1 {
      return res;
    }

    let mut tree:Vec<(i32, i32)>  = vec![(0,0);n as usize];

    for i in 0..n {     
      tree[i as usize] = (
        std::cmp::max(i - k + 1, k - 1 - i),
        std::cmp::min(i + k - 1, 2*n - 1 - k - i)
      );
    }

    let mut idx = p as usize;
    let mut ops = 1;
    let mut queue:VecDeque<(usize, i32)> = VecDeque::new();
    let mut visited:Vec<(i32,i32)> = Vec::new();

    loop {
      
      let (min, max) = tree[idx];

      let mut i = min;
      'child_loop: while i <= max {

        for (vmin, vmax) in visited.iter() {
          if i >= *vmin && i <= *vmax && i&1 == vmin&1 {
            i = vmax + 2;
            continue 'child_loop;
          }
        }

        if res[i as usize] != -1 || banned.contains_key(&i) {
          i += 2;
          continue 'child_loop;
        }

        res[i as usize] = ops;
        queue.push_back((i as usize, ops + 1));

        i += 2;
      }

      let mut update_visited = false;
      
      for (vmin, vmax) in visited.iter_mut() {
        if min&1 != *vmin&1 {
          continue;
        }
        if min >= *vmin && max <= *vmax {
          update_visited = true;
          break;
        }
        if min <= *vmin && max >= *vmax {
          *vmin = min;
          *vmax = max;
          update_visited = true;
          break;
        }
        if max >= *vmax && min <= *vmax {
          *vmax = max;
          update_visited = true;
          break;
        }
        if min <= *vmin && max >= *vmin {
          *vmin = min;
          update_visited = true;
          break;
        }
      }

      if !update_visited {
        visited.push((min, max));
      }

      (idx, ops) = match queue.pop_front() {
        Some(q) => q,
        None => break,
      };
    }

    res
  }
}
```