# [Swift] Window sliding

**Author:** muzle
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5140623/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5140623/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
class Solution {
    func longestAlternatingSubarray(_ nums: [Int], _ threshold: Int) -> Int {
        var result = 0, index = 0

        while index < nums.count {
            guard let i = nums[index...].firstIndex(where: { $0 % 2 == 0 && $0 <= threshold }) else { return result }
            var j = i + 1
            while j < nums.count {
                let even = i % 2 == j % 2
                let digitEven = nums[j] % 2 == 0
                if nums[j] > threshold || even != digitEven { break }
                j += 1
            }
            index = j
            result = max(result, j-i)
        }
        return result
    }
}
```