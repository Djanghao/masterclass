# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4108958/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4108958/)

---

# Solution
```
class Solution {
    func countSubarrays(_ nums: [Int]) -> Int {
        // Initialize the result variable to 1, as there is at least one subarray
        // consisting of a single element.
        var result = 1
        
        // Initialize the length variable to 1, as the first element forms a subarray of length 1.
        var length = 1
        
        // Iterate through the elements of the array starting from the second element.
        for i in 1..<nums.count {
            // Check if the current element can form a valid subarray.
            if nums[i] > nums[i-1] {
                length += 1
            } else {
                // If not, reset the length to 1, as this element starts a new subarray.
                length = 1
            }
            
            // Add the length of the current subarray to the total result.
            result += length
        }
        
        // Return the total count of subarrays.
        return result
    }
}
```

# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$