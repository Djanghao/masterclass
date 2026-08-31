# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/3389727/](https://leetcode.com/problems/rotated-digits/solutions/3389727/)

---

```
class Solution {
    func rotatedDigits(_ n: Int) -> Int {

        let tbl: [Character: String] = [
            "0": "0",
            "1": "1",
            "8": "8",
            "2": "5",
            "5": "2",
            "6": "9",
            "9": "6"
        ]
        
        func ok(_ n: Int) -> Bool {
            let or = String(n)
            let ro = or.map({ tbl[$0, default: ""] }).joined()
            return ro.count == or.count && ro != or
        }

        return (1...n).filter(ok).count
    }
}
```