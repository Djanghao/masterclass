# Python/Rust sort and iterate in steps of two

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4449961/](https://leetcode.com/problems/minimum-number-game/solutions/4449961/)

---

# Intuition
Just sort the array and iterate it in pairs puttin second/first element

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code


```Rust []
impl Solution {
  pub fn number_game(mut nums: Vec<i32>) -> Vec<i32> {
    nums.sort_unstable();
    let mut res = Vec::with_capacity(nums.len());

    for i in (0 .. nums.len()).step_by(2) {
      res.push(nums[i + 1]);
      res.push(nums[i]);
    }

    return res;
  }
}
```
```python []
class Solution:
  def numberGame(self, nums: List[int]) -> List[int]:
    nums.sort()
    res = []
    for i in range(0, len(nums), 2):
      res.append(nums[i + 1])
      res.append(nums[i])
    return res
```