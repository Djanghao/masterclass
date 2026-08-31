# Swift - 2D DP with explanation.

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/5959739/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/5959739/)

---

# Code
```swift []
class Solution {
    func maxTastiness(_ price: [Int], _ tastiness: [Int], _ maxAmount: Int, _ maxCoupons: Int) -> Int {
        //3 options at each step
        //1. skip the fruit
        //2. buy with coupon
        //3. buy without coupon at full price

        //lets say dp[i][j] denotes max tastiness we can get using i amount and j coupons - do this for all fruits
        /**
            Dp[i][j] = max {
                dp[i][j] // not using the fruit
                dp[i - price[k]][j] + t[k]
                dp[i - price[k] / 2 ][j - 1] + t[k]
            }
        **/
        //we will eventually return dp[maxAmount][maxCoupons]
        let n = price.count 
        var dp = Array(repeating: Array(repeating: 0, count: maxCoupons + 1), count: maxAmount + 1)

        for i in 0..<n {
            let p = price[i], t = tastiness[i]
            for j in stride(from: maxAmount, through: 0, by: -1) {
                for c in stride(from: maxCoupons, through: 0, by: -1) {
                    if j >= p {
                        //not using coupon and using full price
                       dp[j][c] = max(dp[j][c], dp[j - p][c] + t) 
                    }

                    if c > 0 && j >= p/2 { 
                        //j has to be > price / 2 otherwise j - (p / 2) will go out of bounds
                        //or we can change the j stride till p/2 instead of 0
                        dp[j][c] = max(dp[j][c], dp[j - (p / 2)][c - 1] + t) 
                    }
                }
            }
        }

        return dp[maxAmount][maxCoupons]
    }
}
```