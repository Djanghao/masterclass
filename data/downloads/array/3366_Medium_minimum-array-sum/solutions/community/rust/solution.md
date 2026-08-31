# Rust/Python memoization and DP with explanation.

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-sum/solutions/6080364/](https://leetcode.com/problems/minimum-array-sum/solutions/6080364/)

---

# Intuition

At each position you can either:
 - do `op1`
 - do `op2`
 - do `op1 -> op2`
 - do `op2 -> op1`

Of course you need to check if the conditions are suitable:
 - number of `op1` and `op2` are positive
 - values after `op2`: `nums[pos] - k` are bigger or equal to zero

So you can try each of them and check the minimum and cache the result whic gives you a memoization solution

```python []
class Solution:
  def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:

    @cache
    def dp(pos, op_1, op_2):
      if pos == len(nums) or op_1 + op_2 == 0:
        return sum(nums[pos:])

      results, x = [], nums[pos]
      if op_1 and op_2:
        num_left = (x + 1) // 2 - k
        if num_left >= 0:
          results.append(num_left + dp(pos + 1, op_1 - 1, op_2 - 1))

        if nums[pos] - k >= 0:
          num_left = (x - k + 1) // 2
          results.append(num_left + dp(pos + 1, op_1 - 1, op_2 - 1))

      if op_1:
        num_left = (x + 1) // 2
        results.append(num_left + dp(pos + 1, op_1 - 1, op_2))

      if op_2 and x >= k:
        results.append(x - k + dp(pos + 1, op_1, op_2 - 1))

      results.append(x + dp(pos + 1, op_1, op_2))
      return min(results)
    
    return dp(0, op1, op2)
```

As you see each of `pos, op1, op2` will be checked once so complexity is a multiplication of them. Now you can also convert this to a DP solution.


# Complexity
- Time complexity: $O(n \\cdot op1 \\cdot op2)$
- Space complexity: $O(n \\cdot op1 \\cdot op2)$

# Code
```python []
class Solution:
  def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:
    n = len(nums)
    dp = [[[float('inf')] * (op2 + 1) for _ in range(op1 + 1)] for _ in range(n + 1)]
    
    for o1 in range(op1 + 1):
      for o2 in range(op2 + 1):
        dp[n][o1][o2] = 0
    
    for pos in range(n - 1, -1, -1):
      for o1 in range(op1 + 1):
        for o2 in range(op2 + 1):
          min_v, x = nums[pos] + dp[pos + 1][o1][o2], nums[pos]
         
          if o1 > 0 and o2 > 0:
            num_left = (x + 1) // 2 - k
            if num_left >= 0:
              min_v = min(min_v, num_left + dp[pos + 1][o1 - 1][o2 - 1])
            if x - k >= 0:
              min_v = min(min_v, (x - k + 1) // 2 + dp[pos + 1][o1 - 1][o2 - 1])
          
          if o1 > 0:
            min_v = min(min_v, (x + 1) // 2 + dp[pos + 1][o1 - 1][o2])
        
          if o2 > 0 and x >= k:
            min_v = min(min_v, x - k + dp[pos + 1][o1][o2 - 1])
          
          dp[pos][o1][o2] = min_v
    
    return dp[0][op1][op2]
```
```rust []
impl Solution {
  pub fn min_array_sum(nums: Vec<i32>, k: i32, op1: i32, op2: i32) -> i32 {
    let n = nums.len();
    let op1 = op1 as usize;
    let op2 = op2 as usize;
    let mut dp = vec![vec![vec![i32::MAX; op2 + 1]; op1 + 1]; n + 1];

    for o1 in 0..=op1 {
      for o2 in 0..=op2 {
        dp[n][o1][o2] = 0;
      }
    }

    for pos in (0..n).rev() {
      for o1 in 0..=op1 {
        for o2 in 0..=op2 {
          let x = nums[pos];
          let mut min_v = x + dp[pos + 1][o1][o2];

          if o1 > 0 && o2 > 0 {
            let num_left = (x + 1) / 2 - k;
            if num_left >= 0 {
              min_v = min_v.min(num_left + dp[pos + 1][o1 - 1][o2 - 1]);
            }
            if x - k >= 0 {
              min_v = min_v.min((x - k + 1) / 2 + dp[pos + 1][o1 - 1][o2 - 1]);
            }
          }

          if o1 > 0 {
            min_v = min_v.min((x + 1) / 2 + dp[pos + 1][o1 - 1][o2]);
          }

          if o2 > 0 && x >= k {
            min_v = min_v.min(x - k + dp[pos + 1][o1][o2 - 1]);
          }

          dp[pos][o1][o2] = min_v;
        }
      }
    }

    dp[0][op1][op2]
  }
}
```