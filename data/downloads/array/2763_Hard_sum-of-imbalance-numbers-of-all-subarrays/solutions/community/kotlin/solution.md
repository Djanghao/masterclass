# yet another simple example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/4375017/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/4375017/)

---

# Code
```
import kotlin.math.max

class Solution {
    fun sumImbalanceNumbers(nums: IntArray): Int {
        val position = IntArray(nums.size + 2)
        position.fill(-1)
        val left = nums
                        .withIndex()
                        .map{ (index,num) ->
                            val l = max(position[num-1], position[num])
                                position[num] = index
                                l
                            }
        position.fill(nums.size)
        val result = nums
                        .foldRightIndexed(0) { index, num, acc ->
                            val result = acc + (index - left[index]) * (position[num-1] - index)
                                position[num] = index
                                result
                        }
        return result - nums.size*(nums.size+1)/2
    }
}
```