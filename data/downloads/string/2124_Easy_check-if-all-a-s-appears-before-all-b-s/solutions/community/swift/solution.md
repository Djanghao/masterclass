# ✅ Two-liner, 0ms Beats 100.00%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4238693/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4238693/)

---

# Code

```swift
func checkString(_ s: String) -> Bool {
    guard let lastA = s.lastIndex(where: { $0 == "a" }), let firstB = s.firstIndex(where: { $0 == "b" }) else { return true }
    return lastA < firstB
}
```