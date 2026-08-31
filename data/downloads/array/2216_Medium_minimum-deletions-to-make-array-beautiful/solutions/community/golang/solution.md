# Easy to understand two pointer solution in Golalng

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/2208689/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/2208689/)

---

```go
func minDeletion(nums []int) int {
  left, right := 0, 1
  var deletions int
  for right < len(nums) {
    // Move the right pointer as much as needed so that the elements at
	// left and right are different
    for right < len(nums) && nums[right] == nums[left] {
      right++
      deletions++
    }
	// Make right and left adjacent
    right += 2
    left = right - 1
  }
  if (len(nums)-deletions)%2 == 1 { // length of the array after deletions is odd
    deletions++
  }
  return deletions
}
```