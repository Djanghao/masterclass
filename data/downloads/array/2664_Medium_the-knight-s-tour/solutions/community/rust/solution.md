# Rust/Python DFS + explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/3560820/](https://leetcode.com/problems/the-knights-tour/solutions/3560820/)

---

# Intuition
Standard DFS solution. From a position look at all possible steps which are not outside a boundary and were not already selected. If you can move there, mark it launch DFS and unmark.

If you reached a all points, break out of all recursions.

# Complexity
- Time complexity: exponential

- Space complexity: $O(n m)$

# Code
```Rust []
const DIRs: [i32; 9] = [-2, 1, 2, 1, -2, -1, 2, -1, -2];

impl Solution {

  fn dfs(M: &mut Vec<Vec<i32>>, y: i32, x: i32, pos: i32) -> bool {
    let (Y, X) = (M.len(), M[0].len());
    if pos + 1 >= (Y * X) as i32 {
      return true;
    }

    for i in 0 .. 8 {
      let (y_, x_) = (y + DIRs[i], x + DIRs[i + 1]);
      if y_ >= 0 && x_ >= 0 && (y_ as usize) < Y && (x_ as usize) < X && M[y_ as usize][x_ as usize] == -1 {
        M[y_ as usize][x_ as usize] = pos + 1;
        if Self::dfs(M, y_, x_, pos + 1) {
          return true;
        }
        M[y_ as usize][x_ as usize] = -1;
      }
    }
    return false;
  }

  pub fn tour_of_knight(m: i32, n: i32, r: i32, c: i32) -> Vec<Vec<i32>> {
    let mut M = vec![vec![-1; n as usize]; m as usize];
    M[r as usize][c as usize] = 0;

    if Self::dfs(&mut M, r, c, 0) {
      return M;
    }

    return M;
  }
}
```
```python []
DIRs = [-2, 1, 2, 1, -2, -1, 2, -1, -2]

class Solution:

  def dfs(self, M, y, x, pos):
    Y, X = len(M), len(M[0])
    if pos >= Y * X - 1:
      return True

    for i in range(8):
      y_, x_ = y + DIRs[i], x + DIRs[i + 1]
      if y_ >= 0 and x_ >= 0 and y_ < Y and x_ < X and M[y_][x_] == -1:
        M[y_][x_] = pos + 1
        if self.dfs(M, y_, x_, pos + 1):
          return True
        M[y_][x_] = -1
    
    return False
    

  def tourOfKnight(self, m: int, n: int, r: int, c: int) -> List[List[int]]:
    M = [[-1] * n for _ in range(m)]
    M[r][c] = 0
    if self.dfs(M, r, c, 0):
      return M
```
