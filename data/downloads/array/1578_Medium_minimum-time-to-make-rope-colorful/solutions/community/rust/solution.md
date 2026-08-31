# Rust/Python/Go linear solution, constant time ~10 lines. Explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463783/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463783/)

---

# Intuition
To solve this problem you need to look at one subtask: what do you do if all your characters are the same. You need to remove all but one element and the non-remove element will have the maximum cost. And the cost will be `total_cost - max_cost`/

So you iterate over all characters and if the previous char is not the one you see now, you increase your result by     total_cost - max_cost` and update them and the prev character.

Otherwise you increase the `total_cost` and check if the maximum changed.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def minCost(self, colors: str, neededTime: List[int]) -> int:
    res, max_cost, sum_cost, prev = 0, 0, 0, ''
    for i in range(len(colors)):
      if colors[i] != prev:
        res += sum_cost - max_cost
        sum_cost, max_cost, prev = neededTime[i], neededTime[i], colors[i]
      else:
        sum_cost, max_cost = sum_cost + neededTime[i], max(max_cost, neededTime[i])
    
    return res + sum_cost - max_cost 
```
```Rust []
impl Solution {
  pub fn min_cost(colors: String, needed_time: Vec<i32>) -> i32 {
    let colors = colors.as_bytes();
    let (mut res, mut prev, mut max_cost, mut sum_cost) = (0, 0, 0, 0);

    for i in 0 .. colors.len() {
      if colors[i] != prev {
        prev = colors[i];
        res += sum_cost - max_cost;
        max_cost = needed_time[i];
        sum_cost = needed_time[i];
      } else {
        max_cost = max_cost.max(needed_time[i]);
        sum_cost += needed_time[i];
      }
    }

    return res + sum_cost - max_cost;
  }
}
```
```Go []
func minCost(colors string, neededTime []int) int {
  res, max_cost, sum_cost, prev := 0, 0, 0, ' '
  for i, c := range colors {
    if c != prev {
      res += sum_cost - max_cost
      sum_cost, max_cost, prev = neededTime[i], neededTime[i], c
    } else {
      sum_cost = sum_cost + neededTime[i]
      if neededTime[i] > max_cost {
        max_cost = neededTime[i]
      }
    }
  }

  return res + sum_cost - max_cost
}
```