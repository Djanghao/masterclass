# ✅ Easy to understand, 0 ms Beats 100.00%

**Author:** swifterswifty
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5903619/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5903619/)

---

# Code

```swift []
func countSegments(_ s: String) -> Int {
    s.reduce(into: (0,  true)) {
        switch ($0.1, $1) {
        case (true, " "): break
        case (false, " "):
            $0.0 += 1
            $0.1 = true
        default: $0.1 = false
        }
    }.0 + ((s.last ?? " ") == " " ? 0 : 1)
}
```