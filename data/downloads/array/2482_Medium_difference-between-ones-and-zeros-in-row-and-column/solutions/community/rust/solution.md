# Rust/Python/Go Using only values of ones.

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3488406/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3488406/)

---

# Intuition
You need to calculate number of ones and zeros for every columns and rows. But you can also see that you do not need both of them. You can derive the values of the zeros by subtracting the values of ones from n.

So `D[i][j] = C[j] + R[i] - (n - C[j]) - (m - R[i]) = 2 (C[j] + R[i]) - (m + n)`

BTW, you also do not neeed to create a new matrix and just modify the one given to you (like I did in Go)


# Complexity
- Time complexity: $O(mn)$
- Space complexity: $O(m + n)$

```Rust []
impl Solution {
  pub fn ones_minus_zeros(M: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let (Y, X) = (M.len(), M[0].len());
    let k = (Y + X) as i32;
    let mut col = vec![0; X];
    let mut row = vec![0; Y];

    for y in 0 .. Y {
      for x in 0 .. X {
        col[x] += M[y][x];
        row[y] += M[y][x];
      }
    }

    let mut res = vec![vec![0; X]; Y];
    for y in 0 .. Y {
      for x in 0 .. X {
        res[y][x] = 2 * (col[x] + row[y]) - k;
      }
    }
    return res;
  }
}
```
```python []
class Solution:
  def onesMinusZeros(self, M: List[List[int]]) -> List[List[int]]:
    Y, X = len(M), len(M[0])
    col, row = [0] * X, [0] * Y

    for y in range(Y):
      for x in range(X):
        col[x] += M[y][x]
        row[y] += M[y][x]
    
    res = [[0] * X for _ in range(Y)]
    for y in range(Y):
      for x in range(X):
        res[y][x] = 2 * (col[x] + row[y]) - (Y + X)
    return res
```
```Go []
func onesMinusZeros(M [][]int) [][]int {
  ny, nx := len(M), len(M[0])
  k := ny + nx
  row := make([]int, nx)
  col := make([]int, ny)

  for y := 0; y < ny; y++ {
    for x := 0; x < nx; x++ {
      row[x] += M[y][x]
      col[y] += M[y][x]
    }
  }

  for y := 0; y < ny; y++ {
    for x := 0; x < nx; x++ {
      M[y][x] = 2 * (row[x] + col[y]) - k
    }
  }

  return M
}
```

