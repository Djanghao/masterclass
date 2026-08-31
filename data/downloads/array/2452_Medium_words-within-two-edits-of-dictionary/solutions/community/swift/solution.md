# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3306814/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3306814/)

---

```
class Solution {
    func twoEditWords(_ q: [String], _ d: [String]) -> [String] {
        
        func ok(_ w: String) -> Bool {
            
            func ok(_ w: String, _ q: String) -> Bool {
                guard w.count == q.count else { return false }

                var i = w.startIndex
                var d = 0

                while i != w.endIndex, d < 3 {
                    if w[i] != q[i] { d += 1 }
                    i = w.index(after: i)
                }

                return d < 3
            }

            return d.contains { ok(w, $0) }
        }

        return q.filter(ok)
    }
}
```