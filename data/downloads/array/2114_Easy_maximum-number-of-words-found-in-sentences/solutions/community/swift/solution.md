# Swift one line solution

**Author:** shoh_in
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/2976181/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/2976181/)

---


# Code
```
class Solution {
    func mostWordsFound(_ sentences: [String]) -> Int {
        sentences.map { $0.components(separatedBy: " ") }.map { $0.count }.max() ?? 0
    }
}
```