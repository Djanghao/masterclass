# Swift - DP - O(n) time and O(1) space

**Author:** wenjiema
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/6095742/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/6095742/)

---

# Intuition
Requirement 2 makes the problem tricky: "There is at least a gap of 2 rolls between equal valued rolls". 

1. Ignoring requirement 2 first: the problem can be solved with dp. call it `dp[i][j]`, where i represent possible tosses (1,2,3,4,5,6) and j represents number of tosses performed. At each toss j and for each toss value, we have:
```
dp[1][j] = dp[2][j-1] + dp[3][j-1] + dp[4][j-1] + dp[5][j-1] + dp[6][j-1]
dp[2][j] = dp[1][j-1] + dp[3][j-1] + dp[5][j-1]
dp[3][j] = dp[1][j-1] + dp[2][j-1] + dp[4][j-1] + dp[5][j-1]
dp[4][j] = dp[1][j-1] + dp[3][j-1] + dp[5][j-1]
dp[5][j] = dp[1][j-1] + dp[2][j-1] + dp[3][j-1] + dp[4][j-1] + dp[6][j-1]
dp[6][j] = dp[1][j-1] + dp[5][j-1]
```

Then final result is `dp[1][n] + dp[2][n] + dp[3][n] + dp[4][n] + dp[5][n] + dp[6][n]`

2. To fulfill requirement 2, I will track the combinations that needs to be subtracted from each `dp[i][j]`, that is where the `n`th toss has the same value as `n-2`th toss. I am doing that in anther dp array call it `b[i][j][k]`, where i,j in b both represents possible tosses, and k represents number of tosses performed; and `b[i][j][k]` represents number of sequences that ends in (i,j)

So now `dp[i][j]` will subtrack all `b[j][?][i-1]`, where '?' denotes possible values that can go before i. For example for `dp[6][j]`, it now becomes
```
dp[6][j] = dp[1][j-1] - b[6][1][j-1] + dp[5][j-1] - b[6][5][j-1]
           -------------------------
                      |
           for all the combinations 
           ending in 1,6, we will subtract
           prev combinations ending in 6,1
           because we don't allow 6,1,6
```


# Approach
In implementation notice that for toss `j`, we only need toss `j-1`'s state, so the solution can be optimized with constant space, I am calling it `a[i]` and `b[i][j]` in the code. 

1. Implementation is simplified with a for loop.
2. we should only need to perform subtraction starting from 3rd toss, but because the initial values in `b` are zero, the subtraction can still be performed for simplification of implemetation.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func distinctSequences(_ n: Int) -> Int {
        guard n > 1 else {
            return 6
        }
        var a = Array(repeating: 1, count: 7)
        var b = Array(repeating: Array(repeating: 0, count: 7), count: 7)
        let comb = [1:[2,3,4,5,6],
                    2:[1,3,5],
                    3:[1,2,4,5],
                    4:[1,3,5],
                    5:[1,2,3,4,6],
                    6:[1,5]]
        let mod = 1000000000 + 7
        for i in 2...n {
            var tempb = Array(repeating: Array(repeating: 0, count: 7), count: 7)
            var tempa = Array(repeating: 0, count: 7)
            for (curr, nexts) in comb {
                for next in nexts {
                    tempb[curr][next] = (a[curr] - b[next][curr]) % mod
                    if tempb[curr][next] < 0 {
                        // protect against negative values
                        tempb[curr][next] += mod 
                    }
                    tempa[next] += tempb[curr][next]
                    tempa[next] %= mod
                }
            }
            b = tempb
            a = tempa
        }

        return a.reduce(0,+) % mod
    }
}
```