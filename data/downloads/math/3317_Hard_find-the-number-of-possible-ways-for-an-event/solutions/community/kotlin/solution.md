# Kotlin

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904136/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904136/)

---

didn't solve it in contest (3/4) https://youtu.be/jvslhhhK9uI?si=yKlmy77z6FBCqV-g

(idea from this guy https://www.twitch.tv/qiqi_impact)
imaging we have an `i` people and `j` stages
we want to add a new person, we can do it two ways:
* add to one of the existing `j` stages `dp[i + 1][j] = dp[i][j] * j`
* or add to a new stage. This is tricky, how many `f` ways we can add? `dp[i + 1][j + 1] = f(dp[i][j])`. Turns out, as total stages would be `x`, we have a `x - (j - 1)` ways left. So, `dp[i + 1][j + 1] = dp[i][j] * (x - (j - 1))`

Now, we have a ways to spread the people, but how many ways to assign `y` awards between them?
* for `j` stage it is `y ^ j` ways (you have to be a math guy to feel that, and I am not one of them yet)

```kotlin []

    fun numberOfWays(n: Int, x: Int, y: Int): Int {
        val MOD = 1_000_000_007L
        val dp = Array(n) { LongArray(x + 1) }; dp[0][1] = x.toLong()
        for (i in 1 until n) for (j in 1..x) 
            dp[i][j] = (dp[i-1][j] * j + dp[i-1][j-1] * (x - j + 1)) % MOD
        var res = 0L; var yj = y.toLong()
        for (j in 1..x) {
            res = (res + dp[n-1][j] * yj) % MOD
            yj = (yj * y) % MOD
        }
        return res.toInt()
    }
    
```

join me on Telegram 
https://t.me/leetcode_daily_unstoppable