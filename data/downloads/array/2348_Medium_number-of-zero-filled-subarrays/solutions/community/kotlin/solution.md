# Kotlin Simply Tracking 0s

**Author:** kotlinc
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321938/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321938/)

---

```
class Solution {
  fun zeroFilledSubarray(nums: IntArray): Long {
    var res = 0L
    var zeroes = 0
    for (v in nums) {
      if (v != 0) {
        zeroes = 0
      } else {
        zeroes++
        res += zeroes
      }
    }
    return res
  }
}
```