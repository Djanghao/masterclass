# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 3
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4104922/](https://leetcode.com/problems/monotonic-array/solutions/4104922/)

---

# Code
```
class Solution {
    func isMonotonic(_ nums: [Int]) -> Bool {
        var increasing = true
        var decreasing = true
        for i in 1..<nums.count {
            increasing = increasing && nums[i - 1] <= nums[i]
            decreasing = decreasing && nums[i - 1] >= nums[i]
        }
        return increasing || decreasing
    }
}
```