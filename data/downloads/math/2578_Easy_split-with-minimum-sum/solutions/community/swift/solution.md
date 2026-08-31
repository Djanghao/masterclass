# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3267849/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3267849/)

---

```
class Solution {
    func splitNum(_ num: Int) -> Int {
        
        let digits = String(num)
            .filter { $0 != "0" }
            .sorted()
        
        var a = "0"
        var b = "0"

        for c in digits {
            if a.count == b.count {
                a.append(c)
            }
            else {
                b.append(c)
            }
        }

        return Int(a)! + Int(b)!
    }
}
```