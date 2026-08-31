# Simple Approach ✅

**Author:** rishixcode
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4413783/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4413783/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
func minimumRightShifts(_ nums: [Int]) -> Int {
    let sort = nums.sorted()
    var temp = nums
    var dict : [Int: Int] = [:]
    if sort == nums { return 0 }
    for i in 0..<nums.count {
        dict[nums[i]] = i
    }
    for _ in 0..<(nums.count - (dict[sort[0]] ?? 0)) {
        temp.insert(temp.last ?? 0, at: 0)
        temp = temp.dropLast()
    }
    return temp == sort ? nums.count - (dict[sort[0]] ?? 0) : -1
}
}
```