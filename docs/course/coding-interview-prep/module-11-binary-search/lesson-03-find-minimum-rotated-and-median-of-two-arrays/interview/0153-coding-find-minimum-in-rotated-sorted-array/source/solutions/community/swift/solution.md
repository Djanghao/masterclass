# Swift solution - Binary Search

**Author:** cl0ud_runner
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/48521/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/48521/)

---

```
class Solution {
    func findMin(_ nums: [Int]) -> Int {
        if nums.count == 0 {
            return 0
        }
        
        var left = 0
        var right = nums.count - 1
        var middle = 0
        
        while left < right {
            middle = (left + right) / 2
            if nums[middle] > nums[right] {
                left = middle + 1
            } else {
                right = middle
            }
        }
        
        return nums[left]
    }
}
```