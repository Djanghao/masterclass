# [Kotlin] My code for the 673. Number of Longest Increasing Subsequence

**Author:** Augusto11CB
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/5186054/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/5186054/)

---



# Code
```
class Solution {
    fun findNumberOfLIS(nums: IntArray): Int {
    // Create an array 'lis' where lis[i] represents the length of the longest increasing subsequence ending at index i.
    val lis = IntArray(nums.size) { 1 }
    // Create an array 'countFreq' where countFreq[i] represents the number of longest increasing subsequences ending at index i.
    val countFreq = IntArray(nums.size) { 1 }

    var maxLenLis = Int.MIN_VALUE
    var resultCounter = 0

    // Iterate through the nums array from the end to the beginning.
    for (i in nums.size - 1 downTo 0) {
        var maxLenLisLocal = 1  // The length of the longest subsequence ending at the current index i.
        var maxCountLocal = 1   // The number of longest subsequences of that length ending at the current index i.

        // For each element at index i, look at all elements to the right of it (index j).
        for (j in i + 1 until nums.size) {
            val previousLen = lis[j]    // Length of the longest subsequence ending at j.
            val prevousCount = countFreq[j]  // Number of such subsequences ending at j.

            // If nums[i] < nums[j], nums[i] can be part of an increasing subsequence that ends at j.
            if (nums[i] < nums[j]) {
                if (previousLen + 1 > maxLenLisLocal) {
                    // Found a longer subsequence ending at i.
                    maxLenLisLocal = previousLen + 1
                        // why we do this assignment???
                        maxCountLocal = previousCountForLISAtSlotJ // Answer: When we find a longer subsequence by including nums[i], all such subsequences ending at j can be extended to end at i.
                } else if (previousLen + 1 == maxLenLisLocal) {
                    // Found another subsequence of the same maximum length ending at i.
                    maxCountLocal += prevousCount  // Add the count of subsequences ending at j.
                }
            }
        }

        // Update the overall maximum length of LIS found so far.
        if (maxLenLisLocal > maxLenLis) {
            maxLenLis = maxLenLisLocal
            // why we do this assignment???
            maxCountLocal = previousCountForLISAtSlotJ // Answer: When we find a longer subsequence by including nums[i], all such subsequences ending at j can be extended to end at i.
        } else if (maxLenLisLocal == maxLenLis) {
            resultCounter += maxCountLocal  // Add the count of these longest subsequences to the result counter.
        }

        // Update the lis and countFreq arrays for the current index i.
        lis[i] = maxLenLisLocal
        countFreq[i] = maxCountLocal
    }

    return resultCounter
}

```