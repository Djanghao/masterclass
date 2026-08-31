# Swift Solution | DP

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/2972626/](https://leetcode.com/problems/number-of-great-partitions/solutions/2972626/)

---

# Approach
Calculates the number of permutations of A with k as the maximum sum of any partition.

So, we have to subtract the number of permutations of A with k as the minimum sum from the number of permutations of A with k as the maximum sum.

For the first part, we calculate the number of permutations of A with k as the maximum sum using dynamic programming.
We have a dp array, which stores the number of permutations of A with k as the maximum sum and the sum of the partition is i.
We have a res variable, which stores the number of permutations of A with k as the maximum sum.

We have a total variable, which stores the sum of all elements in A.
We iterate over all elements in A, and we iterate over all values of i in reverse order, and we update dp[i + a] = dp[i + a] + dp[i] (mod 1e9 + 7).
We update res = res * 2 (mod 1e9 + 7).
We update total = total + a.
We iterate over all values of i, and we update res = res - (total - i < k ? dp[i] : dp[i] * 2).
We return (res + 1e9 + 7) % 1e9 + 7.

# Complexity
- Time complexity: O(nk)

- Space complexity: O(k)

# Code
```
class Solution {
    func countPartitions(_ A: [Int], _ k: Int) -> Int {
        let mod: Int = Int(1e9) + 7
        var total: Int = 0, res: Int = 1, dp: [Int] = [Int](repeating: 0, count: k)
        dp[0] = 1
        for a in A {
            for i in stride(from: k - 1 - a, to: -1, by: -1) {
                dp[i + a] = (dp[i + a] + dp[i]) % mod
            }
            res = res * 2 % mod
            total += a
        }
        for i in 0..<k {
            res -= total - i < k ? dp[i] : dp[i] * 2
        }
        return (res % mod + mod) % mod
    }
}
```