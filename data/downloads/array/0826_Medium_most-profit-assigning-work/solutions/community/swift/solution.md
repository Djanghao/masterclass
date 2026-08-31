# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5442798/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5442798/)

---

```
class Solution {
    func maxProfitAssignment(_ difficulty: [Int], _ profit: [Int], _ worker: [Int]) -> Int {
        
        var works = [Int: Int]()

        for i in 0..<profit.count {
            works[difficulty[i]] = max(works[difficulty[i], default: 0], profit[i])
        }

        let difs = works.keys.sorted()
        var pro = 0

        for i in 0..<difs.count {
            pro = max(pro, works[difs[i]]!)
            works[difs[i]] = pro
        }

        var res = 0

        for w in worker {
            if w < difs.first! {
                continue
            }
            else if w > difs.last! {
                res += works[difs.last!]!
            }
            else {
                let dif = difs.last { $0 <= w }
                res += works[dif!]!
            }
        }

        return res
    }
}
```