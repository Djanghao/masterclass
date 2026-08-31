# Rust/Python/Go with detailed explanation. Take or not take

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4344601/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4344601/)

---

# Intuition
Lets take a look what is happening while we are iterating over the numbers. We will track two things: sums we can achieve so far and the maximum length which achives this sum. In the beginning our sum is 0 and the lenght it achieves it is 0. Now when we see a number, two things can happen. You can ignore it and nothing will change. Or you can take it and increase each value in the sum by this value and check whether the length inceases.

Of course you should not store any values above the target so the lenght of your data will never increase the `target`. This gives us a solution which uses map.

```
class Solution:
  def lengthOfLongestSubsequence(self, nums: List[int], target: int) -> int:
    data = {0: 0}
    for val in nums:
      if val > target:
        continue

      tmp = {k: v for k, v in data.items()}
      for v, l in data.items():
        nxt_val = v + val
        if nxt_val > target:
          continue
        
        if nxt_val not in tmp or tmp[nxt_val] < l + 1:
          tmp[nxt_val] = l + 1
      
      data = tmp

    return -1 if target not in data else data[target]
```

The issue with maps is that although it is $O(1)$ but it is way more expensive than the same check in array. So we can rewrite it with arrays which shows ~2x faster results

# Complexity
- Time complexity: $O(target * n)$
- Space complexity: $O(target)$

# Code
```Go []
func lengthOfLongestSubsequence(nums []int, target int) int {
  dp := make([]int, target + 1)
  dp[0] = 1

  for _, v := range nums {
    for i := target - v; i >= 0; i-- {
      if dp[i] > 0 && dp[i] + 1 > dp[i + v] {
        dp[i + v] = dp[i] + 1
      }
    }
  }

  return dp[target] - 1
}
```
```python []
class Solution:
  def lengthOfLongestSubsequence(self, nums: List[int], target: int) -> int:
    dp = [-1] * (target + 1)
    dp[0] = 0

    for v in nums:
      for i in range(target - v, -1, -1):
        if dp[i] > -1 and dp[i] + 1 > dp[i + v]:
          dp[i + v] = dp[i] + 1

    return dp[target]
```
```Rust []
impl Solution {
  pub fn length_of_longest_subsequence(nums: Vec<i32>, target: i32) -> i32 {
    let target = target as usize;
    let mut dp = vec![-1; target + 1];
    dp[0] = 0;

    for v in nums {
      let v = v as usize;
      if v > target {
        continue
      }

      for i in (0 .. target - v + 1).rev() {
        if dp[i] > -1 && dp[i] + 1 > dp[i + v] {
          dp[i + v] = dp[i] + 1;
        }
      }
    }

    return dp[target];
  }
}
```
