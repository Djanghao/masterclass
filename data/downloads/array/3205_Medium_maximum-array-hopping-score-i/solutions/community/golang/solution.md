# Go, max stack

**Author:** viktor_komarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5465400/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5465400/)

---

# Code
```
func maxScore(nums []int) int {
    stack := make([]int, 0)
    for i := 1; i < len(nums); i++ {
        for len(stack) > 0 && nums[stack[len(stack)-1]] < nums[i] {
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }

    total := 0
    prev := 0
    for i := 0; i < len(stack); i++ {
        total += (stack[i]-prev) * nums[stack[i]]
        prev = stack[i]
    }
    return total
}
```