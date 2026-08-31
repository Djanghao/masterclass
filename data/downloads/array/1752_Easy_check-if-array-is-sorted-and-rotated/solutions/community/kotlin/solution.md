# O(n) time complexity with O(1) space

**Author:** hemeandrajain1991
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5709922/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5709922/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

When I have seen this problem, I have seen two scenrio:
1. No Rotaion
2. Sorted n Rotation

# Approach
<!-- Describe your approach to solving the problem. -->
1. Store the index of first unsorted element
2. Check the element should be sorted after first unsorted index
 EdgeCase:
 1. If indexof unsorted is -1 => Then Array is sorted without rotate
 2. If != -1 => check last and first Element => In rotated Array, First element is always bigger than last element



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun check(nums: IntArray): Boolean {
        var rotatedIndex = -1
        for(i in 1..(nums.size-1)) {
            if(nums[i] < nums[i-1]) {
               rotatedIndex = i
               break
            }
        }

        

        if(rotatedIndex != -1) {
           if(nums[0] < nums[nums.size-1]) {
             return false
           }

           for(i in (rotatedIndex+1)..(nums.size-1)) {
             if(nums[i] < nums[i-1]) {
                return false
             }
           }
        }

        return true
    }
}
```