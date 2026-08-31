# 🔥Dart simple solution🚀

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2944805/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2944805/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Formula :
dp[n] = dp[n-1] + dp[n-2] + 2 * (dp[n-3] + ... + dp[0]) -- E1
dp[n-1] = dp[n-2] + dp[n-3] + 2 * (dp[n-4] + ... + dp[0]) -- E2
.
.
E1 - E2:
dp[n] - dp[n-1] = dp[n-1] + dp[n-3]
--> dp[n] = 2*dp[n-1] + dp[n-3]

# Code
```
class Solution {
  int numTilings(int n) {
      int mod = 1000000007;
        List<int> v=List.filled(1001,0) ;
        v[1] = 1 ;
        v[2] = 2 ;
        v[3] = 5 ;
        if(n<4) return v[n] ;
        for(int i=4; i<=n; i++){
            v[i] = v[i-1]*2 + v[i-3] ;
            v[i]%=mod;
        }
        return v[n] ;

  }
}
```


Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)

