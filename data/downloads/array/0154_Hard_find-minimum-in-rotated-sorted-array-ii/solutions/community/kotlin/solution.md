# skip duplicates

**Author:** raghurambtechit
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/6100650/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/6100650/)

---

same as find-minimum-in-rotated-sorted-array-1 . but since this contains duplicates , we need to mode the left or right untill we find a different value than mid . note that , since this is rotated sorted array , the min can be either in left of mid or right of mid in a case like : 
2,2,2,0,1,2 or 2,0,1,2,2,2,2
so , just quickly skip duplicates and move left and right , again calculate the mid for the newly duplicate skipped array.

while doing a binary search, dont forget to use "greater than or equal to : 
```
if(nums[r] >= nums[mid]){
```

# Code
```kotlin []
class Solution {
    fun findMin(nums: IntArray): Int {
        var l = 0
        var r = nums.size - 1
        while(r>l){
            var mid = (l+r)/2
                while((nums[mid]== nums[r]) && r!=mid ){
                        r = r-1
                    }
                   while((nums[mid]==nums[l]) && l != mid ){
                        l = l+1
                }
            mid = (l+r) /2
            if(nums[r] >= nums[mid]){
               r = mid
            }else{
                 l = mid+1 
            }
        }
        return nums[l]
    }
}

```