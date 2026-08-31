# Swift | One-Liner | s.max() == t.max()

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3195199/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3195199/)

---

**One-Liner (accepted answer)**
```
class Solution {
    func makeStringsEqual(_ s: String, _ t: String) -> Bool {
        s.max() == t.max()
    }
}
```

---

**One-Liner, twice as fast (accepted answer)**
```
class Solution {
    func makeStringsEqual(_ s: String, _ t: String) -> Bool {
        s == t || (s.firstIndex(of: "1") != nil && t.firstIndex(of: "1") != nil)
    }
}
```