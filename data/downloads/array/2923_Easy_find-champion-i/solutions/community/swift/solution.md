# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4349952/](https://leetcode.com/problems/find-champion-i/solutions/4349952/)

---

```
class Solution {
    func findChampion(_ grid: [[Int]]) -> Int {
        grid.firstIndex { $0.reduce(0, +) == grid.count - 1 } ?? -1
    }
}
```