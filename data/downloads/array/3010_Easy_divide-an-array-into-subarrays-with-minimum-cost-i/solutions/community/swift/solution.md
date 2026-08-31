# [Swift] One-liner

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/5983851/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/5983851/)

---

# Intuition
result is sum of first element and two minimal elements in the rest of array

# Complexity
- Time complexity: O(n * log n) as we use sort here

- Space complexity: O(n)

# Code
```swift []
class Solution {
    func minimumCost(_ nums: [Int]) -> Int {
        nums[0] + nums[1...].sorted()[...1].reduce(0, +)
    }
}
```