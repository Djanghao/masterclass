# Swift solution (Brute force O(n))

**Author:** AndreevIVdev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2493848/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2493848/)

---

```
class Solution {
    func garbageCollection(_ garbage: [String], _ travel: [Int]) -> Int {
        "MGP".map{ collectGarbage(garbage, travel + [0], type: $0) }.reduce(0, +)
    }
    
    private func collectGarbage(_ garbage: [String], _ travel: [Int], type: Character) -> Int {
        var time = 0
        var res = 0
        for i in 0..<garbage.count {
            let n = garbage[i].filter{ $0 == type }.count
            if n > 0 {
                time += n
                res = time
            }
            time += travel[i]
        }
        
        return res
    }
}
```