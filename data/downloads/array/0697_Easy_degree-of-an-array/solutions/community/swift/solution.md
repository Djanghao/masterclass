# ✅ One-liner

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5509745/](https://leetcode.com/problems/degree-of-an-array/solutions/5509745/)

---

# Code

```swift
func findShortestSubArray(_ nums: [Int]) -> Int {
    Dictionary(grouping: nums) { $0 }
        .mapValues(\\.count)
        .reduce(into: [:]) { $0[$1.value, default: []].append($1.key) }
        .max { $0.key < $1.key }!
        .value
        .map { nums.lastIndex(of: $0)! - nums.firstIndex(of: $0)! }
        .min { $0 < $1 }! + 1
}
```