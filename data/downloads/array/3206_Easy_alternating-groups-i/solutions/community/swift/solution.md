# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/6060160/](https://leetcode.com/problems/alternating-groups-i/solutions/6060160/)

---

**FP (accepted answer)**
```
import Algorithms
class Solution {
    func numberOfAlternatingGroups(_ colors: [Int]) -> Int {
        colors.indices.reduce(0) {count, n in
            count +
            (n...)
            .prefix(3)
            .map{colors[$0%colors.count]}
            .adjacentPairs()
            .map(^) // both pairs will be 1 if alternating
            .reduce(1,*) // multiply both xor-ed pairs together to verify all ones.
        }
    }
}
```

**Alternate approach (accepted answer)**
```
import Algorithms
class Solution {
    func numberOfAlternatingGroups(_ colors: [Int]) -> Int {
        (colors+colors).windows(ofCount: 3).prefix(colors.count).compactMap{[[0,1,0],[1,0,1]].contains($0) ? $0 : nil}.count
    }
}
```