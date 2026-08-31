# Swift | Two Pass

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/4094777/](https://leetcode.com/problems/decoded-string-at-index/solutions/4094777/)

---

**Two Pass (accepted answer)**
```
class Solution {
    func decodeAtIndex(_ s: String, _ k: Int) -> String {
        func atoi(_ c:Character)->Int {Int(c.asciiValue!-48)}
        var size = s.reduce(0) {$1.isNumber ? $0*atoi($1) : $0+1}
        var k = k
        for ch in s.reversed() {
            k %= size
            guard k != 0 || !ch.isLetter else { return String(ch) }
            size = ch.isNumber ? size/atoi(ch) : size-1
        }
        fatalError()
    }
}
```