# Kotlin - Two Pointer

**Author:** rawand
**Votes:** 10
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1953405/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1953405/)

---

#### Algorithm: Two Pointer

1. Have a counter set to zero 
2. Iterate through the array starting from index 1 
3. When they are equal continue iterating 
4. When they are not equal 
5. Increment the counter by one
6. Assign the value of arr in index of i to arr in index of the counter

Time & Space Complx
TC: O(n) We need to iterate at most the end of the array
SP: O(1) We are not allocating extra spaces
```
class Solution {
    fun removeDuplicates(nums: IntArray): Int {
        private var counter = 0
        
        for(i in 1 until nums.size) {
            if(nums[counter] != nums[i]) {
                counter++
                nums[counter] = nums[i]
            }
        }
        return counter + 1
    }
}

```
