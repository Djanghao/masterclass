# Kotlin solution with a direction variable

**Author:** mohamed36
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5533973/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5533973/)

---

# Intuition
Use direction int to figure out if the current element will break the current direction. If the current direction is flipped, then there is a hill or valley.

Intially we don't know the direction, so we will set it up after we examin the initial numbers


# Code
```
class Solution {
    fun countHillValley(nums: IntArray): Int {
        var direction = -1 //undefined
        var count = 0
        var first = true

        // last element can't be a hill/vally
        for ( i in 0 .. nums.size - 2) {
            if (direction == 1) {
                if (nums[i + 1] < nums[i]) {
                    // there is a change in direction
                    ++count
                    direction = 0
                }
            } else if (direction == 0) {
                if ( nums[i + 1] > nums[i]) {
                    // there is a change in direction
                    ++count
                    direction = 1
                }
            } else {
                // we don't know the intial direction yet
                if (nums[i] < nums[i + 1]) {
                    direction = 1
                } else if (nums[i] > nums[i + 1]) {
                    direction = 0
                }
            }
        }

        return count
    }
}
```