# Python/Rust: straightforward liniar simulation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4813859/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4813859/)

---

# Intuition

Put the values in two arrays, then iterate from `2` to `n` and at each step check last value in both arrays and based on the comparison, append to appropriate array. At the end merge them.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn result_array(nums: Vec<i32>) -> Vec<i32> {
    let (mut arr1, mut arr2) = (vec![nums[0]], vec![nums[1]]);
    for i in 2 .. nums.len() {
      if arr1[arr1.len() - 1] > arr2[arr2.len() - 1] {
        arr1.push(nums[i]);
      } else {
        arr2.push(nums[i]);
      }
    }
    
    arr1.append(&mut arr2);
    return arr1;
  }
}
```
```python []
class Solution:
  def resultArray(self, nums: List[int]) -> List[int]:
    arr1, arr2 = [nums[0]], [nums[1]]
    for i in range(2, len(nums)):
      if arr1[-1] > arr2[-1]:
        arr1.append(nums[i])
      else:
        arr2.append(nums[i])

    return arr1 + arr2
```