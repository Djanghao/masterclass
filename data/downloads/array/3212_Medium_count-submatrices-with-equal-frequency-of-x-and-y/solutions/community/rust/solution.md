# Python/Rust Iterate over matrix, store counts for X/Y. With explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431788/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431788/)

---

# Intuition

You need to count how many X/Y submatrix which starts at 0, 0 and ends at i,j has. You do this by remembering the results at the previous row (you have 2 rows: one for counts of X another for counts of Y). And maintain the current number of x/y in the current row.

This allows you to do the whole computation in $O(n \\cdot m)$. Now at each position check if values are equal and bigger than 0.

# Complexity
- Time complexity: $O(y \\cdot x)$
- Space complexity: $O(x)$

# Code
```Python []
class Solution:
  def numberOfSubmatrices(self, M: List[List[str]]) -> int:
    Y, X = len(M), len(M[0])
    cnt_x, cnt_y, res = [0] * (X + 1), [0] * (X + 1), 0
    for i in range(Y):
      curr_x, curr_y = 0, 0
      for j in range(X):
        if M[i][j] == 'X':
          curr_x += 1
        elif M[i][j] == 'Y':
          curr_y += 1
        cnt_x[j + 1] += curr_x
        cnt_y[j + 1] += curr_y

        if cnt_x[j + 1] == cnt_y[j + 1] and cnt_x[j + 1] > 0:
          res += 1

    return res
```
```Rust []
impl Solution {
  pub fn number_of_submatrices(M: Vec<Vec<char>>) -> i32 {
    let Y = M.len();
    let X = M[0].len();
    let mut cnt_x = vec![0; X + 1];
    let mut cnt_y = vec![0; X + 1];
    let mut res = 0;

    for i in 0..Y {
      let mut curr_x = 0;
      let mut curr_y = 0;
      for j in 0..X {
        if M[i][j] == 'X' {
          curr_x += 1;
        } else if M[i][j] == 'Y' {
          curr_y += 1;
        }
        cnt_x[j + 1] += curr_x;
        cnt_y[j + 1] += curr_y;

        if cnt_x[j + 1] == cnt_y[j + 1] && cnt_x[j + 1] > 0 {
          res += 1;
        }
      }
    }

    return res;
  }
}
```