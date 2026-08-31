# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3239714/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3239714/)

---

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n)

# Code
```
class Solution {
    func numberOfWays(_ numPeople: Int) -> Int {
        var dp = Array(repeating: 0, count: numPeople / 2 + 1)
        dp[0] = 1

        let m = 1_000_000_007
        for i in 1...(numPeople / 2) {
            for j in 0..<i {
                let subways = dp[j] * dp[i - j - 1] % m
                dp[i] = (dp[i] + subways) % m
            }
        }

        return dp[numPeople / 2]
    }
}
```