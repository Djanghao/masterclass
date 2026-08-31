# Swift💯Simulation

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/5897375/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/5897375/)

---

**Naive Simulation (accepted answer)**
```
class Solution {
    func mostVisited(_ n: Int, _ rounds: [Int]) -> [Int] {
        // build freq map
        var freq = [rounds.last!:1]
        var pos = rounds[0]
        for newPos in rounds {
            while pos != newPos {
                freq[pos, default:0] += 1
                pos = pos == n ? 1 : pos+1
            }
        }
        // return the most frequent keys (keys assoc. with max value )
        let mostFreq = freq.values.max()!
        return freq.keys.filter{freq[$0]! == mostFreq}.sorted()
    }
}
```

**BONUS: Non-Obvious One-Liner (accepted answer)**
```
import Algorithms 
class Solution {
    func mostVisited(_ n: Int, _ r: [Int]) -> [Int] {
        r.last!>=r[0] ? Array(r[0]...r.last!) : Array(chain(1...r.last!, r[0]...n))
    }
}
```