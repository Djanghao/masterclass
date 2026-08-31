# Kotlin simple Solution (Beats 81.11% of users with Kotlin)

**Author:** theCommute
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5141641/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5141641/)

---



# Code
```
class Solution {
    fun minOperations(nums: IntArray, k: Int): Int {
         var i= 0
    var count =0
    while(i<nums.size){
        if (nums[i]<k){
            count++
        }
        i++
    }
    return count
    }
}
```