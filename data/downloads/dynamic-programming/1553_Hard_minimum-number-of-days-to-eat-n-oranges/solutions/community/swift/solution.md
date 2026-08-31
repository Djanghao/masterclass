# Swift - Top down and Bottom up.

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5975770/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5975770/)

---

# Code
```swift []
class Solution {
    //bottom up
    func minDays(_ n: Int) -> Int {
        /**
        lets say dp[i] - min number of days to eat remaining i oranges

        dp[i] = min {
            dp[i - 1] + 1 , //eat one orange
            dp[i / 2] + 1 , if i % 2 == 0
            dp[(i / 3)] + 1, if i % 3 == 0
        }
        **/
        guard n > 0 else { return 0 }
        guard n > 1 else { return 1 }
        var dp = Array(repeating: 0, count: n + 1)
        dp[0] = 0 // min days to eat 0 oranges is 0
        dp[1] = 1 //min days to eat remaining 1 orange is 1

        for i in 2...n {
            let option1 = dp[i - 1] //eat one orange in another day
            let option2 = (i % 2 == 0 && (i / 2) >= 0) ? dp[ i / 2 ] : Int.max // we eat i / 2 oranges, so remaining is i / 2
            let option3 = (i % 3 == 0 && (i / 3) >= 0) ? dp[i / 3] : Int.max //we eat 2 * i / 3 , so remaining will be i / 3 

            dp[i] = 1 + min (
               option1,
               option2,
               option3 
            )
        }

        return dp[n]
    }
```
    //top down with memo
    //n - is remaining oranges
    var memo = [Int: Int]()
    func minDays(_ n: Int) -> Int {
        if n <= 2 { return n }
        if let cache = memo[n] {
            return cache
        }
        var option2 = n % 2 + minDays(n / 2) //if n % 2 
        var option3 = n % 3 + minDays(n / 3) //we eat 2 * n / 3 oranges , so rem is n / 3

        memo[n] = 1 + min(
            option2, option3
        )
        return memo[n]!
    }
}
```