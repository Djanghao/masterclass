# Fully explained: Rust, Python. O(mn)

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468505/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468505/)

---

# Intuition
Create a mapping from numbers to their positions `number_to_pos`. This is needed to be able to find the position of any number in $O(1)$. Then for each row and column mark how many positions were previously marked `data_y, data_x`. This will allow you to mark them and check if full row/column is marked in $O(1)$

Afterwards just iterate over all values in array mark corresponding row/column and check if they are fully marked.

# Complexity
- Time complexity: $O(mn)$
- Space complexity: $O(mn)$

```Rust []
#[derive(Copy, Clone)]
struct Pos {
  y: usize,
  x: usize,
}

impl Solution {
  pub fn first_complete_index(arr: Vec<i32>, M: Vec<Vec<i32>>) -> i32 {
    let (Y, X) = (M.len(), M[0].len());
    let mut number_to_pos = vec![Pos{y: 0, x: 0}; arr.len() + 1];
    for i in 0 .. Y {
      for j in 0 .. X {
        number_to_pos[M[i][j] as usize] = Pos{y: i, x: j};
      }
    }

    let mut data_y = vec![0; Y];
    let mut data_x = vec![0; X];
    for i in 0 .. arr.len() {
      let p = number_to_pos[arr[i] as usize];
      data_y[p.y] += 1;
      data_x[p.x] += 1;

      if data_y[p.y] == X || data_x[p.x] == Y {
        return i as i32;
      }
    }
    return 0;
  }
}
```
```python []
class Solution:
  def firstCompleteIndex(self, arr: List[int], M: List[List[int]]) -> int:
    Y, X = len(M), len(M[0])
    number_to_pos = [() for _ in range(len(arr) + 1)]
    for i in range(Y):
      for j in range(X):
        number_to_pos[M[i][j]] = (i, j)

    data_y, data_x = [0] * Y, [0] * X
    for i, v in enumerate(arr):
      y, x = number_to_pos[v]
      data_y[y] += 1
      data_x[x] += 1

      if data_y[y] == X or data_x[x] == Y:
        return i
```
