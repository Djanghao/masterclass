# Simple Solution with Clear Explanation

**Author:** James_Jone
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5437672/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/5437672/)

---

# Intuition
This problem seems very confusing, but is actually very simple: we need to move the smallest element with smallest idx to the beginning, and the greatest element with greatest idx to the ending. And if the smallest element's index is greater than the greatest element's index, we save one swap because we only need one swap to make the min and max move towards left and right, instead of 2 swaps.
<!-- Describe your first thoughts on how to solve this problem. -->

# Complexity
- Time complexity: O(n) for traversing the array to find the min and max.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumSwaps(nums []int) int {
    minVal, minIdx := nums[0], 0
    maxVal, maxIdx := nums[0], 0
    for i, val := range(nums) {
        // Find the smallest element with smallest idx
        if minVal > val {
            minVal = val
            minIdx = i
        }
        // Find the greatest element with greatest idx
        if maxVal <= val {
            maxVal = val
            maxIdx = i
        }
    }

    res := minIdx + (len(nums) - maxIdx - 1)
    if minIdx > maxIdx {
        res--
    }
    return res
}
```