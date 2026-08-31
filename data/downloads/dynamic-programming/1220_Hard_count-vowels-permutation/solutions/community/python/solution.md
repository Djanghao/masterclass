# 🔥 Python || Detailed Explanation ✅ || Fast Than 91% || Less Than 93% || DP || Fast || MATH

**Author:** wingskh
**Votes:** 35
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/2391936/](https://leetcode.com/problems/count-vowels-permutation/solutions/2391936/)

---

**Appreciate if you could upvote this solution**

Method: `DP`
Since the maximum length of the words is `n` and there are total `5` vowels, we could create a `dp[n][5]` matrix first.
Thus, dp[i][j] means the number of strings of length `i` that ends with the `j`-th vowel so `dp[i]` is the result for word with `n = i`

Basically, the result of word with `n = i` is depending on the result of word with `n = i - 1` so it can be solved by dynamic programming.
Therefore, for each row `dp[i][j]` is depending on the row `dp[i - 1][j]`
```
can only follow:
 - a -> e, i and u
 - e -> a and i
 - i -> e and o
 - o -> i
 - u -> i and o
```
Code:
```
class Solution:
    def countVowelPermutation(self, n: int) -> int:
        # dp[i][j] means the number of strings of length i that ends with the j-th vowel.
        dp = [[1] * 5] + [[0] * (5) for _ in range(n - 1)]
        moduler = math.pow(10, 9) + 7
        for i in range(1, n):
            # For vowel a
            dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % moduler
            # For vowel e
            dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % moduler
            # For vowel i
            dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % moduler
            # For vowel o
            dp[i][3] = (dp[i - 1][2]) % moduler
            # For vowel u
            dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % moduler
            
        return int(sum(dp[-1]) % moduler)
```

**Time complexity**: `O(n)` 
**Space complexity**: `O(n^2)` 

<br/>

As stated as above, for each row `dp[i][j]` is depending on the row `dp[i - 1][j]` only.
Thus, we do need to store the row less than `i - 1` so the space complexity could be lower

Code:
```
class Solution:
    def countVowelPermutation(self, n: int) -> int:
        moduler = math.pow(10, 9) + 7
        a, e, i, o, u = [1] * 5
        for _ in range(n - 1):
            a, e, i, o, u = map(lambda x: x % moduler, [(e + i + u), (a + i), (e + o), (i), (i + o)])
        return int((a + e + i+ o + u) % moduler)
```
**Time complexity**: `O(n)` 
**Space complexity**: `O(1)` 
<br/>