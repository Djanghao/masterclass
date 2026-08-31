# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/5862699/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/5862699/)

---

**Good Interview Answer (accepted answer)**
Create frequency map and check if all frequency values are the same.
```
class Solution {
    func areOccurrencesEqual(_ s: String) -> Bool {
        let freq = Set(Dictionary(s.map{ch in (ch, 1)}, uniquingKeysWith: +).value
        let referenceCount = freq[s.first!]!
        return freq.values.allSatisfy{count in count == referenceCount}
    }
}
```

**One-Liners (accepted answer)**
```
class Solution {
    func areOccurrencesEqual(_ s: String) -> Bool {
        Set(Dictionary(s.map{($0,1)}){$0+$1}.values).count == 1
    }
}
```
```
import Algorithms
class Solution {
    func areOccurrencesEqual(_ s: String) -> Bool {
        Array(Dictionary(s.map{($0,1)}){$0+$1}.values.uniqued()).count == 1
    }
}
```