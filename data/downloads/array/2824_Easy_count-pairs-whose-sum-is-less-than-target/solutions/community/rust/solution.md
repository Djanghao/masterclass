# Rust/Python 8 lines, sort and sliding window with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4487198/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4487198/)

---

# Intuition
As you need to find `i < j`, you can just sort the array. Then you use a standard two pointers approach where you check whether `nums[i] + nums[j] >= target`. If yes, it means that for that specific value of i, the potential values of j should be smaller (based on our monotonicity of array).

Otherwise all the values between i and j can be selected (so `res += j - i`) and we move to the next `i`

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1$

# Code
```Python []
class Solution:
  def countPairs(self, nums: List[int], target: int) -> int:
    nums.sort()
    i, j, res = 0 , len(nums) - 1, 0
    while i < j:
      if nums[i] + nums[j] >= target:
        j -= 1
      else:
        res += j - i
        i += 1
    return res
```
```Rust []
impl Solution {
  pub fn count_pairs(mut nums: Vec<i32>, target: i32) -> i32 {
    nums.sort_unstable();
    let (mut res, mut i, mut j) = (0, 0, nums.len() - 1);

    while i < j {
      if nums[i] + nums[j] >= target {
        j -= 1;
      } else {
        res += j - i;
        i += 1;
      }
    }

    return res as i32;
  }
}
```