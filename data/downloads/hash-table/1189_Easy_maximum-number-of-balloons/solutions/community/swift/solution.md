# [Swift] [8ms] Readable solution; beats 96%

**Author:** NicolasCombe5555
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/1179745/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/1179745/)

---

```swift
final class Solution {
	// O(n) time | O(1) space
    func maxNumberOfBalloons(_ text: String) -> Int {
        var b = 0, a = 0, l = 0, o = 0, n = 0

        for char in text {
            switch char {
            case "b": b += 1
            case "a": a += 1
            case "l": l += 1
            case "o": o += 1
            case "n": n += 1
            default: continue
            }
        }

        l /= 2; o /= 2 // we need 2 letters of each

        return min(b, a, l, o, n)
    }
}
```