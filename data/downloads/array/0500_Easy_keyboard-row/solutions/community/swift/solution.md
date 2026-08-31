# swift faster than 100% and easy to understand

**Author:** aturan23
**Votes:** 3
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/1079029/](https://leetcode.com/problems/keyboard-row/solutions/1079029/)

---

```
class Solution {
    func findWords(_ words: [String]) -> [String] {
        let row1 = Set("qwertyuiop")
        let row2 = Set("asdfghjkl")
        let row3 = Set("zxcvbnm")
        
        var matching: [String] = []
        for word in words {
            let set = Set(word.lowercased())
            if set.isSubset(of: row1) || set.isSubset(of: row2) || set.isSubset(of: row3) {
                matching.append(word)
            }
        }
        return matching
    }
}
```