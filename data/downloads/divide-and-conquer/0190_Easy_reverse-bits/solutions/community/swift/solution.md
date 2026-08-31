# Swift, very simple solution

**Author:** SchrodZzz
**Votes:** 6
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/562090/](https://leetcode.com/problems/reverse-bits/solutions/562090/)

---

```
class Solution {
    func reverseBits(_ n: Int) -> Int {
        let raw = String(n, radix: 2)
        let str = String(repeating: "0", count: 32 - raw.count) + raw
        return Int(String(str.reversed()), radix: 2) ?? -1
    }
}
```