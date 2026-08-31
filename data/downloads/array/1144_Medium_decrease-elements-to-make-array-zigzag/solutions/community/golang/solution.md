# GO | 2 pass

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4847639/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4847639/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func movesToMakeZigzag(nums []int) int {
    movesToMakeEvenIndexed, movesToMakeOddIndexed := 0, 0
    numsCopy := make([]int, len(nums))
    copy(numsCopy, nums)
    // moves to make even indexed
    for i:=0; i<len(nums); i=i+2 {
        if i-1 >= 0 && nums[i-1] >= nums[i] {
            movesToMakeEvenIndexed += nums[i-1] - nums[i] + 1
            nums[i-1] = nums[i] - 1
        }
        if i+1 < len(nums) && nums[i+1] >= nums[i] {
            movesToMakeEvenIndexed += nums[i+1] - nums[i] + 1
            nums[i+1] = nums[i] - 1
        }
    }
    // moves to make odd indexed
    for i:=1; i<len(numsCopy); i=i+2 {
        if i-1 >= 0 && numsCopy[i-1] >= numsCopy[i] {
            movesToMakeOddIndexed += numsCopy[i-1] - numsCopy[i] + 1
            numsCopy[i-1] = numsCopy[i] - 1
        }
        if i+1 < len(numsCopy) && numsCopy[i+1] >= numsCopy[i] {
            movesToMakeOddIndexed += numsCopy[i+1] - numsCopy[i] + 1
            numsCopy[i+1] = numsCopy[i] - 1
        }
    }
    if movesToMakeEvenIndexed > movesToMakeOddIndexed {
        return movesToMakeOddIndexed
    }
    return movesToMakeEvenIndexed
}
```