# Rust/Python sorting with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/3663251/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/3663251/)

---

# Intuition

Without the restriction about **largest even sum** the solution would be extremely easy. Just sort the array and take top k elements. Now lets look what should we do if we have this restriction.

First if the sum of our top `k` elements if odd, then everything is great and nothing to do here. But what if it is not odd? We need to somehow to make it odd. And there are only two ways to do it:

 - remove the odd number and use some even instead of it
 - remove the even number and use some odd number instead of it

Now the question is, what number should we remove and which should be add. You should remove the smallest possible and add the biggest possible


# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn f(nums: &Vec<i32>, k: usize, s: i64, v: i64) -> i64 {
    if v == -1 {
      return -1;
    }

    let remainder = ((v + 1) % 2) as i32;
    for i in (0..nums.len() - k).rev() {
      if nums[i] % 2 == remainder {
        return s - v + nums[i] as i64;
      }
    }

    return -1;
  }

  pub fn largest_even_sum(mut nums: Vec<i32>, k: i32) -> i64 {
    nums.sort_unstable();
    let k = k as usize;
    let (mut s, mut smallest_odd, mut smallest_even) = (0, -1, -1);

    for i in (nums.len() - k .. nums.len()).rev() {
      s += nums[i] as i64;
      if nums[i] % 2 == 1 {
        smallest_odd = nums[i] as i64;
      } else {
        smallest_even = nums[i] as i64;
      }
    }

    if s % 2 == 0 {
      return s;
    }

    let v1 = Self::f(&nums, k, s, smallest_odd);
    let v2 = Self::f(&nums, k, s, smallest_even);

    return v1.max(v2);
  }
}
```
```python []
class Solution:

  def attempt(self, nums, k, s, v):
    if v == -1:
      return -1

    s -= v
    for i in range(k, len(nums)):
      if nums[i] % 2 == (v + 1) % 2:
        return s + nums[i]
    
    return -1

  def largestEvenSum(self, nums: List[int], k: int) -> int:
    nums.sort(reverse=True)
    print(nums)

    s, smallest_odd, smallest_even = 0, -1, -1
    for i in range(k):
      s += nums[i]
      if nums[i] % 2 == 1:
        smallest_odd = nums[i]
      else:
        smallest_even = nums[i]

    if s % 2 == 0:
      return s

    return max(
      self.attempt(nums, k, s, smallest_odd),
      self.attempt(nums, k, s, smallest_even),
    )
```
