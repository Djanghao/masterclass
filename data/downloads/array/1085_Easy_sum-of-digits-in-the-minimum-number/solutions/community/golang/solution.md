# Go simulation | Time O(n); Space O(1)

**Author:** ivvasyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/6114329/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/6114329/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Run a simulation of the problem

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find the minimum int in an array
2. Sum all digits of the min int
3. Check sum
3.1. If it's even - return 1
3.2. If it's odd - return 0

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```golang []
import (
    "math"
)

// Time O(n)
// Space O(1)
func sumOfDigits(nums []int) int {
    minimum := math.MaxInt
    for _, num := range nums {
        minimum = min(minimum, num)
    }

    var digitSum int
    for minimum > 0 {
        digit := minimum % 10
        digitSum += digit
        minimum /= 10
    }

    if digitSum % 2 == 0 {
        return 1
    }
    return 0
}
```