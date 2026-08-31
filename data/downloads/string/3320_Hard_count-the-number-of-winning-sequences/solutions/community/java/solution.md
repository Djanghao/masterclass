# Easiest Fastest Solution || Most Optimized solution

**Author:** jiya31
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5906619/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5906619/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The problem can be approached using dynamic programming (DP) with memoization. The idea is to explore all possible sequences that can be constructed using the characters "F", "W", and "E", while tracking the points and determining if the sequence wins.

**Key Points:**
1. **Fight function:** The fight(a, b) function simulates a battle between two characters a and b. Based on predefined rules, it returns +1 if a wins, -1 if a loses, and 0 if there is a draw.
2. **Dynamic Programming (dp):**
    1. dp(i, prev, point) is a recursive function that computes the number of valid sequences starting from index i of string s, where prev is the last character in the sequence, and point is the score accumulated so far.
    2. We iterate over possible choices for the current character, and ensure that it\u2019s not the same as the previous one to avoid invalid sequences.
    3. The base case occurs when we have processed all characters of s, at which point we return 1 if the score point is greater than 0, and 0 otherwise.

# Complexity
- Time complexity: O(n * 3 * p),
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n * 3 * p),
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def countWinningSequences(self, s: str) -> int:
        def fight(a, b):
            if a == "F":
                if b == "E":
                    return 1
                elif b == "W":
                    return -1
            elif a == "W":
                if b == "F":
                    return 1
                elif b == "E":
                    return -1
            else:
                if b == "W":
                    return 1
                elif b == "F":
                    return -1
            return 0

        @cache
        def dp(i, prev, point):
            if i == len(s):
                return int(point > 0)
            res = 0
            for c in "FWE":
                if c == prev:
                    continue
                res += dp(i + 1, c, point + fight(c, s[i]))
                res %= 1_000_000_007
            return res
        
        return dp(0, '', 0)
```


```C++ []
class Solution {
public:
    int mod = 1e9 + 7;
    int dp[101][4][202];  // dp[i][prev][point] - using 202 for points to cover range

    int fight(char a, char b) {
        if (a == 'F' && b == 'E') return 1;
        if (a == 'F' && b == 'W') return -1;
        if (a == 'W' && b == 'F') return 1;
        if (a == 'W' && b == 'E') return -1;
        if (a == 'E' && b == 'W') return 1;
        if (a == 'E' && b == 'F') return -1;
        return 0;
    }

    int solve(string &s, int i, int prev, int point) {
        if (i == s.size()) return point > 0 ? 1 : 0;
        if (dp[i][prev][point + 100] != -1) return dp[i][prev][point + 100];
        
        int res = 0;
        for (int j = 0; j < 3; ++j) {
            if (j == prev) continue;
            char c = "FWE"[j];
            res += solve(s, i + 1, j, point + fight(c, s[i]));
            res %= mod;
        }
        
        return dp[i][prev][point + 100] = res;
    }

    int countWinningSequences(string s) {
        memset(dp, -1, sizeof(dp));
        return solve(s, 0, 3, 0);  // 3 means no previous character
    }
};
```


```Java []
public class Solution {
    int mod = 1000000007;
    int[][][] dp;
    
    public int fight(char a, char b) {
        if (a == 'F' && b == 'E') return 1;
        if (a == 'F' && b == 'W') return -1;
        if (a == 'W' && b == 'F') return 1;
        if (a == 'W' && b == 'E') return -1;
        if (a == 'E' && b == 'W') return 1;
        if (a == 'E' && b == 'F') return -1;
        return 0;
    }

    public int solve(String s, int i, int prev, int point) {
        if (i == s.length()) return point > 0 ? 1 : 0;
        if (dp[i][prev][point + 100] != -1) return dp[i][prev][point + 100];

        int res = 0;
        for (int j = 0; j < 3; j++) {
            if (j == prev) continue;
            char c = "FWE".charAt(j);
            res += solve(s, i + 1, j, point + fight(c, s.charAt(i)));
            res %= mod;
        }
        return dp[i][prev][point + 100] = res;
    }

    public int countWinningSequences(String s) {
        dp = new int[s.length()][4][202];  // dp[i][prev][point] 
        for (int[][] row : dp) {
            for (int[] col : row) {
                Arrays.fill(col, -1);
            }
        }
        return solve(s, 0, 3, 0);  // 3 means no previous character
    }
}
```

```Javascript []
var Solution = function() {
    this.mod = 1000000007;
    this.dp = [];
};

Solution.prototype.fight = function(a, b) {
    if (a === 'F' && b === 'E') return 1;
    if (a === 'F' && b === 'W') return -1;
    if (a === 'W' && b === 'F') return 1;
    if (a === 'W' && b === 'E') return -1;
    if (a === 'E' && b === 'W') return 1;
    if (a === 'E' && b === 'F') return -1;
    return 0;
};

Solution.prototype.solve = function(s, i, prev, point) {
    if (i === s.length) return point > 0 ? 1 : 0;
    if (this.dp[i][prev][point + 100] !== undefined) return this.dp[i][prev][point + 100];

    let res = 0;
    for (let j = 0; j < 3; j++) {
        if (j === prev) continue;
        let c = "FWE"[j];
        res += this.solve(s, i + 1, j, point + this.fight(c, s[i]));
        res %= this.mod;
    }
    return this.dp[i][prev][point + 100] = res;
};

Solution.prototype.countWinningSequences = function(s) {
    this.dp = Array(s.length).fill().map(() => Array(4).fill().map(() => Array(202)));
    return this.solve(s, 0, 3, 0);  // 3 means no previous character
};
```



