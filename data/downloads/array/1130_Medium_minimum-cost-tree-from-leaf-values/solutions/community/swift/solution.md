# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/3217540/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/3217540/)

---

```
class Solution {
    func mctFromLeafValues(_ arr: [Int]) -> Int {

        var dp = arr
            .indices
            .map { Array(repeating: 0, count: arr.count - $0) }

        for s in 1..<arr.count {
            for i in 0..<(arr.count - s) {
                dp[i][s] = (i...(i + s - 1))
                    .map { (k: Int) in
                        arr[i...k].max()! * arr[(k + 1)...(i + s)].max()! + dp[i][k - i] + dp[k + 1][i - k + s - 1]
                    }
                    .min()!
            }
        }

        return dp[0][arr.count - 1]
    }
}
```