# Rust/Python greedy solution 3 lines

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/3925862/](https://leetcode.com/problems/wiggle-sort/solutions/3925862/)

---

# Intuition
The straight forward solution is to sort and take values alternatively from begin/end.

Once the linear solution was hinted you need to know that you should be greedy. So I tried the most straightforward lazy way of changing the value if the order does not look correct. And it worked.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn wiggle_sort(nums: &mut Vec<i32>) {
    for i in 0 .. nums.len() - 1 {
      if (i % 2 == 0 && nums[i] > nums[i + 1]) || (i % 2 == 1 && nums[i] < nums[i + 1]) {
        nums.swap(i, i + 1);
      }
    }
  }
}
```
```python []
class Solution:
  def wiggleSort(self, nums: List[int]) -> None:
    for i in range(len(nums) - 1):
      if (i % 2 == 0 and nums[i] > nums[i + 1]) or (i % 2 == 1 and nums[i] < nums[i + 1]):
        nums[i], nums[i + 1] = nums[i + 1], nums[i]
```
