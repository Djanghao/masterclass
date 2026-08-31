# Swift | 2-D DP

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4011453/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4011453/)

---

**DP (accepted answer)**
```
class TreeAncestor {
    var dp: [[Int]] 
    let logN: Int
    
    init(_ n: Int, _ parent: [Int]) {
        logN = Int(log2(Double(n)))+1
        dp = Array(repeating: Array(repeating: -1, count: n), count: logN)
        dp[0] = parent
        for i in 1 ..< logN {
            for j in 0 ..< n {
                dp[i][j] = dp[i-1][j]<0 ? -1 : dp[i-1][dp[i-1][j]]
            }
        }
    }
    
    func getKthAncestor(_ node: Int, _ k: Int) -> Int {
        var node = node
        for i in 0 ..< logN where k >> i & 1 == 1 {
            node = dp[i][node]
            guard node >= 0 else { return -1 }
        }
        return node
    }
}
```