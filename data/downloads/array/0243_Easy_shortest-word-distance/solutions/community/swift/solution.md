# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/6140993/](https://leetcode.com/problems/shortest-word-distance/solutions/6140993/)

---

**One-Liner, pretty-printed (accepted answer)**
```
import Algorithms
class Solution {
    func shortestDistance(_ wordsDict: [String], _ word1: String, _ word2: String) -> Int {
        product(
            wordsDict.indices.filter{wordsDict[$0] == word1},
            wordsDict.indices.filter{wordsDict[$0] == word2}
        )
        .map(-)
        .reduce(.max) {result, diff in min(result, abs(diff))}
    }
}
```