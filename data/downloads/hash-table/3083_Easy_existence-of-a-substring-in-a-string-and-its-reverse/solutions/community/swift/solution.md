# Swift | Set

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4974881/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4974881/)

---

**Set (accepted answer)**
```
class Solution {
    func isSubstringPresent(_ s: String) -> Bool {
        let set = Set(zip(s,s.dropFirst()).map{[$0,$1]})
        return set.first{set.contains($0.reversed())} != nil
    }
}
```