# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/3121897/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/3121897/)

---

```
class Solution {
    func countValidWords(_ sentence: String) -> Int {
        
        let pattern = #"^([a-z]+(-[a-z]+){0,1}){0,1}[.,!]{0,1}$"#
        let regex = try! NSRegularExpression(pattern: pattern, options: [])
        
        return sentence
            .components(separatedBy: " ")
            .filter { !$0.isEmpty && regex.firstMatch(in: $0, options: [], range: NSMakeRange(0, $0.count)) != nil }
            .count
    }
}
```