# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/4666543/](https://leetcode.com/problems/russian-doll-envelopes/solutions/4666543/)

---

```
class Solution {
    func maxEnvelopes(_ envelopes: [[Int]]) -> Int {
        
        let envs = Set(envelopes).sorted { (a: [Int], b: [Int]) -> Bool in
            (a[0] == b[0]) ? (a[1] < b[1]) : (a[0] < b[0])
        }

        var dp = [[[0, 0]]]

        for e in envs {
            for j in dp.indices.reversed()
                where dp[j].contains(where: { e[0] > $0[0] && e[1] > $0[1] }) {
                    
                    if j == dp.count - 1 {
                        dp.append([e])
                    }
                    else {
                        dp[j + 1].append(e)
                    }

                    break
                }
        }

        return dp.count - 1
    }
}
```