# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4974433/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4974433/)

---

# Solution
```swift
class Solution {
    func countAlternatingSubarrays(_ nums: [Int]) -> Int {
        var answer = 1
        var length = 1
        for right in 1..<nums.count {
            // Reset the length of the alternating subarray.
            if nums[right] == nums[right - 1] {
                length = 0
            }
            length += 1
            answer += length
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$