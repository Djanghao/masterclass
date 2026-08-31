# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4342982/](https://leetcode.com/problems/find-words-containing-character/solutions/4342982/)

---

```
class Solution {
    func findWordsContaining(_ words: [String], _ x: Character) -> [Int] {
        words
            .indices
            .filter { words[$0].contains(x) }
    }
}
```