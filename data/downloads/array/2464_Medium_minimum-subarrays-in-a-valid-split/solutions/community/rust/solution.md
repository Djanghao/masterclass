# Rust/Python dynamic programming, quadratic complexity

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/3588170/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/3588170/)

---

# Intuition
One important observation: `gcd(x, 1) = 1`. So the if array starts or ends with 1, the value will be -1.

Now lets assume that we have an array and the result for each of position.

```
pos:  0,  1, ...,  n
arr: A1, A2, ..., An
res: x1, x2, ..., xn 
```

So basically the result of array `A1 .. An` is `x1`, result of `A2, .. An` is `x2` and so on. So now the question is, what will be a result `x0` of an array  `A0, A1, A2, ..., An`?

The answer can be easily found by just looking over all possible positions positions where `gcd(A0, Ai) > 1` and finding the minimum. And + 1. 

So we do this from right to left slowly growing our array of answers.



# Complexity

Let the $n$ be the number of values in the array and the maximum value of the number is $M$, then

- Time complexity: $O(n^2 \\log M)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {

  fn gcd(mut a: i32, mut b: i32) -> i32 {
    while b != 0 {
      let tmp = a % b;
      a = b;
      b = tmp;
    }
    return a;
  }

  pub fn valid_subarray_split(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    if nums[0] == 1 || nums[n - 1] == 1 {
      return -1;
    }

    let mut dp = vec![0; n + 1];
    for i in (0 .. n).rev() {
      if nums[i] == 1 {
        dp[i] = i32::MAX;
      } else {
        let mut best_val = dp[i + 1];
        for j in i + 1 .. n {
          if Self::gcd(nums[i], nums[j]) > 1 {
            best_val = best_val.min(dp[j + 1]);
          }
        }
        if best_val == i32::MAX {
          dp[i] = i32::MAX;
        } else {
          dp[i] = best_val + 1;
        }
        
      }
    }

    if dp[0] == i32::MAX {
      return -1;
    }
    return dp[0];
  }
}
```
```python []
from math import gcd

class Solution:
  def validSubarraySplit(self, nums: List[int]) -> int:
    if nums[0] == 1 or nums[-1] == 1:
      return -1

    dp = [0] * (len(nums) + 1)
    for i in range(len(nums) - 1, -1, -1):
      if nums[i] == 1:
        dp[i] = float('inf')
      else:
        best_val = dp[i + 1]
        for j in range(i + 1, len(nums)):
          if gcd(nums[i], nums[j]) > 1:
            best_val = min(best_val, dp[j + 1])
        dp[i] = best_val + 1

    
    return dp[0] if dp[0] != float('inf') else -1
```