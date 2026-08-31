# [Go] O(N) Clean Bit Solution

**Author:** 9rib-on-the-grind
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2624142/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2624142/)

---

```
func smallestSubarrays(nums []int) []int {
    var bitmap [30]int

    for i := len(nums) - 1; i >= 0; i-- {
        for j := 0; (1 << j) <= nums[i]; j++ {
            if nums[i] & (1 << j) != 0 {
                bitmap[j] = i
            }
        }
        nums[i] = max(bitmap[:], i) - i + 1
    }

    return nums
}

func max(arr []int, i int) int {
    max := i
    for _, x := range arr {
        if x > max {
            max = x
        }
    }
    return max
}
```