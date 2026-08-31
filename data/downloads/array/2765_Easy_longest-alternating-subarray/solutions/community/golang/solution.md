# O(n) with less code

**Author:** itzloop
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/5801461/](https://leetcode.com/problems/longest-alternating-subarray/solutions/5801461/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

We don't need to use an extra variable to toggle we can just use `m` the same as described in the description of the problem.

Here is how it works:
1. For each pair of numbers $S_1$ and $S_0$ check the following:
    1. If $S_1 - S_0 = (-1)^m$ then:
        this is an alternating list so add to `curr` (current length) and `m` and store the max length to `result`
    2. If $S_1 - S_0 \
eq (-1)^m$ but by decreasing `m` by 1 we again get an alternating list then:
    The length of the list is 1 and the m should be 1 so `m = 1` and `curr = 1`
    3. If not, reset everything
2. At the end since we were comparing pairs together, the length is should be added by 1 so the final result is `result + 1` and if result remains 0, then the final result is `-1`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```golang []
import (
	"math"
	"fmt"
)

func alternatingSubarray(nums []int) int {
	var (
		m      = 0
		result = 0
		curr   = 0
	)
	for i := 0; i < len(nums)-1; i++ {
		var s0 = nums[i]
		var s1 = nums[i+1]

		if s1-s0 == int(math.Pow(-1, float64(m))) {
			curr++
			m++
			result = max(result, curr)
		} else if m > 0 && s1-s0 == int(math.Pow(-1, float64(m-1))) {
			curr = 1
			m = 1
			result = max(result, curr)
		} else {
			curr = 0
			m = 0
		}
	}

	if result > 0 {
		return result + 1
	}

	return -1
}
```