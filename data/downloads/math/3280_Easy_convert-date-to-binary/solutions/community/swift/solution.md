# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5772240/](https://leetcode.com/problems/convert-date-to-binary/solutions/5772240/)

---

```
class Solution {
    func convertDateToBinary(_ date: String) -> String {
        date
            .components(separatedBy: "-")
            .compactMap(Int.init)
            .map { String($0, radix: 2) }
            .joined(separator: "-")
    }
}
```