# Two pointer sol

**Author:** kapozzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5361434/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5361434/)

---

# Approach
Good explanation here - https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5358427/c-solution-two-pointer-approach/#:~:text=going%20to%20make.-,Approach,-We%20use%20two
# Code
```
class Solution {
    fun countPairs(nums: List<Int>, target: Int): Int {
        val sortedNums = nums.sorted().toIntArray()
        var counter = 0
        var left = 0
        var right = sortedNums.size - 1

        while (left < right) {
            val sum = sortedNums[left] + sortedNums[right]
            if (sum < target) {
                counter += right - left
                left++
            } else {
                right--
            }
        }

        return counter
    }
}
```