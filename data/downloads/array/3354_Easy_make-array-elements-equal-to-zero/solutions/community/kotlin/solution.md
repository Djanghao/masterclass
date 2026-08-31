# (146ms) O(n)

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054320/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Refined from this:
https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6054161/o-n-o-1
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
// \u0447\u0443\u0436\u043E\u0439 \u0441 \u0416\u0430\u0432\u0430
class Solution {
    fun countValidSelections(nums: IntArray): Int {
        var total = 0
        for (N in nums) total += N

        var preSum = 0
        var ans = 0
        for (N in nums) {
            if (N == 0) {
                val diff = Math.abs(preSum - (total - preSum))
                ans += when (diff) {
                    0 -> 2
                    1 -> 1
                    else -> 0
                }
                if (diff>1 && ans!=0) return ans
            }
            else {
                preSum += N
            }
        }
        return ans
    }
}
```