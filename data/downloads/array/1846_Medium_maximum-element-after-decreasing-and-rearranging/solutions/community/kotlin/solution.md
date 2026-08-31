# Kotlin without sorting explained solution

**Author:** skulagin
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290151/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290151/)

---

# Complexity
- Time complexity: $$O(N)$$

- Space complexity: $$O(N)$$

# Code
```
class Solution {
    fun maximumElementAfterDecrementingAndRearranging(arr: IntArray): Int {
        // let's count the occurrences of each value in the arr starting from 1
        // all values which are greater than (arr.size - 1) would be counted in the last cell of counter array
        val counter = IntArray(arr.size)
        for (i in 0..arr.lastIndex) {
            val indexInCounter = Math.min(arr[i] - 1, arr.lastIndex)
            counter[indexInCounter] += 1
        }

        // calculate result started from 1
        // for each step result couldn't be greater than i + 1
        // and in case of skipped prev values result could be found as result + counter[i]
        var result = 1
        for (i in 1..arr.lastIndex) {
            result = Math.min(i + 1, result + counter[i])
        }

        return result
    }
}
```