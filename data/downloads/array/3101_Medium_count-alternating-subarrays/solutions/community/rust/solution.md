# Rust/Python two pointers solution with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4949708/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4949708/)

---

# Intuition

Standard two pointers solution. Have some value which tracks the previous number you have seen. Now move right pointer and check if the value you see at this pointer is different from the previous seen. 

If they are the same, you can't expand the interval and should update left pointer to right pointer. Update the previous value.

And increase the result by `pos_r - pos_l + 1`

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn count_alternating_subarrays(nums: Vec<i32>) -> i64 {
    let (mut res, mut pos_l, mut prev_v) = (0, 0, -1);
    for pos_r in 0 .. nums.len() {
      if nums[pos_r] == prev_v {
        pos_l = pos_r;
      }
      prev_v = nums[pos_r];
      res += (pos_r - pos_l + 1) as i64;
    }
    return res;
  }
}
```
```python []
class Solution:
  def countAlternatingSubarrays(self, nums: List[int]) -> int:
    res, pos_l, prev_c = 0, 0, -1
    for pos_r in range(len(nums)):
      if nums[pos_r] != prev_c:
        prev_c = nums[pos_r]
      else:
        pos_l = pos_r

      res += pos_r - pos_l + 1

    return res
```