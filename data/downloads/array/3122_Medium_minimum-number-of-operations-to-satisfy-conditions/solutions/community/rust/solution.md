# Rust/Python DP solution go column by column with an explanation

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052646/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052646/)

---

# Intuition

Imagine that for a previous column you calculated the minimum number of changes you need to do to transform the column to X. You store them in 10 digit array dp_prev.

Now you can easily use it to calculate the result for the next column. To do this you just need to sum the changes needed to convert this column to the digit and then add it to minimum you can achieve in dp_prev (making sure it is not the same digit). Here I iterate over all the digits to find min, but you can do this in O(1).

# Complexity
- Time complexity: $O(n \\cdot m \\cdot d) = O(n \\cdot m)$

- Space complexity: $O(d) = O(1) $

# Code
```Rust []
impl Solution {
  pub fn minimum_operations(M: Vec<Vec<i32>>) -> i32 {
    let (Y, X) = (M.len(), M[0].len());
    
    let mut dp_prev = [Y; 10];
    for y in 0 .. Y {
      dp_prev[M[y][0] as usize] -= 1;
    }
    
    for x in 1 .. X {
      let mut dp = [Y; 10];
      for y in 0 .. Y {
        dp[M[y][x] as usize] -= 1
      }
      
      for i in 0 .. 10 {
        let mut min_val = usize::MAX;
        for j in 0 .. 10 {
          if i != j {
            min_val = min_val.min(dp_prev[j]);
          }
        }
        dp[i] += min_val;
      }
      
      dp_prev = dp;
    }
    
    return *dp_prev.iter().min().unwrap() as i32;
  }
}
```
```python []
class Solution:
  def minimumOperations(self, M: List[List[int]]) -> int:
    Y, X = len(M), len(M[0])

    dp_prev = [Y] * 10
    for y in range(Y):
      dp_prev[M[y][0]] -= 1

    for x in range(1, X):
      dp = [Y] * 10
      for y in range(Y):
        dp[M[y][x]] -= 1

      for i in range(10):
        min_val = min(dp_prev[j] for j in range(10) if i != j)
        dp[i] += min_val

      dp_prev = dp

    return min(dp_prev)
```