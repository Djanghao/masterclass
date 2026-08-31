# Rust/Python n log n with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4349266/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4349266/)

---

# Intuition
We can see that horizontal and vertical bars are independent: if we found a good horizontal hole, it will work with any vertical hole (and vice versa).

So our task is to find biggest horizontal/vertical holes, and min of them will create a square.

To find biggest hole you need to find maximum number of consequitive numbers. So you sort the whole numbers and check if `prev == curr - 1`.

This gives a simple solution

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn find_hole(mut arr: Vec<i32>) -> i32 {
    arr.sort_unstable();
    let (mut res, mut cnt, mut prev) = (0, 0, -1);
    for v in arr {
      if v - 1 == prev {
        cnt += 1;
        res = cnt.max(res);
      } else {
        cnt = 0;
      }
      prev = v;
    }
    return res.max(cnt) + 2;
  }

  pub fn maximize_square_hole_area(n: i32, m: i32, h_bars: Vec<i32>, v_bars: Vec<i32>) -> i32 {
    let d = Self::find_hole(h_bars).min(Self::find_hole(v_bars));
    return d * d;
  }
}
```
```python []
class Solution:

  def find_hole(self, arr):
    prev, curr_cnt, res = -1, 0, 0
    for v in sorted(arr):
      if v - 1 == prev:
        curr_cnt += 1
        if curr_cnt > res:
          res = curr_cnt
      else:
        curr_cnt = 0
      prev = v

    if curr_cnt > res:
      res = curr_cnt

    return res + 2

  def maximizeSquareHoleArea(self, n: int, m: int, hBars: List[int], vBars: List[int]) -> int:
    return min(self.find_hole(hBars), self.find_hole(vBars))**2
```
