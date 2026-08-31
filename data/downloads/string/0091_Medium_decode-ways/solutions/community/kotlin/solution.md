# Interview Approach Solution

**Author:** cs_iitian
**Votes:** 6
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4454238/](https://leetcode.com/problems/decode-ways/solutions/4454238/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. `In what cases you can't pick zero ?`
    If the string starts with zero, you can not pick it.
    If the previous character is more than 2 in that case also you can't pick it up, why ? Because 10 and 20 are the only thing you can pick not 30,40 etc.
2. `In what cases you can pick one character ?`
    We can always pick one character, if it is not zero.
3. `In what cases you can only pick one character ?`
    The range is 1 to 26, so if we have more than 26 we can't pick it up.
4. `In what cases you can only pick two character ?`
    If it is 10 or 20, we have to pick these as 2 characters.

# Top Down Approach
```kotlin []
class Solution {

    lateinit var memo: IntArray

    fun numDecodings(s: String): Int {
        memo = IntArray(s.length+1){-1}
        val ans = solve(s, 0, s.length)
        return if(ans == -1) 0 else ans
    }

    fun solve(s: String, curr: Int, n: Int): Int {
        if(curr >= n) return 1

        if(memo[curr] != -1) return memo[curr]

        val ch = s[curr]
        if(ch == '0') return 0
        val nextCh = if(curr < n-1) s[curr+1] else 'N'

        val pickOne = if(nextCh != '0') solve(s, curr+1, n) else 0
        val pickTwo = if(nextCh != 'N' && ch <= '1' || ch == '2' && nextCh <= '6') solve(s, curr+2, n) else 0

        memo[curr] = pickOne + pickTwo
        return memo[curr]
    }
}
```

# Bottom Up Approach

### Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```kotlin []
class Solution {

    fun numDecodings(s: String): Int {
        val n = s.length
        val dp = IntArray(n+1){0}
        dp[0] = 1
        for(i in 1..n) {
            val ch = s[i-1]
            if(ch == '0') dp[i] = 0
            val prevCh = if(i > 1) s[i-2] else '0'
            if(ch != '0') dp[i] += dp[i-1]
            if(prevCh != '0' && prevCh <= '1' || prevCh == '2' && ch <= '6') dp[i] += dp[i-2]
        }
        return dp[n]
    }
}
```


# Space Optimisation Approach
Since we are using last two element's value from dp, we can get rid of dp and instead we can just use 2 variables which can store previous two values.

### Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```kotlin []
class Solution {

    fun numDecodings(s: String): Int {
        val n = s.length
        val dp = IntArray(n+1){0}
        var a = 0
        var b = 1
        for(i in 1..n) {
            var c = 0
            val ch = s[i-1]
            if(ch == '0') c = 0
            val prevCh = if(i > 1) s[i-2] else '0'
            if(ch != '0') c += b
            if(prevCh != '0' && prevCh <= '1' || prevCh == '2' && ch <= '6') c += a
            a = b
            b = c
        }
        return b
    }
}
```