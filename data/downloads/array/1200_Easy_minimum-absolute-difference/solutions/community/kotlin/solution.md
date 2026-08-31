# My Kotlin Solution

**Author:** mgalhardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/1637612/](https://leetcode.com/problems/minimum-absolute-difference/solutions/1637612/)

---

- Runtime: 452 ms, faster than 80.95% of Kotlin online submissions for Minimum Absolute Difference.
- Memory Usage: 55.1 MB, less than 57.14% of Kotlin online submissions for Minimum Absolute Difference.
```
class Solution {
    
    // Time Complexity: O (n log n) - the sort function is O (n log n), the array loop is O (n).
    // Space Complexity: O (n) - at worse case the `answer` array will include each element of the original array.
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        arr.sort() // Time Complexity: O (n log n)

        val answer = mutableListOf<List<Int>>()
        var minDiff = Int.MAX_VALUE

		// The `until` function will ensure we are in-bounds.
        for (i in 0 until arr.lastIndex) { // Time Complexity: O (n)
            val currNum = arr[i]
            val nextNum = arr[i + 1]

            val currDiff = nextNum - currNum
            
            // If minDiff changed, we should clear the answer to start over.
            if (currDiff < minDiff) {
                answer.clear()
                minDiff = currDiff
            }
            
            // The current diff is part of the minDiff, add to answer.
            if (currDiff == minDiff) {
                answer += listOf(currNum, nextNum)
            }
        }

        return answer
    }
}
```