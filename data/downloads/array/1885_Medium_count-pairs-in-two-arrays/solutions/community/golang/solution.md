# Go Two Pointers Solution

**Author:** conallob
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5095800/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5095800/)

---

# Complexity
- Time complexity: $$O(sort)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$

# Code
```

import "sort"

func countPairs(nums1 []int, nums2 []int) int64 {
  diff := make([]int, 0, len(nums1))

  for i := 0 ; i < len(nums1) ; i++ {
    diff = append(diff, nums1[i] - nums2[i])
  }

  sort.Ints(diff)

  result := 0
  left, right := 0, len(diff) -1

  for left < right {
    if diff[right] + diff[left] > 0 {
      right--
    } else {
      result += len(diff) -1 - right
      left++
    }
  }

  result += (len(diff) - right) * (len(diff) - right -1) / 2

  return int64(result)
}
```