# ✅ [Swift] Dictionary, 3 lines, easy to understand

**Author:** lmvtsv
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/2873224/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/2873224/)

---

```
class Solution {
    func frequencySort(_ s: String) -> String {
        return Dictionary(s.map { ($0, 1)}, uniquingKeysWith: +)
		.sorted(by: { $0.value > $1.value })
		.reduce("") { $0 + String(repeating: $1.key, count: $1.value) }
    }
}
```