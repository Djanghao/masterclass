# Swift solution (Travelling Salesman Problem)

**Author:** yamironov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/1226130/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/1226130/)

---

Swift version of https://leetcode.com/problems/find-the-shortest-superstring/discuss/194932/Travelling-Salesman-Problem
```
class Solution {
    func shortestSuperstring(_ words: [String]) -> String {
        let n = words.count, n2 = 1 << n

        // build the graph
        var graph = [[Int]](repeating: [Int](repeating: 0, count: n), count: n)
        for i in 0..<n {
            forj: for j in 0..<n {
                let ic = words[i].count, jc = words[j].count
                for k in 0..<ic where words[j].starts(with: words[i].suffix(ic - k)) {
                    graph[i][j] = jc - ic + k
                    continue forj
                }
                graph[i][j] = jc
            }
        }

        // start TSP DP
        var dp = [[Int]](repeating: [Int](repeating: Int.max, count: n), count: n2), path = dp
        for i in 1..<n2 {
            for j in 0..<n where i & (1 << j) > 0 {
                let prev = i - (1 << j)
                if prev == 0 {
                    dp[i][j] = words[j].count
                } else {
                    for k in 0..<n where dp[prev][k] < Int.max && dp[prev][k] + graph[k][j] < dp[i][j] {
                        dp[i][j] = dp[prev][k] + graph[k][j]
                        path[i][j] = k
                    }
                }
            }
        }

        // build the path
        var stack = [Int](), cur = n2 - 1, last = dp[n2 - 1].firstIndex(of: dp[n2 - 1].min()!)!
        while cur > 0 {
            stack.append(last)
            (cur, last) = (cur - (1 << last), path[cur][last])
        }

        // build the result
        var result = words[stack.last!]
        for i in stride(from: stack.count - 2, through: 0, by: -1) {
            let curWordIndex = stack[i], prevWordIndex = stack[i + 1]
            result += String(words[curWordIndex].suffix(graph[prevWordIndex][curWordIndex]))
        }

        return result
    }
}
```