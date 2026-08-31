# Rust/Python/Go simple linear solution with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4344802/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4344802/)

---

# Intuition

Lets look at a simpler problem you have two people, not three. If we have `n` candies, how many ways you can distribute them? It will be `n + 1`. But what is some of them might be above `limit`. How many will it be `2 * max(0, n - m)`. So in total the answer will be `n + 1 - 2 * max(0, n - m)`. We need to trim it to zero.

So now for three people we check every which we give to the first element and use the formula to decide how much will it go to other two people using our formula.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def distributeCandies(self, n: int, limit: int) -> int:
    res = 0
    for i in range(min(n, limit) + 1):
      v = n - i
      res += max(0, v + 1 - 2 * max(0, v - limit))
    return res
```
```Rust []
impl Solution {
  pub fn distribute_candies(n: i32, limit: i32) -> i64 {
    let mut res = 0;
    for i in 0 .. n.min(limit) + 1 {
      res += 0.max(n - i + 1 - 2 * 0.max(n - i - limit)) as i64;
    }
    return res;
  }
}
```
```Go []
func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func distributeCandies(n int, limit int) int64 {
  res := 0
  for i := 0; i <= min(n, limit); i++ {
    res += max(0, n - i + 1 - 2 * max(0, n - i - limit))
  }
  return int64(res)
}
```