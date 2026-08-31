# [Golang] Monotonic Stack 2 pass

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3953761/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3953761/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code
```
func maximumLengthOfRanges(nums []int) []int {
  n := len(nums)
  ans := make([]int, n)
  // We'll initialize ans to 1 for all elements because
  // the single element subarray is always valid. We'll then find the length
  // of the subarray that we can extend to the left and right separately
  for i := 0; i < n; i++ {
    ans[i] = 1
  }
  // 1st pass: Left to right
  stack := list.New()
  for i := 0; i <= len(nums); i++ {
    // Monotonically decreasing stack -- top of stack must be greater
    for stack.Len() > 0 && (i == len(nums) || nums[stack.Back().Value.(int)] < nums[i]) {
      top := stack.Remove(stack.Back()).(int)
      ans[top] += i - top - 1
    }
    stack.PushBack(i)
  }
  // 2nd pass: Right to left
  stack = list.New()
  for i := len(nums)-1; i >= -1; i-- {
    // Monotonically decreasing stack -- top of stack must be greater
    for stack.Len() > 0 && (i == -1 || nums[stack.Back().Value.(int)] < nums[i]) {
      top := stack.Remove(stack.Back()).(int)
      ans[top] += top - i - 1
    }
    stack.PushBack(i)
  }
  return ans
}

```