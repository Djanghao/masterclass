# Go solution faster than 100%

**Author:** weippig
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2788094/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2788094/)

---


# Code
```
func applyOperations(nums []int) []int {
    length := len(nums)
    res := make([]int, 0)

    for i:=1; i<length; i++ {
        if nums[i] == nums[i-1] {
            nums[i-1] *= 2
            nums[i] = 0
        }
    }

    for _, num := range nums {
        if num != 0 { res = append(res, num) }
    }

    for _, num := range nums {
        if num == 0 { res = append(res, num) }
    }

    return res
}
```