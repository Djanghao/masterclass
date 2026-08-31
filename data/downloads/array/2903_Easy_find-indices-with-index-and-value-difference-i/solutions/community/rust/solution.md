# Rust/Python, Naive o(n^2) solution with link to efficient solution

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169861/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169861/)

---

# Intuition
Straight forward check every pair of indices and return values if found. 

For efficient solution [see my other answer](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4169817/python-linear-solution-with-explanation-find-min-max/)

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
    for i in range(len(nums)):
      for j in range(len(nums)):
        if abs(i - j) >= indexDifference and abs(nums[i] - nums[j]) >= valueDifference:
          return [i, j]
    
    return [-1, -1]
```
```Rust []
impl Solution {
  pub fn find_indices(nums: Vec<i32>, index_difference: i32, value_difference: i32) -> Vec<i32> {
    for i in 0 .. nums.len() {
      for j in 0 .. nums.len() {
        if (i as i32 - (j as i32)).abs() >= index_difference && (nums[i] - nums[j]).abs() >= value_difference {
          return vec![i as i32, j as i32];
        }
      }
    }
    return vec![-1, -1];
  }
}

```
