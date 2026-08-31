# [Swift] 1 line

**Author:** iamhands0me
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380082/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380082/)

---

# Code
```
class Solution {
    func maximumImportance(_ n: Int, _ roads: [[Int]]) -> Int {
        zip(1...n, roads.joined().reduce(into: Array(repeating: 0, count: n)) { $0[$1] += 1 }.sorted()).map(*).reduce(into: 0, +=)
    }
}
```