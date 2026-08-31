# Swift | Sort | Short

**Author:** jayantsogikar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944882/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944882/)

---

```
func minimumEffort(_ tasks: [[Int]]) -> Int {
    var mat = tasks.sorted(by: {($0[1] - $0[0]) > ($1[1] - $1[0])})
    var energy = 0, inc = 0
    for ar in mat{
        if energy < ar[1]{
            inc += ar[1] - energy
            energy += (ar[1] - energy)
        }
        energy -= ar[0]
    }
    return inc
}
```