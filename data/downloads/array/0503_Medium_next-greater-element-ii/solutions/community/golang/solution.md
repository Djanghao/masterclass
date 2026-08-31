# Go

**Author:** dushaoshuai
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/3666001/](https://leetcode.com/problems/next-greater-element-ii/solutions/3666001/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func nextGreaterElements(nums []int) []int {
    ans := make([]int, len(nums))
    for i := range ans {
        ans[i] = -1
    }

    stack := make([]int, 0, len(nums))
    for i := 0; i < 2*len(nums); i++ {
        i := i % len(nums)
        for len(stack) != 0 && nums[stack[len(stack)-1]] < nums[i] {
            ans[stack[len(stack)-1]] = nums[i]
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }

    return ans
}
```