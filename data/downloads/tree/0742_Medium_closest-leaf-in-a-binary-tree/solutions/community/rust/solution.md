# Rust Solution using BFS and DFS

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/2845126/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/2845126/)

---

# Code
```
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::*;

fn dfs(g: &mut Vec<Vec<usize>>, leafs: &mut Vec<bool>, node:&Rc<RefCell<TreeNode>>) {
  let cv = node.borrow().val as usize;

  if node.borrow().left.is_none() && node.borrow().right.is_none() {
    leafs[cv] = true;
  }

  if let Some(left) = &node.borrow().left {
    let lv = left.borrow().val as usize;
    g[cv].push(lv);
    g[lv].push(cv);
    dfs(g, leafs, left);
  }

  if let Some(right) = &node.borrow().right {
    let rv = right.borrow().val as usize;
    g[cv].push(rv);
    g[rv].push(cv);
    dfs(g, leafs, right);
  }
}

impl Solution {
    pub fn find_closest_leaf(root: Option<Rc<RefCell<TreeNode>>>, k: i32) -> i32 {
      if let Some(node) = root {
        let mut g = vec![vec![];1010];
        let mut leafs = vec![false;1010];
        dfs(&mut g, &mut leafs, &node);

        let inf = 1000000;
        let k = k as usize;
        let mut memo = vec![inf;1010];
        memo[k] = 1;
        let mut stack = vec![(k, 1)];

        while !stack.is_empty() {
          let mut new_stack = vec![];
          while let Some((ci,cv)) = stack.pop() {
            let nv = cv + 1;
            for &ni in &g[ci] {
              if nv < memo[ni] {
                memo[ni] = nv;
                new_stack.push((ni, nv));
              }
            }
          }
          stack = new_stack;
        }

        let mut val = inf;
        let mut ti = inf;
        for i in 0..1010 {
          if leafs[i] && memo[i] < val {
            val = memo[i];
            ti = i;
          }
        }

        ti as i32
      } else {
        0
      }
    }
}
```