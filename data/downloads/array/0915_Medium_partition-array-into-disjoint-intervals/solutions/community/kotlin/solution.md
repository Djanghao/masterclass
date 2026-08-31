# Kotlin O(1) space O(n) time with description

**Author:** OmarNajjar
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4613958/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4613958/)

---

# Intuition
Gready solution with O(1) space and O(n) time

# Approach
At the begining define the first item as the start of the left area since we surly will have left area 

Start iterating through the list and check if we have lower values than the max previous value we will define this as the end of our left area

The max will be defined as the max number we passed by when find new value lower than max

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun partitionDisjoint(nums: IntArray): Int {
        var res = 1
        var max = nums[0]
        var maxHold = nums[0]
        for(i in 1 until nums.size-1) {
            if(nums[i] < max) {
                res = i+1
                max = maxHold
            } else {
                maxHold = Math.max(nums[i], maxHold)
            }
        }

        return res
    }
}
```