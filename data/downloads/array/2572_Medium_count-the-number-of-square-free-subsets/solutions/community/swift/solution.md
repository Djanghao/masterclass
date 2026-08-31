# Swift | DP | Fastest 300 ms

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3207714/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3207714/)

---

**DP (accepted answer)**
```
class Solution {
    func squareFreeSubsets(_ nums: [Int]) -> Int {
        let primes = [2,3,5,7,11,13,17,19,23,29]
        let bitMasks = (0..<31).map {i in zip(0..., primes).filter{i % $0.1 == 0}.reduce(0) { $0 | 1 << $1.0}}
        let bits = nums.filter { ($0 % 4 != 0) && ($0 % 9 != 0) && ($0 != 25) }.map { bitMasks[$0] }
        var dp = Array(repeating: Array(repeating: 0, count: 1024), count: bits.count)
        
        func dfs(_ i: Int, _ mask: Int) -> Int {
            guard i < bits.count else { return 0 }
            guard dp[i][mask] == 0 else { return dp[i][mask]-1 }
            dp[i][mask] = 1 + dfs(i+1, mask) + (mask & bits[i] == 0 ? dfs(i+1, mask | bits[i]) + 1 : 0)
            return (dp[i][mask] - 1) % Int(1.0e9 + 7)
        }
        
        return dfs(0,0)
    }
}
```