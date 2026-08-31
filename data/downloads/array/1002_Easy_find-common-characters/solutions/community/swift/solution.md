# ✅ Clean Swifty Solution

**Author:** eleev
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/4846727/](https://leetcode.com/problems/find-common-characters/solutions/4846727/)

---

# Solution
```swift
final class Solution {
    @_optimize(speed)
    func commonChars(_ words: [String]) -> [String] {
        let freqs = words.map { Dictionary($0.map { ($0, 1) }, uniquingKeysWith: +) }
        var chars = [String]()

        guard let firstFreq = freqs.first else {
            return chars
        }

        for (char, count) in firstFreq {
            let minCount = freqs.reduce(into: count) { $0 = min($0, $1[char] ?? 0) }
            chars += repeatElement(String(char), count: minCount)
        }
        return chars
    }
}
```