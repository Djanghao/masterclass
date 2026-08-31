# Scala tailrec solution

**Author:** maciejwadowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6030627/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6030627/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The brute force approach would be to start from each index and iterate until it will satisfy condition. It would take $$O(n^2)$$ time complexity.

# Approach
<!-- Describe your approach to solving the problem. -->
We can use sliding window, by keeping indexes of current subarray and a cumulative sum. The only thing is, if we will find a subarray that satisfy condition, we have to check our sliding window, if there is even smaller subarray. We can do that by calculating sum again from the end of subarray, to the beginning of the subarray.

# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```scala []
object Solution {
    def minimumSubarrayLength(nums: Array[Int], k: Int): Int = {
        /*
            find if there is an even smaller subarray
            in our current window. 
            start is actually here an end of a subarray, 
            end is the beginning of the subarray(that's why start-1)
        */
        @scala.annotation.tailrec
        def getLatestIndex(start: Int, end: Int, acc: Int): Int = {
            if (start <= end) end
            else if ((acc | nums(start)) >= k) start
            else getLatestIndex(start-1, end, acc | nums(start))
        }


        /*
            after finding a subarray that match the condition, 
            we have to recalculate a cumulative sum, for a next possible sliding window. That's a helper function
        */
        @scala.annotation.tailrec
        def calculateSum(start: Int, end: Int, acc: Int): Int = {
            if (start > end) acc
            else if (start == end) acc | nums(start)
            else calculateSum(start+1, end, acc | nums(start))
        }

        @scala.annotation.tailrec
        def minSubarray(start: Int, index: Int, sum: Int, minLen: Int): Int = {
            if (index >= nums.length) minLen
            else if ((nums(index) | sum) >= k) {
                val latestIndex = getLatestIndex(index, start, 0)
                val strike = index - latestIndex + 1
                val newMinLen = if (strike < minLen) strike else minLen
                minSubarray(latestIndex+1, index+1, calculateSum(latestIndex+1, index, 0), newMinLen)
            }
            else minSubarray(start, index+1, sum | nums(index), minLen)  
        }

        val minValue = minSubarray(0, 0, 0, Int.MaxValue)
        if (minValue == Int.MaxValue) -1
        else minValue
    }
}
```