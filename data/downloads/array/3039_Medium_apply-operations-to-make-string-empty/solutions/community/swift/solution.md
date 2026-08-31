# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/5366516/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/5366516/)

---

```
class Solution {
    func lastNonEmptyString(_ s: String) -> String {

        let s = Array(s)
        
        var freq = [Character: Int]()
        var idx = [Character: Int]()

        for i in 0..<s.count {
            freq[s[i], default: 0] += 1
            idx[s[i]] = i
        }

        let ma = freq.values.max()!
        let ch = freq.filter({ $0.value == ma }).map({ $0.key })

        return String(ch.sorted { idx[$0]! < idx[$1]! })
    }
}
```