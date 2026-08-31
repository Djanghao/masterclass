# All scenarios Video Explanation(DP + Memo)🔥 || (C++,JAVA,Python)🔥

**Author:** ayushnemmaniwar12
**Votes:** 44
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144702/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144702/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I recommend breaking down the problem into smaller parts and, with small examples, visually simulate the different scenarios. Consider various ways to solve the problem, and eventually, you'll find a solution that works.

# **Detailed and easy Video Solution**

https://youtu.be/IfjOGNo54zE


# Approach
<!-- Describe your approach to solving the problem. -->
The code aims to find the minimum number of operations required to make two strings, `s1` and `s2`, identical within a given limit `x`. It starts by identifying the differing positions between the two strings and stores these positions in a vector `v`. It then employs dynamic programming with memoization to recursively calculate the minimum operations needed to make substrings of `s1` and `s2` identical.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    The time complexity of the code is O(m^2) (Not 100% sure)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    The space complexity of the code is also O(m^2)

```C++ []
class Solution {
public:
    int dp[501][501];
    int solve(int i,int j,int n,vector<int>&v,int x)
    {   
        if(i>=n)
            return 0;
        if(j<0)
            return 0;
        if(i>j)
            return 0;
        if(dp[i][j]!=-1)
            return dp[i][j];
        int a=v[i+1]-v[i]+solve(i+2,j,n,v,x);
        int b=v[j]-v[j-1]+solve(i,j-2,n,v,x);
        int c=x+solve(i+1,j-1,n,v,x);
        return dp[i][j]=min(a,min(b,c));
    }
    int minOperations(string s1, string s2, int x) {
        int n=s1.size();
        vector<int>v;
        for(int i=0;i<n;i++)
        {
            if(s1[i]!=s2[i])
                v.push_back(i);
        }
        memset(dp,-1,sizeof(dp));
        int m=v.size();
        if(m%2!=0)
            return -1;
        int ans=solve(0,m-1,m,v,x);
        return ans;
    }
};
```
```JAVA []
import java.util.Arrays;

public class Solution {
    private int[][] dp = new int[501][501];

    public int minOperations(String s1, String s2, int x) {
        int n = s1.length();
        int[] v = new int[n];

        for (int i = 0; i < n; i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                v[i] = i;
            }
        }

        for (int i = 0; i < dp.length; i++) {
            Arrays.fill(dp[i], -1);
        }

        int m = v.length;

        if (m % 2 != 0) {
            return -1;
        }

        int ans = solve(0, m - 1, m, v, x);
        return ans;
    }

    private int solve(int i, int j, int n, int[] v, int x) {
        if (i >= n || j < 0 || i > j) {
            return 0;
        }

        if (dp[i][j] != -1) {
            return dp[i][j];
        }

        int a = v[i + 1] - v[i] + solve(i + 2, j, n, v, x);
        int b = v[j] - v[j - 1] + solve(i, j - 2, n, v, x);
        int c = x + solve(i + 1, j - 1, n, v, x);

        dp[i][j] = Math.min(a, Math.min(b, c));
        return dp[i][j];
    }
}
```
```PYTHON []
class Solution:
    def __init__(self):
        self.dp = [[-1] * 501 for _ in range(501)]

    def minOperations(self, s1: str, s2: str, x: int) -> int:
        n = len(s1)
        v = []

        for i in range(n):
            if s1[i] != s2[i]:
                v.append(i)

        for i in range(len(self.dp)):
            for j in range(len(self.dp[0])):
                self.dp[i][j] = -1

        m = len(v)

        if m % 2 != 0:
            return -1

        ans = self.solve(0, m - 1, m, v, x)
        return ans

    def solve(self, i, j, n, v, x):
        if i >= n or j < 0 or i > j:
            return 0

        if self.dp[i][j] != -1:
            return self.dp[i][j]

        a = v[i + 1] - v[i] + self.solve(i + 2, j, n, v, x)
        b = v[j] - v[j - 1] + self.solve(i, j - 2, n, v, x)
        c = x + self.solve(i + 1, j - 1, n, v, x)

        self.dp[i][j] = min(a, min(b, c))
        return self.dp[i][j]
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00