# [Golang] Sort even and odd

**Author:** vasakris
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3674146/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3674146/)

---

# Code
```
func makeSimilar(nums []int, target []int) int64 {
    // nums even can be converted to target even only
    // nums odd can be converted to target odd only
    nums_even, nums_odd, target_even, target_odd := []int{}, []int{}, []int{}, []int{}

    for i := 0; i < len(nums); i++ {
        if nums[i] % 2 == 0 {
            nums_even = append(nums_even, nums[i])
        } else {
            nums_odd = append(nums_odd, nums[i])
        }

        if target[i] % 2 == 0 {
            target_even = append(target_even, target[i])
        } else {
            target_odd = append(target_odd, target[i])
        }
    }

    sort.Ints(nums_even)
    sort.Ints(nums_odd)
    sort.Ints(target_even)
    sort.Ints(target_odd)

    res := 0
    for i := 0; i < len(nums_even); i++ {
        res += abs(nums_even[i] - target_even[i]) / 2
    }

    for i := 0; i < len(nums_odd); i++ {
        res += abs(nums_odd[i] - target_odd[i]) / 2
    }

    return int64(res / 2)
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```