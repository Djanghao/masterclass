# Python/Rust: Count number of values in Y and outside. Quadratic solution with constant time

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813946/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813946/)

---

# Intuition
The idea is simple, but it takes some time to write everything. Count how many 0/1/2 are in Y `cnts_y` and in other places `cnts_o`. To do this I count it everywhere (first double loop) and then check all values in `Y`. While doing this you need to remove the values from `cnts_y`. This is a second loop and lines above it.

Now that you have two such arrays (each of length 3), you check all possible combinations and count how many values you should change. 


# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn minimum_operations_to_write_y(M: Vec<Vec<i32>>) -> i32 {
    let (n, k) = (M.len(), M.len() / 2);
    let (mut cnts_o, mut cnts_y) = ([0, 0, 0], [0, 0, 0]);
    
    for y in 0 .. n {
      for x in 0 .. n {
        cnts_o[M[y][x] as usize] += 1;
      }
    }
    
    cnts_y[M[k][k] as usize] += 1;
    cnts_o[M[k][k] as usize] -= 1;
    
    for i in 0 .. k {
      cnts_y[M[i][i] as usize] += 1;
      cnts_o[M[i][i] as usize] -= 1;
      cnts_y[M[i][n - 1 - i] as usize] += 1;
      cnts_o[M[i][n - 1 - i] as usize] -= 1;
      cnts_y[M[k + i + 1][k] as usize] += 1;
      cnts_o[M[k + i + 1][k] as usize] -= 1;  
    }
    
    let (mut s_y, mut s_o, mut res) = (cnts_y[0] + cnts_y[1] + cnts_y[2], cnts_o[0] + cnts_o[1] + cnts_o[2], (n * n) as i32 + 1);
    for i in 0 .. 3 {
      for j in 0 .. 3 {
        if i != j {
          let tmp = s_y - cnts_y[i] + s_o - cnts_o[j];
          res = res.min(tmp);
        }
      }
    }
    
    return res;
  }
}
```
```python []
class Solution:
  def minimumOperationsToWriteY(self, M: List[List[int]]) -> int:
    n = len(M)
    k = n // 2
    cnts_o = [0, 0, 0]
    cnts_y = [0, 0, 0]

    for y in range(n):
      for x in range(n):
        cnts_o[M[y][x]] += 1

    cnts_y[M[k][k]] += 1
    cnts_o[M[k][k]] -= 1

    for i in range(k):
      cnts_y[M[i][i]] += 1
      cnts_o[M[i][i]] -= 1
      cnts_y[M[i][n - 1 - i]] += 1
      cnts_o[M[i][n - 1 - i]] -= 1
      cnts_y[M[k + i + 1][k]] += 1
      cnts_o[M[k + i + 1][k]] -= 1

    s_y, s_o, res = sum(cnts_y), sum(cnts_o), n * n + 1
    for i in range(3):
      for j in range(3):
        if i != j:
          tmp = s_y - cnts_y[i] + s_o - cnts_o[j]
          res = min(res, tmp)
    
    return res
```