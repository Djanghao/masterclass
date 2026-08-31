# Rust/Python binary search with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3821077/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3821077/)

---

# Intuition
We see that there is a monotonicity constrain here:
 - if it is possible to reach in time with speed X, then it is possible to reach in time with any X + a (for positive a)
 - if it is not possible to reach in time with speed X, then it is not possible to reach in time with any X - a (for positive a)

Which means that you can use binary search. The helper function `time_finish(dist, speed)` and returns how much time will you need. You add all ceils until the last one and add a real division of the last one.

The only thing is to find what values are unreachable. And this is: `len(dist) - 1 + dist[-1] / hi > hour`

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code

```Rust []
impl Solution {

  fn time_finish(dist: &Vec<i32>, speed: f64) -> f64 {
    let mut total_time = 0.;
    let n = dist.len();
    for i in 0 .. n - 1 {
      total_time += ((dist[i] as f64) / speed).ceil();
    }
    return total_time + (dist[n - 1] as f64) / speed;
  }

  pub fn min_speed_on_time(dist: Vec<i32>, hour: f64) -> i32 {
    let (mut lo, mut hi) = (1, i32::MAX - 1);
    if dist.len() as f64 - 1. + (dist[dist.len() - 1] as f64) / (hi as f64) > hour {
      return -1;
    }

    while lo < hi {
      let mut mi = (lo + hi) / 2;
      if Self::time_finish(&dist, mi as f64) <= hour {
        hi = mi;
      } else {
        lo = mi + 1;
      }
    }

    return hi;
  }
}
```
```python []
class Solution:

  def time_finish(self, dist: List[int], speed: float):
    total_time = 0
    for d in dist[:-1]:
      total_time += ceil(d / speed)
    return total_time + dist[-1] / speed

  def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
    lo, hi = 1, 2**31
    if len(dist) - 1 + dist[-1] / hi > hour:
      return -1

    while lo < hi:
      mi = (lo + hi) // 2
      if self.time_finish(dist, mi) <= hour:
        hi = mi
      else:
        lo = mi + 1
    
    return hi
```
