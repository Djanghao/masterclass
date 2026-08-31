# Rust/Python 2 lines sort. Also can do linear

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393019/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393019/)

---

# Intuition
Of course you can just check each pair and it will pass, but you do not need to. If the values are all positive, the maximum will be attained with maximum values of two elements in the product.

So all you need is to get two maximum values in this list. You can do this in linear time (find one maximum and its position and then find next maximum which is not in that position). But this is a lot of work (more than 2 lines).

Instead you can just sort and then check last two elements.

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def maxProduct(self, nums: List[int]) -> int:
    nums.sort()
    return (nums[-1] - 1) * (nums[-2] - 1)
```
```Rust []
impl Solution {
  pub fn max_product(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();
    return (nums[nums.len() - 1] - 1) * (nums[nums.len() - 2] - 1);
  }
}
```