# 100% faster and 100% takes less space [Swift]

**Author:** Akromium
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2453298/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2453298/)

---

```
class Solution {
    func minRefuelStops(_ target: Int, _ startFuel: Int, _ stations: [[Int]]) -> Int {
        if stations.count == 0 {
            return startFuel >= target ? 0 : -1
        }
        if startFuel >= target {
            return 0
        }
        if startFuel < stations[0][0] {
            return -1
        }
        var dp = [Int](repeating: startFuel, count: stations.count + 1)
        for i in 0..<stations.count {
            for j in (0...i).reversed() {
                if dp[j] >= stations[i][0] {
                    dp[j + 1] = max(dp[j + 1], dp[j] + stations[i][1])
                }
            }
        }
        for i in 0...stations.count {
            if dp[i] >= target {
                return i
            }
        }
        return -1
    }
}
```
If you like my solution please upvote)