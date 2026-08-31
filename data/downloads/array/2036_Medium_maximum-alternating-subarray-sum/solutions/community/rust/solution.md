# Rust/Python. Kadane with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3573212/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3573212/)

---

# Intuition

This is similar to [maximum subarray](https://en.wikipedia.org/wiki/Maximum_subarray_problem) problem. We need to modify the algorithm to account for two things:
 - alternation of signs. If we have $a_0, a_1, a_2, a_3, ...$, we need to alternate `+, -, +, -`. So array is $a_0, -a_1, a_2, -a_3, ...$. There is no need to modify the array, just multiply by 1/-1 numbers
 - you need two check for two different starting positions. Starting from odd and even positions

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn maximum_alternating_subarray_sum(nums: Vec<i32>) -> i64 {
    let (mut curr, mut best_val, mut mult) = (0, i64::MIN, 1);
    for i in 0 .. nums.len() {
      curr += (nums[i] as i64) * mult;
      mult *= -1;

      if curr > best_val {
        best_val = curr;
      }
      if mult == 1 && curr < 0 {
        curr = 0;
      }
    }

    curr = 0;
    mult = 1;
    for i in 1 .. nums.len() {
      curr += (nums[i] as i64) * mult;
      mult *= -1;

      if curr > best_val {
        best_val = curr;
      }
      if mult == 1 && curr < 0 {
        curr = 0;
      }
    }

    return best_val;
  }
}
```
```python []
class Solution:
  def maximumAlternatingSubarraySum(self, nums: List[int]) -> int:
    curr, mult, best_val = 0, 1, -float('inf')
    for v in nums:
      curr += v * mult
      mult *= -1
      if curr > best_val:
        best_val = curr
      
      if mult == 1 and curr < 0:
        curr = 0

    curr, mult = 0, 1
    for v in nums[1:]:
      curr += v * mult
      mult *= -1
      if curr > best_val:
        best_val = curr
      
      if mult == 1 and curr < 0:
        curr = 0
    
    return best_val
```

I am sure that it is possible to bombine those two loops, as they are basically identical. Will look how to do it next time

