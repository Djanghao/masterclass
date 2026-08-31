# [Swift] DP + BitMask, not easy to understand

**Author:** tsuiyuenhong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/855777/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/855777/)

---

```swift
class Solution {

    private var memo: [[Int]] = Array(repeating: Array(repeating: 0, count: 1 << 12), count: 13)

    func connectTwoGroups(_ a2b: [[Int]]) -> Int {
        let n = a2b.count
        let m = a2b[0].count

        // the min cost from B to A
        var minb2a: [Int] = Array(repeating: Int.max, count: m)
        for j in 0..<m {
            for i in 0..<n {
                minb2a[j] = min(minb2a[j], a2b[i][j])
            }
        }

        return dfs(a2b, minb2a, 0, 0)
    }

    private func dfs(_ a2b: [[Int]], _ minb2a: [Int], _ start: Int, _ mask: Int) -> Int {

        if memo[start][mask] != 0 { return memo[start][mask] }

        if start == a2b.count { // all values in first group is selected
            var res = 0
            for j in 0..<minb2a.count {
                if mask & 1 << j == 0 { // means value in second group is not connected with first group
                    res += minb2a[j]
                }
            }
            memo[start][mask] = res
            return res
        }

        var res = Int.max
        for j in 0..<minb2a.count {
            res = min(res, a2b[start][j] + dfs(a2b, minb2a, start + 1, mask | 1 << j))
        }
        memo[start][mask] = res
        return res
    }
}
```