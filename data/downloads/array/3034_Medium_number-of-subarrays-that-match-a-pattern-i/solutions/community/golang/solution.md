# Simple readable solution for Go

**Author:** ferux
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4842333/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4842333/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*m)$$
- Space complexity: $$O(1)$$

# Code
```
func countMatchingSubarrays(nums []int, pattern []int) (out int) {
    patternLen := len(pattern)
    for i := 0; i < len(nums) - patternLen; i++ {
        var valid bool
        for j := 0; j < patternLen; j++ {
            prev := nums[i + j]
            next := nums[i + j + 1]

            switch pattern[j] {
                case 1:
                    valid = next > prev
                case 0:
                    valid = next == prev
                case -1:
                    valid = next < prev
            }
            if !valid {
                break
            }
        }

        if valid {
            out++
        }
    }

    return out
}
```
