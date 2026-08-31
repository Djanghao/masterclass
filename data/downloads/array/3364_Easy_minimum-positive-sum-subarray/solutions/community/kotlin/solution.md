# Kotlin sliding window method - beats 87%

**Author:** user1440w
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6137470/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6137470/)

---

# Intuition
Use a sliding window to calculate sum while moving from 0 to the end of the array. Repeat for each length between l and r.

# Approach
Create 2 loops - one that will loop from l to r and another loop inside that will sum the values as the window slides from start to finish. You can precalculate the sum so that you only have to add and subtract 1 value each time the window moves.

# Complexity
- Time complexity:
O(n*(r - l + 1))

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun minimumSumSubarray(nums: List<Int>, l: Int, r: Int): Int {

        var leftIndex = 0
        var currentLength = l
        var sum = 0
        var smallest: Int? = null

        while (currentLength <= r){

            sum = 0

            // pre sum everything except for the right index
            for (i in leftIndex until leftIndex + currentLength - 1){
                sum += nums[i]
            }

            while (leftIndex + currentLength - 1 < nums.size){

                // add the new right-most index
                sum += nums[leftIndex + currentLength - 1]

                when{
                    sum == 1 -> return 1
                    sum > 0 && (smallest == null || sum < smallest) -> smallest = sum
                }

                // subtract the left-most index
                sum -= nums[leftIndex]
                leftIndex++
            }
            currentLength++
            leftIndex = 0
        }

        return smallest ?: -1
    }
}

```