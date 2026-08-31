# Python/Rust boring question with a simple solution

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674215/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674215/)

---

# Intuition

The problem has a compex description with all those regions and adjacent values. Pixels are adjacent if they are up/down/left/right from one another.

We define a function `is_region` (true if this y, x is a center of the region) which for one position (x)

```
 . . .
 . x .
 . . .
```

checks that for all adjacent values absolute difference is below the threshold. Now we check all the possible center of the regions and if it is a region we calculate the sum. Now we update both values:

 - sum array `S` with the sum
 - count array `C` with 1

You will need to do this for all 9 values in a region. The result for a value will be `S[y][x] // C[y][x]` if `C[y][x] != 0` otherwise it is original value in our image.

# Complexity
- Time complexity: $O(n \\cdot m)$
- Space complexity: $O(n \\cdot m)$

# Code
```Rust []
impl Solution {

  fn is_region(M: &Vec<Vec<i32>>, y: usize, x: usize, k: i32) -> bool {
    return (M[y][x] - M[y - 1][x]).abs() <= k &&
      (M[y][x] - M[y + 1][x]).abs() <= k &&
      (M[y][x] - M[y][x - 1]).abs() <= k && 
      (M[y][x] - M[y][x + 1]).abs() <= k &&
      (M[y - 1][x - 1] - M[y - 1][x]).abs() <= k &&
      (M[y - 1][x - 1] - M[y][x - 1]).abs() <= k &&
      (M[y - 1][x + 1] - M[y - 1][x]).abs() <= k &&
      (M[y - 1][x + 1] - M[y][x + 1]).abs() <= k &&
      (M[y + 1][x + 1] - M[y + 1][x]).abs() <= k &&
      (M[y + 1][x + 1] - M[y][x + 1]).abs() <= k &&
      (M[y + 1][x - 1] - M[y + 1][x]).abs() <= k && 
      (M[y + 1][x - 1] - M[y][x - 1]).abs() <= k
  }

  pub fn result_grid(mut M: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    let (Y, X) = (M.len(), M[0].len());

    let mut S = vec![vec![0; X]; Y];
    let mut C = vec![vec![0; X]; Y];
    
    for y in 1 .. Y - 1 {
      for x in 1 .. X - 1 {
        if Self::is_region(&M, y, x, k) {
          let s = (M[y - 1][x - 1] + M[y - 1][x] + M[y - 1][x + 1] + M[y][x - 1] + M[y][x] + M[y][x + 1] + M[y + 1][x - 1] + M[y + 1][x] + M[y + 1][x + 1]) / 9;
          for i in -1 ..= 1 {
            for j in -1 ..= 1 {
              S[(y as i64 + i) as usize][(x as i64 + j) as usize] += s;
              C[(y as i64 + i) as usize][(x as i64 + j) as usize] += 1;
            }
          }
        }
      }
    }

    for y in 0 .. Y {
      for x in 0 .. X {
        if C[y][x] > 0 {
          M[y][x] = S[y][x] / C[y][x];
        }
      }
    }

    return M;
  }
}
```
```python []
class Solution:

  def is_region(self, M, y, x, k):
    if abs(M[y][x] - M[y - 1][x]) > k or abs(M[y][x] - M[y + 1][x]) > k or abs(M[y][x] - M[y][x - 1]) > k or abs(M[y][x] - M[y][x + 1]) > k:
      return False

    if abs(M[y - 1][x - 1] - M[y - 1][x]) > k or abs(M[y - 1][x - 1] - M[y][x - 1]) > k:
      return False

    if abs(M[y - 1][x + 1] - M[y - 1][x]) > k or abs(M[y - 1][x + 1] - M[y][x + 1]) > k:
      return False

    if abs(M[y + 1][x + 1] - M[y + 1][x]) > k or abs(M[y + 1][x + 1] - M[y][x + 1]) > k:
      return False

    if abs(M[y + 1][x - 1] - M[y + 1][x]) > k or abs(M[y + 1][x - 1] - M[y][x - 1]) > k:
      return False

    return True

  def resultGrid(self, M: List[List[int]], k: int) -> List[List[int]]:
    Y, X = len(M), len(M[0])
    S = [[0] * X for _ in range(Y)]
    C = [[0] * X for _ in range(Y)]

    for y in range(1, Y - 1):
      for x in range(1, X - 1):
        if self.is_region(M, y, x, k):
          s = sum(M[y - i][x - j] for i in range(-1, 2) for j in range(-1, 2)) // 9
          for i in range(-1, 2):
            for j in range(-1, 2):
              S[y - i][x - j] += s
              C[y - i][x - j] += 1

    for y in range(Y):
      for x in range(X):
        if C[y][x] > 0:
          M[y][x] = S[y][x] // C[y][x]

    return M
```

---------------

I feel like `is_region` can be rewritten with less number of checks, but didn't have time to look. If anyone has done it, please comment.