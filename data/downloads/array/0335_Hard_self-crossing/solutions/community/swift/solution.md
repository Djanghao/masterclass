# swift solution

**Author:** aayushkumar20
**Votes:** 2
**Link:** [https://leetcode.com/problems/self-crossing/solutions/2470000/](https://leetcode.com/problems/self-crossing/solutions/2470000/)

---

```
class Solution {
    func isSelfCrossing(_ x: [Int]) -> Bool {
        var n = x.count
        if n <= 3 {
            return false
        }
        for i in 3..<n {
            if x[i] >= x[i-2] && x[i-1] <= x[i-3] {
                return true
            }
            if i >= 4 && x[i-1] == x[i-3] && x[i] + x[i-4] >= x[i-2] {
                return true
            }
            if i >= 5 && x[i-2] >= x[i-4] && x[i-3] >= x[i-1] && x[i] + x[i-4] >= x[i-2] && x[i-1] + x[i-5] >= x[i-3] {
                return true
            }
        }
        return false
    }
}
```