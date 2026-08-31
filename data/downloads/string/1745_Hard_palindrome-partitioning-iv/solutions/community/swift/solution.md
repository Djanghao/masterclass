# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/5917692/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/5917692/)

---

```
class Solution {
    func checkPartitioning(_ s: String) -> Bool {
        
        let s = Array(s)

        func pal(_ l: Int, _ r: Int) -> Bool {
            for i in 0...((r - l) / 2)
                where s[l + i] != s[r - i] {
                    return false
                }
            return true
        }

        var ls = [Int]()
        var rs = [Int]()

        for i in 0..<s.count
            where pal(0, i) {
                ls.append(i + 1)
            }
        
        for i in (0..<s.count).reversed()
            where pal(i, s.count - 1) {
                rs.append(i - 1)
            }
        
        for l in ls {
            for r in rs {
                guard r >= l else { break }
                if pal(l, r) { return true }
            }
        }

        return false
    }
}
```