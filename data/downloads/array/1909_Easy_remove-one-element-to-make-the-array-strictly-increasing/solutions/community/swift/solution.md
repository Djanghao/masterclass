# Swift | Short Intuitive Solution

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5454842/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5454842/)

---

```
class Solution {
    func canBeIncreasing(_ nums: [Int]) -> Bool {
        let n = nums.count

        // Find the last index such that nums is increasing.
        guard let index = (0..<n - 1).firstIndex(where: { nums[$0] >= nums[$0 + 1] }) else {
            return true
        }

        // Try removing index.
        let nums0 = Array(nums[0..<index]) + Array(nums[(index + 1)...])
        if nums0 == Set(nums0).sorted() { return true }

        // Try removing index + 1.
        let nums1 = Array(nums[0...index]) + Array(nums[(index + 2)...])
        if nums1 == Set(nums1).sorted() { return true }

        return false
    }
}
```