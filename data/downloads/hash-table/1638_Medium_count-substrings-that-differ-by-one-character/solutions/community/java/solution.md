# [Java] clean O(MN)-time O(1)-space Dynamic Programming Solution || with comments

**Author:** xieyun95
**Votes:** 74
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1182847/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1182847/)

---

This article aims to: 
1. give a clear definition of entries of 2-Dimension DP-table
2. give a clear relationship between big problem and sub-problems
3. optimize the "naive" DP-Solution into a O(1)-space Solution

For some people (myself included), directly coming up with an O(1)-Space Solution is neither easy nor straightforward. So I believe it nice to start with the relatively simple solution first. Then optimize the solution by observing its structure. I believe this is a more of less natural process for the interviewer. 

Of course for those who just want the "best" solution, feel free to just go to the very bottom of the article and check the **solution (version 4)**; 

First of all, let's start with the "2-Dimensional" DP-table. Here it seems that it's 3-Dimensinoal. However, the third dimension consist just two states. What really matter the most are the index pair (i, j); 

For each (i, j), we count the pairs of substrings (sub_s, sub_t) such that
1. the last digit of sub_s is s[i]
2. the last digit of sub_t is t[j]
        
Then define the entries in dp-table as:
* dp\\[i\\]\\[j\\]\\[0\\] : number of such pairs of (sub_s, sub_t) that differs by 0 char
* dp\\[i\\]\\[j\\]\\[1\\] : number of such pairs of (sub_s, sub_t) that differs by 1 char 
        
Then relation of bigger problem and sub-problem is very straightforward: 
```
if (s[i] == t[j])
	dp[i][j][0] = dp[i-1][j-1][0] + 1   // plus the substring (s[i], t[j])
	dp[i][j][1] = dp[i-1][j-1][1]
else 
	dp[i][j][0] = 0
	dp[i][j][1] = dp[i-1][j-1][0] + 1   // plus the substring (s[i], t[j])
```

The most basic DP-Solution is as follows: 

```
// version 1 : O(mn) space
class Solution {
    public int countSubstrings(String s, String t) {
        int m = s.length(), n = t.length();

        int[][][] dp = new int[m][n][2];
        
        int res = 0;
        // first col s[0:i] match t[0:0]
        for (int i = 0; i < m; i++) {
            dp[i][0][0] = (s.charAt(i) == t.charAt(0)) ? 1 : 0;
            dp[i][0][1] = (s.charAt(i) == t.charAt(0)) ? 0 : 1;
            res += dp[i][0][1];
        }
      
        
        // first row s[0:0] match t[0:j]
        for (int j = 1; j < n; j++) {
            dp[0][j][0] = (s.charAt(0) == t.charAt(j)) ? 1 : 0;
            dp[0][j][1] = (s.charAt(0) == t.charAt(j)) ? 0 : 1;
            res += dp[0][j][1];
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j][0] = (s.charAt(i) == t.charAt(j)) ? dp[i-1][j-1][0] + 1 : 0;
                dp[i][j][1] = (s.charAt(i) == t.charAt(j)) ? dp[i-1][j-1][1] : dp[i-1][j-1][0] + 1;
                res += dp[i][j][1];
            }
        }

        return res;
    }
}
```

Or we can rewrite the solution in this compact way: 

```
// version 2 : O(MN) space
class Solution {
    public int countSubstrings(String s, String t) {
        int m = s.length(), n = t.length(), res = 0;
        int[][][] dp = new int[m+1][n+1][2];
        
        // dp[i][j] : count for s[0:i) & t[0:j)
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dp[i+1][j+1][0] = (s.charAt(i) == t.charAt(j)) ? dp[i][j][0] + 1 : 0;
                dp[i+1][j+1][1] = (s.charAt(i) == t.charAt(j)) ? dp[i][j][1] : dp[i][j][0] + 1;
                res += dp[i+1][j+1][1];
            }
        }
        
        return res;
    }
}
```

Noticing that we only need the left-top entry to calculate current entry. Namely, to calculate dp\\[i+1\\]\\[j+1\\], we only need the values of dp\\[i\\]\\[j\\]. Optimizing the solution into O(min(M,N))-Space is straightforward: 
```
// version 3: O(min(M, N)) space
class Solution {
    public int countSubstrings(String s, String t) {
        int m = s.length(), n = t.length();
        if (m < n) return countSubstrings(t, s);
        
        int res = 0;
        int[][] dp = new int[n+1][2];
        
        for (int i = 0; i < m; i++) {
            int[][] next = new int[n+1][2];
            for (int j = 0; j < n; j++) {
                next[j+1][0] = (s.charAt(i) == t.charAt(j)) ? dp[j][0] + 1 : 0;
                next[j+1][1] = (s.charAt(i) == t.charAt(j)) ? dp[j][1] : dp[j][0] + 1;
                res += next[j+1][1];
            }
            
            dp = next;
        }
        
        return res;
    }
}
```

Further more, we may reduce the Space Complexity to O(1).  To traverse the whole table, we only need to start traversing from the top and left boundary. Then for each starting point, we just traverse its right-bottom entry until we hit right/bottom boundary. 

This Solution (version 4) is formulated from version 2: 

```
// version 4:  O(1)- space
class Solution {
    private String s;
    private String t;
    private int res = 0;
    public int countSubstrings(String s, String t) {
        this.s = s;
        this.t = t;
        
        // starting from left boundary dp[0][0], dp[1][0], ..., dp[m-1][0]
        for (int i = 0; i < s.length(); i++) {
            traverseRightBottom(i, 0);
        }
        
        // starting from top boundary dp[0][1], dp[0][2], ..., dp[0][n-1]
        for (int j = 1; j < t.length(); j++) {
            traverseRightBottom(0, j);
        }
        
        return res;
    }
    
    private void traverseRightBottom(int i, int j) {
        int prev0 = 0;      // dp[i][j][0]
        int prev1 = 0;      // dp[i][j][1]
        
        while (i < s.length() && j < t.length()) {
            boolean match = (s.charAt(i++) == t.charAt(j++));
            int curr0 = match ? prev0 + 1 : 0;            // dp[i+1][j+1][0]
            int curr1 = match ? prev1     : prev0 + 1;    // dp[i+1][j+1][1]
            
            res += curr1; 
            
            prev0 = curr0;
            prev1 = curr1;
        }
    }
}
```