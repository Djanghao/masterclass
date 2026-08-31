# Swift solution

**Author:** samiul110107
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2435262/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2435262/)

---

```
class Solution {
    func edgeScore(_ edges: [Int]) -> Int {
        var map = [Int: Int]()
        for (i, edge) in edges.enumerated() {
            map[edge,default: 0] += i
        }
        var max_ = (0,0)
        for (key, value) in map {
            if value > max_.1 {
                max_ = (key, value)
            } else if value == max_.1 {
                max_ = (min(max_.0, key), value)
            }
        }
        return max_.0
    }
}
```