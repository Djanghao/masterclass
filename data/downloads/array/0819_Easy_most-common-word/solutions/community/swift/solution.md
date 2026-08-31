# Swift - 16ms

**Author:** sege
**Votes:** 5
**Link:** [https://leetcode.com/problems/most-common-word/solutions/828958/](https://leetcode.com/problems/most-common-word/solutions/828958/)

---

```
class Solution {
    func mostCommonWord(_ paragraph: String, _ banned: [String]) -> String {
        var map: [String: Int] = [String: Int]()
    
        let fixedParagraph = paragraph.lowercased().split{ !$0.isLetter }
    
        fixedParagraph.forEach { (word) in
            map[String(word)] = (map[String(word)] ?? 0) + 1
        }

        return map.sorted {$0.value > $1.value }.filter{ !banned.contains($0.key)}.first?.key ?? ""
    }
}
```