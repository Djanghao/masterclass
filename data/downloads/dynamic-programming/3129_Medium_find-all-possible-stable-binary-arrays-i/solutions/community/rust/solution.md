# Rust/Python recursive solution with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5150446/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5150446/)

---

# Intuition

It is clear that this is a dynamic programming solution question, and the hardest part is to find a state. Having number of zeros and number of ones is obvious. But we somehow need to keep track of limit.

Originally I tried to track how many consequtive digits of the same type have I seen but this looked to complex. Instead I tried to have last_digit used. At first glance seems like this is not enough as there is no way to compare it to limit, but here is the approach.

If last digit is 0, then you are adding only ones. You can add any number of ones from 1 to `min(limit, num_ones)`. First number is to make sure that you do not have more consequitive ones than you can do and another so you do not use more ones than you can. And for each of those additions of ones, you invoke your `dp(num_zeros, num_ones - i, 1)`.

You do the same thing with zeros. Of course you also need to keep track of boundary conditon (if num_ones = 0 and num_zeros = 0, then return 1). And need to remember already calculated values.


# Complexity

Let $n_0$ be the number of zeros, $n_1$ the number of ones and $l$ is the limit

- Time complexity: $O(n_0 \\cdot n_1 \\cdot l)$
- Space complexity: $O(n_0 \\cdot n_1)$

# Code
```Rust []
const MOD: i32 = 1000000007;

impl Solution {

  fn dp(num_zeros: usize, num_ones: usize, last_digit: usize, limit: usize, cache: &mut Vec<Vec<Vec<i32>>>) -> i32 {
    if num_zeros == 0 && num_ones == 0 {
      return 1;
    }

    if cache[last_digit][num_zeros][num_ones] != -1 {
      return cache[last_digit][num_zeros][num_ones];
    }

    let mut res = 0;
    if last_digit == 0 {
      for i in 1 .. limit.min(num_ones) + 1 {
        res = (res + Self::dp(num_zeros, num_ones - i, 1, limit, cache)) % MOD;
      }
    } else {
      for i in 1 .. limit.min(num_zeros) + 1 {
        res = (res + Self::dp(num_zeros - i, num_ones, 0, limit, cache)) % MOD;
      }
    }

    cache[last_digit][num_zeros][num_ones] = res;
    return res;
  }

  pub fn number_of_stable_arrays(num_zeros: i32, num_ones: i32, limit: i32) -> i32 {
    let num_zeros = num_zeros as usize;
    let num_ones  = num_ones as usize;
    let limit = limit as usize;

    let mut cache = vec![vec![vec![-1; num_ones + 1]; num_zeros + 1]; 2];
    return (Self::dp(num_zeros, num_ones, 0, limit, &mut cache) + Self::dp(num_zeros, num_ones, 1, limit, &mut cache)) % MOD;
  }
}
```
```python []
MOD = 10**9 + 7

class Solution:

  @cache
  def dp(self, num_zeros: int, num_ones: int, last_digit: int, limit: int) -> int:
    if num_zeros == 0 and num_ones == 0:
      return 1

    res = 0
    if last_digit == 0:
      for i in range(1, min(limit, num_ones) + 1):
        res = (res + self.dp(num_zeros, num_ones - i, 1, limit)) % MOD
    else:
      for i in range(1, min(limit, num_zeros) + 1):
        res = (res + self.dp(num_zeros - i, num_ones, 0, limit)) % MOD
    
    return res
    

  def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
    return (self.dp(zero, one, 0, limit) + self.dp(zero, one, 1, limit)) % MOD
```
