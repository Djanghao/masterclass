# Interview Approach - Brute force to DP

**Author:** cs_iitian
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458757/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458757/)

---

# Video Solution
https://youtu.be/W6StG1nJM-A

# Brute Force Solution

Let\u2019s see you have 2 dices, where k is 3 means 1 , 2 , 3 is possible to show up on dice

first dice \u21D2 [1, 2, 3]

second dice \u21D2 [1, 2, 3]

Now for every entry in first dice, It is possible to get all entry of second dice

means if we got 1 at first dice, it is possible to get 1, 2 or 3 in second dice

and each time we can increment our sum.

like if we get 1 in first and 2 in second than our sum would be 3.

`Now as we keep adding sum, what would happen once we have added for all possible dices ?`

then we will compare with our target, if it is matched then return 1 else return 0.

`Now what if we still have some dice left but we have reached our target ?`

then we have to return 0, because we have to use all dices to calculate sum.

Approach

we start sum as 0, and iterate from 1 to k and add this into sum, and keep on decrementing n as we processed one dice.

and at final we will check our base conditions mentioned above.

```kotlin
class Solution {

    val mod = 1e9.toLong() + 7

    fun numRollsToTarget(n: Int, k: Int, target: Int): Int {
        return (solve(n, k, target, 0)%mod).toInt();
    }

    fun solve(n: Int, k: Int, target: Int, sum: Int): Long {
        if(n == 0) {
            if(sum == target) return 1
            return 0
        }

        if(sum == target) {
            return if(n == 0) 1 else 0
        }

        var ans: Long = 0
        for(i in 1..k) {
            if(sum+i <= target) ans = (ans + solve(n-1, k, target, sum + i))%mod
            else break
        }

        return ans
    }
}
```

# Apply Caching ( Top Down DP )

`Now if you run this approach, you will get TLE why ?`

Because here we are recalculating many things. So we need to apply caching here to avoid recalculation.

See the below code

```kotlin
class Solution {

    lateinit var memo : Array<Array<Long>>
    val mod = 1e9.toLong() + 7

    fun numRollsToTarget(n: Int, k: Int, target: Int): Int {
        memo = Array(n+1) { Array(target+1) {-1} }
        return (solve(n, k, target, 0)%mod).toInt();
    }

    fun solve(n: Int, k: Int, target: Int, sum: Int): Long {
        if(n == 0) return if(sum == target) 1 else 0
        if(sum == target) return if(n == 0) 1 else 0

        if(memo[n][sum] != -1L) return memo[n][sum]

        var ans: Long = 0
        for(i in 1..k) {
            if(sum+i <= target) ans = (ans + solve(n-1, k, target, sum + i))%mod
            else break
        }

        memo[n][sum] = ans
        return ans
    }
}
```

This is called top down approach ( recursive way) . Now we will change it into iterative way called bottom up approach.

# Bottom Up Approach DP

```kotlin
class Solution {

    val mod = 1e9.toLong() + 7

    fun numRollsToTarget(n: Int, k: Int, target: Int): Int {
        val dp = Array(n+1) { Array(target+1) {0L} }
        dp[0][0] = 1

        for (i in 1..n) {
            for (j in 1..target) {
                var ans: Long = 0
                for (x in 1..k) {
                    if (j - x >= 0) {
                        ans = (ans + dp[i - 1][j - x]) % mod
                    }
                }
                dp[i][j] = ans
            }
        }

        return (dp[n][target]%mod).toInt()
    }
}
```

# Upvote It \uD83D\uDE43
![image.png](./images/0.png)


Thanks !!!