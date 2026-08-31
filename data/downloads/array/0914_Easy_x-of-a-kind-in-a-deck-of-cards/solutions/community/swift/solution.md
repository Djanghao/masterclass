# ✅ Three-liner, 65ms Beats 100.00%

**Author:** swifterswifty
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4243363/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4243363/)

---

# Code

```swift
func hasGroupsSizeX(_ deck: [Int]) -> Bool {
    let counts = Set(Dictionary(grouping: deck) { $0 }.map { $0.value.count })
    return counts[counts.index(after: counts.startIndex)...].reduce(counts.first!) { gcd($0, $1) } > 1
}

func gcd(_ a: Int, _ b: Int) -> Int {
    b == 0 ? a : gcd(b, a % b)
}
```