# ✅ Optimal Solution | FP Style

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5908153/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5908153/)

---

# Solution
```swift []
struct Solution {
    func minBitwiseArray(_ nums: [Int]) -> [Int] {
        nums.map { num in
            (0...num).first { x in (x | (x + 1)) == num } ?? -1
        }
    }
}
```