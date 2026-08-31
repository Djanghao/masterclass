# Golang Code

**Author:** Pramod-Devireddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027297/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027297/)

---


# Code
```golang []
func maxFrequency(nums []int, k int, numOperations int) int {
    sort.Ints(nums) 
    n := len(nums)
    ret := 0

    // First part: sliding window technique
    for i, j := 0, 0; i < n; i++ {
        // Ensure the difference between nums[i] and nums[j] doesn't exceed 2*k
        for nums[i]-nums[j] > 2*k {
            j++
        }
        ret = max(ret, min(i-j+1, numOperations))
    }

    // Second part: handling identical values and finding the best possible outcome
    for i, l, r := 0, 0, 0; i < n; i++ {
        lastI := i
        // Skip all duplicate elements
        for i+1 < n && nums[i] == nums[i+1] {
            i++
        }

        // Extend the window r to include all nums[r] <= nums[i] + k
        for r < n && nums[r] <= nums[i]+k {
            r++
        }

        // Move l to ensure nums[l] is within nums[i] + k
        for nums[i] > nums[l]+k {
            l++
        }

        same := i - lastI + 1
        length := r - l
        ret = max(ret, same+min(length-same, numOperations))
    }

    return ret
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```