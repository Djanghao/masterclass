# Two Pointer Solution in Go

**Author:** forcewithlease
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/4003538/](https://leetcode.com/problems/3sum-smaller/solutions/4003538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Two pointer solution

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
import (
    "sort"
)

func threeSumSmaller(nums []int, target int) int {
    counter := 0
    numsLength := len(nums)
    sort.Ints(nums)
    for idx := 0; idx < numsLength - 2; idx++ {
        l := idx + 1
        r := numsLength - 1
        for l < r {
            if nums[idx] + nums[l] + nums[r] < target {
                counter += r - l
                l++
            } else {
                r--
            }
        }
    }

    return counter
}
```