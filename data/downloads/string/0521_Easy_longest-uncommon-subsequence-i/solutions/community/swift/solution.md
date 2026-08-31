# One line swift solution.

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5986919/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5986919/)

---

```swift []
class Solution {
func findLUSlength(_ a: String, _ b: String) -> Int {
    a == b ? -1 : a.count > b.count ? a.count : b.count
}
}
```