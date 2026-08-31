# Python/Rust: O(n^2), try each index with explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4082825/](https://leetcode.com/problems/beautiful-towers-i/solutions/4082825/)

---

# Intuition
Just try to put the peak at each index and construct the numbers around based on it. Then see which one is the best.

For better complexity, see my other answer in towers-2

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(1)$

# Code
```javascript []
impl Solution {
  pub fn maximum_sum_of_heights(arr: Vec<i32>) -> i64 {
    let mut res = 0i64;
    for i in 0 .. arr.len() {
      let (mut curr, mut v) = (arr[i] as i64, arr[i] as i64);
      for j in i + 1 .. arr.len() {
        v = v.min(arr[j] as i64);
        curr += v;
      }

      v = arr[i] as i64;
      for j in (0 .. i).rev() {
        v = v.min(arr[j] as i64);
        curr += v;
      }

      res = res.max(curr);
    }

    return res;
  }
}
```
```python []
class Solution:
  def maximumSumOfHeights(self, arr: List[int]) -> int:
    res = 0
    for i in range(len(arr)):
      curr, v = arr[i], arr[i]
      for j in range(i + 1, len(arr)):
        v = min(v, arr[j])
        curr += v

      v = arr[i]
      for j in range(i - 1, -1, -1):
        v = min(v, arr[j])
        curr +=v

      res = max(res, curr)

    return res
```