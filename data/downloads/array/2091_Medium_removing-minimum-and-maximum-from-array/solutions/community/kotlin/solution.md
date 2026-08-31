# [Beats 100%] [Kotlin] [Greedy] My code for the 2091. Removing Minimum and Maximum From Array

**Author:** Augusto11CB
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/5112628/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/5112628/)

---



# Code
```
class Solution {
    fun minimumDeletions(nums: IntArray): Int {
        // Initialize minimum and maximum values and their respective positions
        var minimum = Int.MAX_VALUE
        var minSlot = 0
        var maximum = Int.MIN_VALUE
        var maxSlot = 0

        // Loop through the array to find the minimum and maximum values and their positions
        for (i in 0 until nums.size) {
            if (nums[i] > maximum) {
                maximum = nums[i]
                maxSlot = i
            }
            if (nums[i] < minimum) {
                minimum = nums[i]
                minSlot = i
            }
        }

        // Calculate the distance of the minimum and maximum values from the end of the array
        val minSlotDistFromEnd = nums.size - minSlot
        val maxSlotDistFromEnd = nums.size - maxSlot

        // Calculate the number of deletions needed if both the minimum and maximum values are removed from the start of the array
        // The "+1" is added because array indices start from 0, so to get the number of elements, we need to add 1
        val removeBothFromStart = Math.max(minSlot + 1, maxSlot + 1)

        // Calculate the number of deletions needed if both the minimum and maximum values are removed from the end of the array
        val removeBothFromEnd = Math.max(minSlotDistFromEnd, maxSlotDistFromEnd)

        // Calculate the number of deletions needed if the maximum value is removed from the start and the minimum value is removed from the end of the array
        val removeMaxFromStartAndMinFromEnd = minSlotDistFromEnd + (maxSlot + 1)

        // Calculate the number of deletions needed if the minimum value is removed from the start and the maximum value is removed from the end of the array
        val removeMinFromStartAndMaxFromEnd = maxSlotDistFromEnd + (minSlot + 1)
        
        // Find the minimum number of deletions between removing both values from the start or the end of the array
        val possibilityOne = Math.min(removeBothFromEnd, removeBothFromStart)
        
        // Find the minimum number of deletions between removing the maximum value from the start and the minimum value from the end, or vice versa
        val possibilityTwo = Math.min(removeMaxFromStartAndMinFromEnd, removeMinFromStartAndMaxFromEnd)
        
        // Return the minimum number of deletions among all possibilities
        return Math.min(possibilityOne, possibilityTwo)
    }

}
```