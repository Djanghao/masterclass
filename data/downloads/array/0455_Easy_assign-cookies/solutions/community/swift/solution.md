# Simple Swift Solution

**Author:** jcobea_iOSDev
**Votes:** 2
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/2618479/](https://leetcode.com/problems/assign-cookies/solutions/2618479/)

---

```
class Solution {
    func findContentChildren(_ g: [Int], _ s: [Int]) -> Int {
        var size = s.sorted(by: >)
        var counter = 0
        for studentGreed in g.sorted(by: >) {
            if let maxCookieSize = size.first, maxCookieSize >= studentGreed {
                size.removeFirst()
                counter += 1
            }
        }
        return counter
    }
}
```