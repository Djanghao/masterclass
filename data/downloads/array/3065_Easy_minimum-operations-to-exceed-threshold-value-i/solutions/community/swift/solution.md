# ✅ [Swift] 100% speed & memory, easy to understand

**Author:** lmvtsv
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4821129/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4821129/)

---


```
class Solution {
    func minOperations(_ nums: [Int], _ k: Int) -> Int {
        nums.filter { $0 < k }.count
    }
}
```