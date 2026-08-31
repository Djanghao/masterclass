# Rust/Python two dfs with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5057228/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5057228/)

---

# Intuition

As we can't change first and last value, if the sizes are `(2, 1)` or `(1, 2)` then the answer is false.

Now also if you can't find the path from first and last position, this means that you do not even need to change anything so the asnwer is true.

Now if one path exist, you should be able to reach the end position without using any of the values from it. So you do two DFS. In them you zero out all the values on the path and try the second one

# Complexity
- Time complexity: $O(n \\cdot m)$
- Space complexity: $O(n \\cdot m)$

# Code

```Python []
class Solution:

  def dfs(self, M, y, x):
    Y, X = len(M), len(M[0])
    if y == Y - 1 and x == X - 1:
      return True

    if y == Y or x == X or M[y][x] == 0:
      return False
    
    M[y][x] = 0
    return self.dfs(M, y + 1, x) or self.dfs(M, y, x + 1)

  def isPossibleToCutPath(self, M: List[List[int]]) -> bool:
    Y, X = len(M), len(M[0])
    if Y * X == 2:
      return False

    if not self.dfs(M, 0, 0):
      return True

    M[0][0], M[Y - 1][X - 1] = 1, 1
    return not self.dfs(M, 0, 0)
```
```Rust []
impl Solution {

  fn dfs(M: &mut Vec<Vec<i32>>, y: usize, x: usize) -> bool {
    let (Y, X) = (M.len(), M[0].len());
    if y == Y - 1 && x == X - 1 {
      return true;
    }

    if y == Y || x == X || M[y][x] == 0 {
      return false;
    }

    M[y][x] = 0;
    return Self::dfs(M, y + 1, x) || Self::dfs(M, y, x + 1);
  }

  pub fn is_possible_to_cut_path(mut M: Vec<Vec<i32>>) -> bool {
    let (Y, X) = (M.len(), M[0].len());
    if Y * X == 2 {
      return false;
    }

    if !Self::dfs(&mut M, 0, 0) {
      return true;
    }

    M[0][0] = 1;
    M[Y - 1][X - 1] = 1;
    return !Self::dfs(&mut M, 0, 0);
  }
}
```