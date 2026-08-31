# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/3261646/](https://leetcode.com/problems/count-unhappy-friends/solutions/3261646/)

---

```
class Solution {
    func unhappyFriends(_ n: Int, _ pr: [[Int]], _ pa: [[Int]]) -> Int {
        
        var ws = Array(repeating: Array(repeating: Int.max, count: n), count: n)
        var res = 0

        let ps = pa.reduce(into: Array(repeating: 0, count: n)) {
            $0[$1[0]] = $1[1]
            $0[$1[1]] = $1[0]
        }

        func check(_ x: Int, _ y: Int) -> Bool {
            for u in ws[x].indices
                where ws[x][u] < ws[x][y] {
                    guard ws[u][x] > ws[u][ps[u]] else { return true }
                }
            return false
        }

        for i in pr.indices {
            for j in pr[i].indices {
                ws[i][pr[i][j]] = j
            }
        }

        for p in pa {
            if check(p[0], p[1]) { res += 1 }
            if check(p[1], p[0]) { res += 1 }
        }

        return res
    }
}
```