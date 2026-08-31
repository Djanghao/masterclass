# Go easy code || 100% beats sc

**Author:** chandrazotish
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/4227503/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/4227503/)

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
func maximumJumps(nums []int, target int) int {
    memo := make([]int, len(nums))
    for i := range memo {
        memo[i] = -1
    }
    return jump(nums, target, 0, memo)-1
}

func jump(nums []int, target int, currIndex int, memo []int) int {
    if currIndex == len(nums)-1 {
        return 1
    }

    if memo[currIndex] != -1 {
        return memo[currIndex]
    }

    maxJumps := 0
    for i := currIndex + 1; i < len(nums); i++ {
        diff := nums[i] - nums[currIndex]
        if -target <= diff && diff <= target {
            jumpsFromHere := jump(nums, target, i, memo)
            if jumpsFromHere != 0 {
                maxJumps = max(maxJumps, jumpsFromHere+1)
            }
        }
    }

    memo[currIndex] = maxJumps
    return maxJumps
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```