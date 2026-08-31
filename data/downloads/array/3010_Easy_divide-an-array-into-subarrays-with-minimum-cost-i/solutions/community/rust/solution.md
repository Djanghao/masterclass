# Python/Rust linear solution with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4645904/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4645904/)

---

# Intuition

It is clear that you are forced to take the first item. So no matter what put it in the answer. Now out of the remaining you need to take two items which are the smallest. 

You can sort and take two smallest, but you can also do this in linear time by iterating over the array once.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```python []
class Solution:
  def minimumCost(self, nums: List[int]) -> int:
    min_1, min_2 = float('inf'), float('inf')
    for v in nums[1:]:
      if v < min_1:
        min_2, min_1 = min_1, v
      elif v < min_2:
        min_2 = v
    
    return nums[0] + min_1 + min_2
```
```Rust []
impl Solution {
  pub fn minimum_cost(nums: Vec<i32>) -> i32 {
    let (mut min_1, mut min_2) = (i32::MAX, i32::MAX);
    for i in 1 .. nums.len() {
      if nums[i] < min_1 {
        min_2 = min_1;
        min_1 = nums[i];
      } else if nums[i] < min_2 {
        min_2 = nums[i];
      }
    }

    return nums[0] + min_1 + min_2;
  }
}
```