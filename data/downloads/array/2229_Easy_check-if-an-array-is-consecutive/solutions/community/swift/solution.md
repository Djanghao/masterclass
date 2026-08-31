# Swift Solution

**Author:** danilovdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/3324780/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/3324780/)

---

```
class Solution {
    func isConsecutive(_ nums: [Int]) -> Bool {
        let nums = nums.sorted()
        for i in 0..<(nums.count - 1) { 
            if nums[i] + 1 != nums[i + 1] { return false }
        }
        return true
    }
}
```