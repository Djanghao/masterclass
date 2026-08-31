# rust 24ms DFS

**Author:** rainy-me
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/543724/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/543724/)

---

```rust
impl Solution {
  pub fn num_of_minutes(n: i32, head_id: i32, manager: Vec<i32>, inform_time: Vec<i32>) -> i32 {
    let mut m = manager;
    let mut t = inform_time;
    (0..n)
      .map(|i| Self::dfs(i as usize, &mut m, &mut t))
      .max()
      .unwrap()
  }

  fn dfs(i: usize, m: &mut Vec<i32>, t: &mut Vec<i32>) -> i32 {
    if m[i] != -1 {
      t[i] += Self::dfs(m[i] as usize, m, t);
      m[i] = -1;
    }
    t[i]
  }
}
```