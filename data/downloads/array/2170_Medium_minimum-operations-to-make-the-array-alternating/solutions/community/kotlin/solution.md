# Kotlin straightforward solution

**Author:** chen3210g
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/2780671/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/2780671/)

---

A Kotlin solution which is referred from [guptayash3
](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1767679/java-38-ms-100-fast-100-mem/?page=2&languageTags=java)

# Code
```
class Solution {
    fun minimumOperations(nums: IntArray): Int {
        var max: Int = 0
        var n: Int = nums.size
        for(i in 0 until nums.size) {
            if(nums[i] > max) {
                max = nums[i]
            }
        }

        val freq = Array(max+1) {IntArray(2) {0}}
        for(i in 0 until nums.size) {
            freq[nums[i]][i and 1]++
        }

        var acc: Int = 0
        var oddNum: Int = 0
        var evenNum: Int = 0
        for(i in 1 until max+1) {
            acc = Math.max(acc, Math.max(freq[i][0] + oddNum, freq[i][1] + evenNum))
            evenNum = Math.max(evenNum, freq[i][0])
            oddNum = Math.max(oddNum, freq[i][1])
        }

        return n-acc
    }
}
```