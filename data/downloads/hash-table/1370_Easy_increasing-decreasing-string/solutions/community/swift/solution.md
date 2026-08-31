# Swift: ascii counting sort, head to tail, tail to head, O(n)

**Author:** leet-me-code-you
**Votes:** 1
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/2731397/](https://leetcode.com/problems/increasing-decreasing-string/solutions/2731397/)

---

```
class Solution {
    func sortString(_ s: String) -> String {
        var res = ""
        var tables = s.reduce(into: Array(repeating: 0, count: 26)) { $0[Int($1.asciiValue!) - 97] += 1 }

        while s.count != res.count {
            for i in stride(from: 0, to: tables.count, by: 1) where tables[i] > 0 {
                res.append(Character(UnicodeScalar(i + 97)!))
                tables[i] -= 1
            }
            
            for i in stride(from: tables.count-1, through: 0, by: -1) where tables[i] > 0 {
                res.append(Character(UnicodeScalar(i + 97)!))
                tables[i] -= 1
            }
        }
        
        return res
    }
}
```