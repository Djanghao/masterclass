# Python/Rust, track light intervals. Detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/3571615/](https://leetcode.com/problems/brightest-position-on-street/solutions/3571615/)

---

# Intuition

Each lightpost  `p, d` creates an interval `[p - d, p + d]` and it adds 1 unit of light to every position in this interval. Now our question is to find the first position which has the biggest amount of light.

Notice that instead of adding 1 to every position in interval `[a, b]`, we instead can add one to position `a` and subtract one from position `b - 1`. 

Now instead of checking for every value, we can check only points which add/remove values in a sorted order and calculate the total count of light there (changing it based on whether we added light or removed it). And during this time we will be finding the maximum amount of light and the position it occured

# Complexity

We get 2 n data points, and we only need to sort them.

- Time complexity: $O(n \\log n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn brightest_position(lights: Vec<Vec<i32>>) -> i32 {
    let mut data = Vec::with_capacity(lights.len());
    for v in lights {
      data.push((v[0] - v[1], 1));
      data.push((v[0] + v[1] + 1, -1));
    }
    data.sort_unstable();

    let (mut cnt, mut best_cnt, mut best_pos) = (0, 0, 0);
    for v in data {
      cnt += v.1;
      if cnt > best_cnt {
        best_cnt = cnt;
        best_pos = v.0;
      }
    }
    return best_pos;
  }
}
```
```python []
class Solution:
  def brightestPosition(self, lights: List[List[int]]) -> int:
    data = []
    for (p, d) in lights:
      data.append((p - d, 1))
      data.append((p + d + 1, -1))
    
    data.sort()
    cnt, best_pos, best_cnt = 0, 0, 0
    for (p, val) in data:
      cnt += val
      if cnt > best_cnt:
        best_cnt = cnt
        best_pos = p

    return best_pos
```
