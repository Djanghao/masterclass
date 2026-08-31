# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/3044503/](https://leetcode.com/problems/prime-arrangements/solutions/3044503/)

---

```
class Solution {
    func numPrimeArrangements(_ n: Int) -> Int {
        
        func p(_ x: Int) -> Bool {
            guard x > 1 else { return false }
            guard x > 3 else { return true }
            return (2...(x / 2)).allSatisfy { x % $0 != 0 }
        }
        
        func f(_ x: Int) -> Int {
            guard x > 0 else { return 1 }
            return (1...x).reduce(into: 1) { $0 = ($0 * $1) % 1000000007 }
        }
        
        let pc = (1...n).filter(p).count
        let nc = n - pc
        
        return f(pc) * f(nc) % 1000000007
    }
}
```