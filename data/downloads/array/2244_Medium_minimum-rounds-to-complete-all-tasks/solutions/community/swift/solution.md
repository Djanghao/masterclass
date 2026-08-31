# Swift | Easy solution | With HashMap

**Author:** diss93
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2996182/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2996182/)

---

HashMap - Counting solution

```
class Solution {
    func minimumRounds(_ tasks: [Int]) -> Int {
        var hm: [Int: Int] = [:]
        for i in tasks {
            hm[i, default: 0] += 1
        }
        var count = 0
        for i in hm {
            if i.value > 1 {
                count += Int(i.value / 3)
                count += i.value % 3 == 0 ? 0 : 1    
            } else {
                return -1
            }
        }
        return count
    }
}
```