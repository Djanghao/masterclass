# Rust/Python DP solution with explanation. To paint or not to paint

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4167061/](https://leetcode.com/problems/painting-the-walls/solutions/4167061/)

---

# Intuition

Main intuition behind the problem is that you need to consider only non-free painters. Lets look what happens when you select a specific painter `i`. In this case you can take `time[i]` other painters for free (utilizing free painter).

You are done when all painters are taken (no matter how you do it). So you initialize the function `f(i, k)` where `i` is your current position and `k` is the number of painters you need to take. Now you have 3 conditions:

 - `k <= 0`, whole work is done. Return 0. `k` can become less then zero as `time[i]` can be big
 - `i == len(cost)` you are at the end of the array but have not used all painters. So you failed the task. Return something big to penalize
 - now you have two options you either:
   - use paid painter here so pay the `cost[i]` and the number of painters you need to take is `k - 1 - time[i]`
   - do not use paid painter. So the everything stays the same

This gives us solutuion

# Complexity

- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$

# Code
```Rust []
impl Solution {

  fn dp(cache: &mut Vec<Vec<i32>>, cost: &Vec<i32>, time: &Vec<i32>, i: usize, need_to_take: i32) -> i32 {
    if need_to_take <= 0 {
      return 0;
    }
    if i >= cost.len() {
      return 1000000000;
    }
    if cache[i][need_to_take as usize] != -1 {
      return cache[i][need_to_take as usize];
    }

    let take_yes = cost[i] + Self::dp(cache, cost, time, i + 1, need_to_take - 1 - time[i]);
    let take_no  = Self::dp(cache, cost, time, i + 1, need_to_take);
    let res = take_yes.min(take_no);

    cache[i][need_to_take as usize] = res;
    return res;
  }

  pub fn paint_walls(cost: Vec<i32>, time: Vec<i32>) -> i32 {
    let n = cost.len();
    let mut cache = vec![vec![-1; n + 1]; n + 1];
    return Self::dp(&mut cache, &cost, &time, 0, n as i32);
  }
}
```
```python []
class Solution:

  def paintWalls(self, cost: List[int], time: List[int]) -> int:
    def dp(i, need_to_paint):
      if need_to_paint <= 0:
        return 0

      if i >= len(cost):
        return float('inf')

      if cache[i][need_to_paint] != -1:
        return cache[i][need_to_paint]

      res = min(
        cost[i] + dp(i + 1, need_to_paint - 1 - time[i]),
        dp(i + 1, need_to_paint)
      )

      cache[i][need_to_paint] = res
      return res

    n = len(cost)
    cache = [[-1] * (n + 1) for _ in range(n)]
    return dp(0, n)
```

BTW you can rewrite it in bottom-up approach:

```Rust []
impl Solution {

  pub fn paint_walls(cost: Vec<i32>, time: Vec<i32>) -> i32 {
    let n = cost.len();
    let mut dp = vec![vec![0; n + 1]; n + 1];
    for i in 1.. n + 1 {
      dp[n][i] = 1000000000;
    }

    for i in (0 .. n).rev() {
      for need_to_take in 1 .. n + 1 {
        let take_yes = cost[i] + dp[i + 1][0.max(need_to_take as i32 - 1 - time[i]) as usize];
        let take_no  = dp[i + 1][need_to_take];
        dp[i][need_to_take] = take_yes.min(take_no);
      }
    }

    return dp[0][n];
  }
}
```


