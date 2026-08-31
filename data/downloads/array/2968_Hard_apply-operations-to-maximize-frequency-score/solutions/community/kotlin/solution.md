# yet another example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4443194/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4443194/)

---

# Code
```
class Solution {
    fun maxFrequencyScore(nums: IntArray, k: Long): Int {
        var x = k
        nums.sort()
        return nums.size -
               nums.foldIndexed(0) { j, i, v ->
                                                x -= v - nums[(i+j)/2]
                                            if (x<0) {
                                                x += nums[(i+j+1)/2] - nums[i]
                                                i + 1
                                            } else
                                                i
        }
    }
}
```