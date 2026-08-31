# ✅ 100% Runtime & Memory | O(n)

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3979213/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3979213/)

---

# Approach
**TODO**

# Time Complexity
**TODO**

# Space complexity
**TODO**

# Code
```swift
class Solution {
    func minimumReplacement(_ nums: [Int]) -> Int {
        let n = nums.count
        var result = 0
        var nums = nums
    
        for i in stride(from: n - 2, through: 0, by: -1) {
            let current = nums[i]
            let next = nums[i + 1]
            guard current > next else { continue }

            let elements = (current + next - 1) / next
            let requiredOperations = (current - 1) / next
            result += requiredOperations
            nums[i] = current / elements
        }
        return result
    }
}
```