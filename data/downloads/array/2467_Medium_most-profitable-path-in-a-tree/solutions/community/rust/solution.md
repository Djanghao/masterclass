# Rust Solution using BFS + DFS

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/3929116/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/3929116/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
struct Helper {
  memo: Vec<usize>,
}

impl Helper {
  fn dfs(&mut self, g:&Vec<Vec<usize>>, stack: &mut Vec<usize>, ci:usize, li:usize)  {
    if ci == 0 {
      self.memo = stack.clone();
      self.memo.push(ci);
      return
    }

    for &ni in &g[ci] {
      if ni == li { continue }
      stack.push(ci);
      self.dfs(g, stack, ni, ci);
      stack.pop();
    }
  }
}

impl Solution {
  pub fn most_profitable_path(edges: Vec<Vec<i32>>, bob: i32, amount: Vec<i32>) -> i32 {
    let n = edges.len() + 1;
    let bob = bob as usize;

    let mut g = vec![vec![];n];
    for arr in edges {
      let a = arr[0] as usize;
      let b = arr[1] as usize;
      g[a].push(b);
      g[b].push(a);
    }

    let mut stack = vec![];
    let mut helper = Helper { memo: vec![] };
    helper.dfs(&g, &mut stack, bob, 1_000_000_000);
    let bob_route = helper.memo;

    let mut seen = vec![false;n];
    let mut time = 0;
    let mut stack = vec![(0,amount[0],1_000_000_000)];

    // println!("{:?}", &bob_route);
    seen[bob] = true;
    let mut result = -10i32.pow(9)-5;
    while !stack.is_empty() {
      let mut new_stack = vec![];

      let bob_index = if time < bob_route.len() - 1 {
        Some(bob_route[time+1])
      } else {
        None
      };

      // println!("{:?}", &stack);
      while let Some((ci, cv, li)) = stack.pop() {
        if g[ci].len() == 1 && ci != 0 {
          result = result.max(cv);
          continue
        }

        for &ni in &g[ci] {
          if ni == li { continue }
          let anv = cv + if seen[ni] {
            0
          } else if let Some(bni) = bob_index {
            if ni == bni {
              amount[ni] / 2
            } else {
              amount[ni]
            }
          } else {
            amount[ni]
          };
          seen[ni] = true;
          new_stack.push((ni,anv,ci));
        }
        seen[ci] = true;
      }

      if time < bob_route.len()-1 {
        seen[bob_route[time+1]] = true;
      }
      stack = new_stack;
      time += 1;
    }

    result
  }
}
```