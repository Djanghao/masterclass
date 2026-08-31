# Rust/Python simple quadratic with explanation. With link to linear

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4710126/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4710126/)

---

# Intuition

This is a medium problem for which even cubic solution will work. As it is hard to come up with cubic solution, I will show quadratic here. If you want a linear solution, see [this explanation](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4712800/rust-python-linear-solution-convert-to-pattern-matching-with-explanation/) which shows how to achieve it with z-function.

For every position check if the pattern matches (you will have `nums.len() - pattern.len()` positions). To check if they match you iterate over all the positions in pattern and check for required conditions (short circling if they do not match)

# Complexity

Let $n$ be the size of array and $p$ the size of pattern, then:

- Time complexity: $O((n - p) \\cdot p)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn is_good(pos: usize, nums: &Vec<i32>, pattern: &Vec<i32>) -> i32 {
    for i in 0 .. pattern.len() {
      if pattern[i] == 0 && nums[pos + i] != nums[pos + i + 1] {
        return 0;
      } else if pattern[i] == 1 && nums[pos + i] >= nums[pos + i + 1] {
        return 0;
      } else if pattern[i] == -1 && nums[pos + i] <= nums[pos + i + 1] {
        return 0;
      }
    }

    return 1;
  }

  pub fn count_matching_subarrays(nums: Vec<i32>, pattern: Vec<i32>) -> i32 {
    let mut res = 0;
    for i in 0 .. nums.len() - pattern.len() {
      res += Self::is_good(i, &nums, &pattern);
    }
    return res;
  }
}
```
```python []
class Solution:

  def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
    def is_good(pos):
      for i in range(len(pattern)):
        if pattern[i] == 0:
          if nums[pos + i] != nums[pos + i + 1]:
            return False
        elif pattern[i] == 1:
          if nums[pos + i] >= nums[pos + i + 1]:
            return False
        else:
          if nums[pos + i] <= nums[pos + i + 1]:
            return False
      
      return True

    return sum(is_good(i) for i in range(len(nums) - len(pattern)))       
```