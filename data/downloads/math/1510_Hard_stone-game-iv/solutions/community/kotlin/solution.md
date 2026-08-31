# Stone Game IV | java | c++| kotlin| dp

**Author:** cygnus
**Votes:** 2
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/909484/](https://leetcode.com/problems/stone-game-iv/solutions/909484/)

---

Let's say we have a boolean array dp with size n+1. each number  dp[i] in the aray means if a player(either A or B) can win when there are i stones. 

So for dp[i],  we need to check the value of dp[i - j * j ] for every possible j.  If this number is false, this means the other play B will lose with i -j * j stones and player A will win for dp[i].  If none of them is false,  it means player B can always win and player A will lose.   dp[0] will be false (if there are 0 stones, player A will lose)

This is a standard dp solution with Time complexity of **O(N^1.5)** and space complexity of **O(N)** 

java
```
class Solution {
    public boolean winnerSquareGame(int n) {
        boolean [] dp = new boolean[n+1];
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j*j <= i; j++)
            {
                if (!dp[i-j*j])
                {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}
```

c++
```
class Solution {
public:
    bool winnerSquareGame(int n) {
        vector<bool> dp(n+1, false);
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j*j <= i; j++)
            {
                if (!dp[i-j*j])
                {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
};
```

kotlin
```
class Solution {
    fun winnerSquareGame(n: Int): Boolean {
        var dp = BooleanArray(n+1){false}
        for (i in 1..n) {
            var j = 1;
            while (j * j <= i) {
                if (!dp[i-j*j]) {
                    dp[i] = true
                    break
                }
                j++
            }
        }
        return dp[n]
    }
}
```