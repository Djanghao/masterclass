# Easier than top voted ones | LegitClickbait | c++

**Author:** shourabhpayal
**Votes:** 101
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432155/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432155/)

---

**Algorithm**
1. We use 2 things -> ```mask``` to denote which elements are processed. If ```ith``` bit is 1 means ```ith``` element is processed. -> ```currentTime``` we start with 0 as current time.
2. At each call go through all the unprocessed elements only.
3. We can choose to include the ith unprocessed element in current session like this -> ```help(a, mask | (1<<i), currTime + a[i])```
4.  Or choose to include it in next session like this -> ```1 + help(a, mask | (1<<i), a[i])```
5.  Take minimum of step 3 and 4 across all unprocessed elements like this -> ```ans = min({ans, includeInCurrentSession, includeInNextSession})``` .
2. If ```currentTime``` becomes more than targetTime it is invalid state.
3. If all elements are processed then its the end of our algorithm.

***Note***: 
When we do ```mask | (1<<i)``` we set the ith bit in mask to indicate element at ith position is processed.
When we do ```mask & (1<<i)``` we are checking if ith bit in mask is set or not.

**Code**
```
class Solution {
public:
    int n, time, allOnes;
    int ans;
    int dp[1<<15][16];
    int minSessions(vector<int>& a, int t) {
        time = t;
        n = a.size();
        allOnes = (1<<n)-1;
        memset(dp, -1, sizeof dp);
        ans = help(a, 0, 0);
        return ans;
    }
    
    int help(vector<int> &a, int mask, int currTime){
        if(currTime > time) return INT_MAX;
        if(mask == allOnes) return 1;
        if(dp[mask][currTime] != -1) return dp[mask][currTime];
        int ans = INT_MAX;
        for(int i = 0 ; i < n ; i++){
            if( (mask & (1<<i)) == 0){
                int includeInCurrentSession = help(a, mask | (1<<i), currTime + a[i]);
                int includeInNextSession = 1 + help(a, mask | (1<<i), a[i]);
                ans = min({ans, includeInCurrentSession, includeInNextSession});
            }
        }
        return dp[mask][currTime] = ans;
    }
};
```
**Time Complexity**: ```O(2^N * sessionTime * N)``` Here N is length of array ```a i.e tasks``` and sessionTime  is ```time```