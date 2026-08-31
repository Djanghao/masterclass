# Rust/Python with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5479003/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5479003/)

---

# Intuition

It is clear that you should use the smallest number for the first operation. Then take the biggest value for the second. 

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def maximumPoints(self, arr: List[int], curr: int) -> int:
    arr.sort()
    res = 0

    while arr and arr[0] <= curr:
      res += curr // arr[0]
      curr %= arr[0]
      curr += arr.pop()
    return res   
```
```Rust []
impl Solution {
  pub fn maximum_points(mut arr: Vec<i32>, mut curr: i32) -> i64 {
    arr.sort_unstable();
    let mut res = 0;
    let mut pos = arr.len() - 1;

    while pos <= arr.len() && arr[0] <= curr {
      res += (curr / arr[0]) as i64;
      curr %= arr[0];
      curr += arr[pos];
      pos -= 1;
    }

    return res;
  }
}

```