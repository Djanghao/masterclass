# Swift one-liner

**Author:** yamironov
**Votes:** 14
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1212855/](https://leetcode.com/problems/sorting-the-sentence/solutions/1212855/)

---

Swift one-liner
1. split, 2. sort by last char, 3. remove last char, 4. join
```
class Solution {
    func sortSentence(_ s: String) -> String {
        return s.split(separator: " ").sorted(by: { $0.last! < $1.last! }).map({ $0.dropLast() }).joined(separator: " ")
    }
}
```