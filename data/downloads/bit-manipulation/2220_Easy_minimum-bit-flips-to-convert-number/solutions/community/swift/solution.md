# Swift one-liner

**Author:** yamironov
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/2037974/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/2037974/)

---

Swift one-liner
```swift
class Solution {
    func minBitFlips(_ start: Int, _ goal: Int) -> Int {
        (start ^ goal).nonzeroBitCount
    }
}
```