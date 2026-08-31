# Python/Rust try all combinations from every position.

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4744591/](https://leetcode.com/problems/most-frequent-prime/solutions/4744591/)

---

# Intuition

Basically implement what a question asks: for every y, x pair try all 8 directions increasing a number until you can't move anymore. If the number is a prime, save it in a counter.

Then check the maximum count in a counter and store it. Then find maximum value with this counter and return it

# Complexity
- Time complexity: $O(m^3)$
- Space complexity: $O(m^3)$

# Code
```Rust []
use std::collections::HashMap;

impl Solution {

  fn is_prime(n: i32) -> bool {
    if n <= 2 {
      return false;
    }

    for i in 2 ..= (n as f64).sqrt() as i32 {
      if n % i == 0 {
        return false;
      }
    }

    return true;
  }

  pub fn most_frequent_prime(M: Vec<Vec<i32>>) -> i32 {
    let mut nums: HashMap<i32, i32> = HashMap::new();
    let (Y, X) = (M.len(), M[0].len());
    let dirs = [-1, 0, 1, -1, 1, 1, 0, -1, -1];

    for y in 0 .. Y {
      for x in 0 .. X {
        for i in 0 .. 8 {
          let (mut v, mut y_, mut x_) = (M[y][x], y, x);
          while ((y_ as i32 + dirs[i]) as usize) < Y && ((x_ as i32 + dirs[i + 1]) as usize) < X {
            y_ = (y_ as i32 + dirs[i]) as usize;
            x_ = (x_ as i32 + dirs[i + 1]) as usize;
            v = v * 10 + M[y_][x_];
            if Self::is_prime(v) {
              *nums.entry(v).or_default() += 1;
            }
          }
        }
      }
    }

    if nums.is_empty() {
      return -1;
    }

    let (mut cnt, mut res) = (0, 0);
    for c in nums.values() {
      cnt = cnt.max(*c);
    }

    for (v, c) in nums {
      if c == cnt {
        res = res.max(v);
      }
    }

    return res;
  }
}
```
```python []
import math
 
class Solution:

  def _is_prime(self, n):
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

  def mostFrequentPrime(self, M: List[List[int]]) -> int:
    nums = defaultdict(int)
    Y, X = len(M), len(M[0])
    for y in range(Y):
      for x in range(X):
        for dy, dx in [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]:
          y_, x_ = y, x
          v = M[y][x]
          while Y > y_ + dy >= 0 and X > x_ + dx >= 0:
            y_ += dy
            x_ += dx
            v = v * 10 + M[y_][x_]
            if self._is_prime(v):
              nums[v] += 1

    if not nums:
      return -1
    
    cnt, res = max(nums.values()), 0
    for v, c in nums.items():
      if c == cnt:
        res = max(res, v)
    
    return res
```