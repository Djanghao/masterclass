# ✔100% || 0ms || 1 liner || faster || dp || 3 ways

**Author:** ManojKumarPatnaik
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2029541/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2029541/)

---

```
Explanation
dp[n][k] means the number of strings constructed by at most k different characters.

If k = 1, use only u
If k = 2, use only o,u
If k = 3, use only i,o,u
If k = 4, use only e,i,o,u
If k = 5, use only a,e,i,o,u


Solution 1: Top Down
Time O(nk)
Space O(nk)
where k = 5

Python:

    def countVowelStrings(self, n):
        seen = {}
        def dp(n, k):
            if k == 1 or n == 1: return k
            if (n, k) in seen:
                return seen[n, k]
            seen[n, k] = sum(dp(n - 1, k) for k in xrange(1, k + 1))
            return seen[n, k]
        return dp(n, 5)
Solution 2: Bottom Up
Time O(nk)
Space O(nk)
where k = 5

java 

public int countVowelStrings(int n) {
        int[][] dp = new int[n + 1][6];
        for (int i = 1; i <= n; ++i)
            for (int k = 1; k <= 5; ++k)
                dp[i][k] = dp[i][k - 1] + (i > 1 ? dp[i - 1][k] : 1);
        return dp[n][5];
    }
	
	
	
	C++:

    int countVowelStrings(int n) {
        vector<vector<int>>dp(n + 1, vector<int>(6));
        for (int i = 1; i <= n; ++i)
            for (int k = 1; k <= 5; ++k)
                dp[i][k] = dp[i][k - 1] + (i > 1 ? dp[i - 1][k] : 1);
        return dp[n][5];
    }
Python:

    def countVowelStrings(self, n):
        dp = [[1] * 6] + [[0] * 6 for i in xrange(n)]
        for i in xrange(1, n + 1):
            for k in xrange(1, 6):
                dp[i][k] = dp[i][k - 1] + dp[i - 1][k]
        return dp[n][5]

Solution 3: Bottom up, 1D DP
Time O(nk)
Space O(k)
where k = 5

Java:

    public int countVowelStrings(int n) {
        int[] dp = new int[] {0, 1, 1, 1, 1, 1};
        for (int i = 1; i <= n; ++i)
            for (int k = 1; k <= 5; ++k)
                dp[k] += dp[k - 1];
        return dp[5];
    }
C++:

    int countVowelStrings(int n) {
        vector<int> dp = {0,1,1,1,1,1};
        for (int i = 1; i <= n; ++i)
            for (int k = 1; k <= 5; ++k)
                dp[k] += dp[k - 1];
        return dp[5];
    }
Python:

    def countVowelStrings(self, n):
        dp = [0] + [1] * 5
        for i in xrange(1, n + 1):
            for k in xrange(1, 6):
                dp[k] += dp[k - 1]
        return dp[5]
Python3

    def countVowelStrings(self, n: int) -> int:
        dp = [1] * 5
        for i in range(n):
            dp = accumulate(dp)
        return list(dp)[-1]

Solution 4: Combination number
Now we have n characters, we are going to insert 4 l inside.
We can add in the front, in the middle and in the end.
How many ways do we have?
For the 1st l, we have n+1 position to insert.
For the 2nd l, we have n+2 position to insert.
For the 3rd l, we have n+3 position to insert.
For the 4th l, we have n+4 position to insert.
Also 4 l are the same,
there are (n + 1) * (n + 2) * (n + 3) * (n + 4) / 4! ways.

The character before the 1st l, we set to a.
The character before the 2nd l, we set to e.
The character before the 3rd l, we set to i.
The character before the 4th l, we set to o.
The character before the 5th l, we set to u.

We get the one result for the oringinal problem.

Time O(1)
Space O(1)

Java:

    public int countVowelStrings(int n) {
        return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
    }
C++:

    int countVowelStrings(int n) {
        return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
    }
Python:

    def countVowelStrings(self, n):
        return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24
Python3
@imaginary_user

    def countVowelStrings(self, n: int) -> int:
        return comb(n + 4, 4)
```