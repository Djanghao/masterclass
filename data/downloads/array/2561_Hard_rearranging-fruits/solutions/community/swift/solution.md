# Swift solution using dictionary

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3152484/](https://leetcode.com/problems/rearranging-fruits/solutions/3152484/)

---

Swift solution based on 
https://leetcode.com/problems/rearranging-fruits/solutions/3143735/ordered-map/

# Code
```
class Solution {
    func minCost(_ b1: [Int], _ b2: [Int]) -> Int {
        var m: [Int: Int] = [:]
        for c in b1 {
            m[c, default: 0] += 1
        }
        
        for c in b2 {
            m[c, default: 0] -= 1
        }
        
        var swaps = 0, res = 0
        
        for (c, cnt) in m {
            if cnt % 2 == 1 {
                return -1
            }
            swaps += max(0, cnt / 2)
        }
        
        let m1 = m.sorted(by: { $0.key < $1.key })
        
        for (c, cnt) in m1 {
            let take = min(swaps, abs(cnt) / 2)
            res += take * min(c, m1.first!.key * 2)
            swaps -= take
        }
        
        return res
    }
}
```