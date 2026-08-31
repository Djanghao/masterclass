# [Golang] Simple solution

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3706061/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3706061/)

---

# Complexity
- Time complexity: O(N Log N)
- Space complexity: O(1)

# Code
```
func minimizeSum(nums []int) int {
  sort.Ints(nums)
  n := len(nums)
  // Since we can only make at most 2 modifications
  // We either change the first two elements, last two elements
  // or the first and last element.
  res := nums[n-3] - nums[0]
  if nums[n-2] - nums[1] < res {
    res = nums[n-2] - nums[1]
  }
  if nums[n-1] - nums[2] < res {
    res = nums[n-1] - nums[2]
  }
  return res
}

func abs(a int) int {
  if a < 0 {
    return -a
  }
  return a
}
```