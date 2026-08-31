# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4647941/](https://leetcode.com/problems/number-of-changing-keys/solutions/4647941/)

---

```
class Solution {
    func countKeyChanges(_ s: String) -> Int {

        let s = Array(s.lowercased())
        var res = 0

        for i in 1..<s.count
            where s[i] != s[i - 1] {
                res += 1
            }
        
        return res
    }
}
```