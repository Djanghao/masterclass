# Rust Solution

**Author:** hyper-simplex
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/4741106/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/4741106/)

---

# Code
```
use std::collections::*;

impl Solution {
    pub fn minimum_score(nums: Vec<i32>, edges: Vec<Vec<i32>>) -> i32 {
      let mut adj = vec![BTreeSet::new(); nums.len()];
      for e in edges {
        let a = e[0] as usize;
        let b = e[1] as usize;
        adj[a].insert(b);
        adj[b].insert(a);
      }
      let mut ans = i32::MAX;
      let xors_whole_tree = precompute(nums.as_slice(), adj.as_slice(), 0, usize::MAX);
      solve(nums.as_slice(), adj.as_slice(), xors_whole_tree, 0, usize::MAX, & mut ans);
      ans
    }
}

//reduction: xors of subtree values to get xors of whole tree
fn precompute(nums: &[i32], adj: &[BTreeSet<usize>], cur: usize, par: usize) -> i32 {
  adj[cur].iter()
    .filter(|i| **i != par)
    .map(|i| precompute(nums, adj, *i, cur))
    .fold(nums[cur], |acc, i| acc ^ i)
}

//reduction: xors of subtree values, while solving inner problem
fn solve(nums: &[i32], adj: & [BTreeSet<usize>], xors_whole_tree: i32, cur: usize, par: usize, ans: &mut i32) -> i32 {
  let mut xors_cur = nums[cur];
  for i in adj[cur].iter().filter(|x| **x != par){
    // recursively consider all nodes as root of 1st component:
    let xors_component1 = solve(nums, adj, xors_whole_tree, *i, cur, ans);

    // consider subtree rooted at *i as 1st component:
    let xors_remaining = xors_whole_tree ^ xors_component1;
    // solve inner problem: for remaining tree traversable from root (node 0), further divide into 2 components
    solve_inner(nums, adj, 0, usize::MAX, *i, xors_component1, xors_remaining, ans);

    xors_cur ^= xors_component1;
  }
  xors_cur
}

//return xors of subtree rooted at cur, without visiting blacklisted subtree
fn solve_inner(
  nums: &[i32], 
  adj: & [BTreeSet<usize>], 
  cur: usize, 
  par: usize, 
  blacklisted_node: usize, 
  xors_component1: i32,
  xors_remaining: i32,
  ans: & mut i32) -> i32 {

  let mut xors_subtree = nums[cur];
  for i in adj[cur].iter().filter(|x| **x != par && **x != blacklisted_node){
    xors_subtree ^= solve_inner(nums, adj, *i, cur, blacklisted_node, xors_component1, xors_remaining, ans);
  }

  if cur != 0 {
    // cur node is the root of the 2nd subtree, with xors_subtree, then 3rd remaining component's xors is:
    let xors_component3 = xors_remaining ^ xors_subtree;
    //we have 3 connected components now with these xor values:
    let mut candidates = [xors_component1, xors_subtree, xors_component3];
    //update answer
    let diff = candidates[0].max(candidates[1]).max(candidates[2]) 
      - candidates[0].min(candidates[1]).min(candidates[2]);
    *ans = (*ans).min(diff);
  }

  xors_subtree
}
```