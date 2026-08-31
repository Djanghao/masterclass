# ✅ Two-liner, 7ms Beats 88.24%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4246561/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4246561/)

---

# Code
```swift
func findSubarrays(_ nums: [Int]) -> Bool {
    var sums: Set<Int> = []
    return (1..<nums.count).contains { !sums.insert(nums[$0] + nums[$0 - 1]).inserted }
}
```