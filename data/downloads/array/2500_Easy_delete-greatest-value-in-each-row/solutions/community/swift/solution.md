# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3353562/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3353562/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func deleteGreatestValue(_ grid: [[Int]]) -> Int {
        grid.reduce(grid[0].map{$0*0}) {a,r in zip(a,r.sorted()).map { max($0.0, $0.1) }}.reduce(0,+)
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func deleteGreatestValue(_ grid: [[Int]]) -> Int {
        grid.reduce(Array(repeating: 0, count: grid[0].count)) { result, row in 
            zip(result, row.sorted()).map { max($0.0, $0.1) }
        }
        .reduce(0, +) // sum all values in array
    }
}
```