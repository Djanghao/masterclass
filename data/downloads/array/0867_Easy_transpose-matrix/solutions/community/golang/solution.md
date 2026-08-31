# Rust/Python/Go with explanation

**Author:** SalvadorDali
**Votes:** 4
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/4384437/](https://leetcode.com/problems/transpose-matrix/solutions/4384437/)

---

# Intuition
Create a empty matrix of $x \\cdot y$ dimensions. Iterate for every x,y and put `M[x][y] = matrix[y][x]`

# Complexity
- Time complexity: $O(n \\cdot m)$
- Space complexity: $O(n \\cdot m)$

# Code
```Rust []
impl Solution {
  pub fn transpose(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let (Y, X) = (matrix.len(), matrix[0].len());
    let mut M = vec![vec![0; Y]; X];

    for y in 0 .. Y {
      for x in 0 .. X {
        M[x][y] = matrix[y][x];
      }
    }
    return M;
  }
}
```
```python []
class Solution:
  def transpose(self, A: List[List[int]]) -> List[List[int]]:
    B = [[0] * len(A) for _ in range(len(A[0]))]
    
    for y in range(len(A)):
      for x in range(len(A[0])):
        B[x][y] = A[y][x]
        
    return B
```
```Go []
func transpose(matrix [][]int) [][]int {
  Y, X := len(matrix), len(matrix[0])

  M := make([][]int, X)
  for x := 0; x < X; x++ {
    M[x] = make([]int, Y)
    for y := 0; y < Y; y++ {
      M[x][y] = matrix[y][x]
    }
  }

  return M
}
```
