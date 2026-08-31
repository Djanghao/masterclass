# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/goat-latin/solutions/2957530/](https://leetcode.com/problems/goat-latin/solutions/2957530/)

---

```
class Solution {
    func toGoatLatin(_ sentence: String) -> String {
        sentence
            .components(separatedBy: " ")
            .enumerated()
            .map { i, w -> String in
                if "aeiou".contains(w.first!.lowercased()) {
                    return "\\(w)ma\\(String(repeating: "a", count: i + 1))"
                }
                else {
                    return "\\(w.dropFirst())\\(w.first!)ma\\(String(repeating: "a", count: i + 1))"
                }
            }
            .joined(separator: " ")
    }
}
```