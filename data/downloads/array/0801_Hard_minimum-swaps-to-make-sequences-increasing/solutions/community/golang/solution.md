# Golang DP Solution

**Author:** tsenZI
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3647247/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3647247/)

---

# Complexity
- Time complexity:
    O(N)

- Space complexity:
    O(N)

# Code
```
func minSwap(nums1 []int, nums2 []int) int {
    n := len(nums1)
    swapCount := make([]int, n)
    for i := 0; i < n; i++ {
        swapCount[i] = n
    }

    keepCount := make([]int, n)
    copy(keepCount, swapCount)

    swapCount[0] = 1
    keepCount[0] = 0
    for i := 1; i < n; i++ {
        if nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1] {
            swapCount[i] = swapCount[i - 1] + 1
            keepCount[i] = keepCount[i - 1]
        }

        if nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1] {
            swapCount[i] = min(swapCount[i], keepCount[i - 1] + 1)
            keepCount[i] = min(keepCount[i], swapCount[i - 1])
        }
    }

    return min(swapCount[n - 1], keepCount[n - 1])
}

func min(a, b int) int {
    if a > b {
        return b
    }

    return a
}
```