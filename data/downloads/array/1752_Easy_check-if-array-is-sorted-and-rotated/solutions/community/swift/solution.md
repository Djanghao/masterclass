# Swift solution

**Author:** UnHommeBien
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5621135/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5621135/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
    func check(_ nums: [Int]) -> Bool {
        var counterBreak = 0
        var n = nums.count
        for i in 0..<n {
            if nums[i] > nums[(i+1) % n]{
                counterBreak += 1
            }
            if counterBreak > 1 {
                return false
            }
        }
        return true
    }
}
```