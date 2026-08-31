# Rust/Python. No recursion, optimized linear solution with constant additional memory

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3495152/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3495152/)

---

# Intuition

Solution in Rust is highly optimized which uses constant additional space and reuses original array. I leave nonoptimized python solution submitted by me during the contest as it shows the intuition and how I got to this solution.

In general the idea is:

 1. find the cost of every path. This is `bfs` in python and just one look (first one) in rust (costs will be last `(n + 1) / 2` elements).
 2. then find the maximum costs of the paths. In Python this is last block in return statement in bfs. In rust, second loop
 3. Then traverse back to find which node will you increase values. While loop in python, and last for loop in rust

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn min_increments(mut n: i32, mut cost: Vec<i32>) -> i32 {
    for i in 1 .. cost.len() {
      cost[i] += cost[(i - 1) / 2];
    }

    let mut max = 0;
    for i in cost.len() / 2 .. cost.len() {
      max = max.max(cost[i]);
    }

    for i in cost.len() / 2 .. cost.len() {
      cost[i] = max - cost[i];
    }

    let mut res = 0;
    for i in (1 .. cost.len() / 2 + 1).rev() {
      let min = cost[2 * i].min(cost[2 * i - 1]);
      res += cost[2 * i] + cost[2 * i - 1] - 2 * min;
      cost[i - 1] = min;
    }

    return res;
  }
}
```
```python []
class Solution:

  def __init__(self):
    self.res = 0

  def bfs(self, cost):
    frontier = [(1, cost[0])]
    while True:
      new_frontier = []
      for i, c in frontier:
        if i * 2 < len(cost):
          new_frontier.append((i * 2, c + cost[i * 2 - 1]))
          new_frontier.append((i * 2 + 1, c + cost[i * 2]))

      if not new_frontier:
        r = [c for _, c in frontier]
        max_val = max(r)
        return [max_val - v for v in r]

      frontier = new_frontier

  def cmd(self, diff):
    tmp = []
    for i in range(len(diff) // 2):
      v1, v2 = diff[i * 2], diff[i * 2 + 1]
      m = min(v1, v2)
      tmp.append(m)
      self.res += v1 - m + v2 - m

    return tmp

  def minIncrements(self, n: int, cost: List[int]) -> int:
    self.res = 0
    diff = self.bfs(cost)
    while len(diff) > 1:
      diff = self.cmd(diff)

    return self.res
```
