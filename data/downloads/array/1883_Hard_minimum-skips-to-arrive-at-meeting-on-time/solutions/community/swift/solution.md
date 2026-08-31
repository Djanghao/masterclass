# [swift]DP

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/2217149/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/2217149/)

---

```
//  https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/
class Solution {
    private let INF = 1e9
    //\u7CBE\u5EA6\u95EE\u9898
    private let exp = 1e-8
    func minSkips(_ dist: [Int], _ speed: Int, _ hoursBefore: Int) -> Int {
        return minSkips(dist.map({Double($0)}), Double(speed), Double(hoursBefore))
    }


    private func minSkips(_ dist:[Double], _ speed: Double,_ hoursBefore: Double) -> Int {

        let N = dist.count
        //\u8DF3\u8FC7K\u6B21\uFF0C\u6240\u7528\u7684\u6700\u77ED\u65F6\u95F4
        var lastLevel = [Int:Double]()
        lastLevel[0] = 0
        for i in 0..<N {
            var newLevel = [Int:Double]()

            let need = dist[i] / speed

            for (k,t) in lastLevel {
                let t1 = t + need
                guard t1 <= hoursBefore + 1.0 else {continue}
                //don't skip
                newLevel[k] = min(ceil(t1 - exp),newLevel[k] ?? INF )
                //skip
                newLevel[k + 1] = min(t1, newLevel[k + 1] ?? INF)
            }
            lastLevel = newLevel
        }

        var ans = Int.max

        for (k,t) in lastLevel {
            if t <= hoursBefore {
                ans = min(ans, k)
            }
        }


        return Int.max == ans ? -1 : ans
    }
}


```