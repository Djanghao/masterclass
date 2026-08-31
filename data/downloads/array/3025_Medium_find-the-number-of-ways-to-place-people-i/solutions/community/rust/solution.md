# Rust/Python bruteforce with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/6121499/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/6121499/)

---

# Intuition

Basically just do exactly what was asked:

 - try all pairs and check top/left condition
 - iterate over all other values that are not one of the pair and check area condition

# Complexity
- Time complexity: $O(n^3)$
- Space complexity: $O(1)$

# Code
```rust []
impl Solution {
  pub fn number_of_pairs(points: Vec<Vec<i32>>) -> i32 {
    let n = points.len();
    let mut res = 0;

    for i in 0..n {
      for j in 0..n {
        if i == j || points[i][0] > points[j][0] || points[i][1] < points[j][1] {
          continue;
        }

        let (x1, y1) = (points[i][0], points[i][1]);
        let (x2, y2) = (points[j][0], points[j][1]);
        let mut is_found = false;

        for k in 0..n {
          if k != i && k != j && x1 <= points[k][0] && points[k][0] <= x2 && y1 >= points[k][1] && points[k][1] >= y2 {
            is_found = true;
            break;
          }
        }

        if !is_found {
          res += 1;
        }
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def numberOfPairs(self, points: List[List[int]]) -> int:
    res, n = 0, len(points)
    for i in range(n):
      for j in range(n):
        if i == j or points[i][0] > points[j][0] or points[i][1] < points[j][1]:
          continue

        x1, y1 = points[i]
        x2, y2 = points[j]
        is_found = False

        for k in range(n):
          if k != i and k != j and (x1 <= points[k][0] <= x2 and y1 >= points[k][1] >= y2):
            is_found = True
            break
        
        if not is_found:
          res += 1

    return res
```