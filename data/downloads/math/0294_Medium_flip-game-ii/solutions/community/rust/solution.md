# Rust Solution using DP

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/3960769/](https://leetcode.com/problems/flip-game-ii/solutions/3960769/)

---

# Code
```
use std::collections::*;

fn dfs(cache: &mut HashMap<usize, bool>, n: usize, mut state: usize) -> bool {
  if let Some(&v) = cache.get(&state) {
    return v
  }

  let mut win = false;
  for i in 0..n-1 {
    let v1 = 1 << i;
    let v2 = 1 << (i+1);

    if v1 & state == v1 && v2 & state == v2 {
      state -= v1;
      state -= v2;
      if !dfs(cache, n, state) {
        win = true;
      }
      state += v1;
      state += v2;
    }
  }

  cache.insert(state, win);
  win
}

impl Solution {
  pub fn can_win(current_state: String) -> bool {
    let s = current_state.chars().collect::<Vec<char>>();
    let n = s.len();
    let mut state = 0;
    for i in 0..n {
      if s[i] == '+' {
        state += 2usize.pow(i as u32);
      }
    }
    
    dfs(&mut HashMap::new(), n, state)
  }
}
```