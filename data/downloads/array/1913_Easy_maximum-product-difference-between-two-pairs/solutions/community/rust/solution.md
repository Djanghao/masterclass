# Rust/Go/Python 2 lines, sort. Also you can do this in O(n)

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418221/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418221/)

---

# Intuition
As all values are positive, you need to find the smallest two elements and the biggest two elements. You can do this in linear time  but this is too much work. 

Because what you can do is just sort everything and take first two and last two. In Py/Rust/Go it will be just two lines

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn max_product_difference(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();
    return nums[nums.len() - 1] * nums[nums.len() - 2] - nums[0] * nums[1];
  }
}
```
```Go []
import "sort"

func maxProductDifference(nums []int) int {
  sort.Ints(nums)
  return nums[len(nums) - 1] * nums[len(nums) - 2] - nums[0] * nums[1]
}
```
```Python []
class Solution:
  def maxProductDifference(self, nums: List[int]) -> int:
    nums.sort()
    return nums[-1] * nums[-2] - nums[0] * nums[1]
```