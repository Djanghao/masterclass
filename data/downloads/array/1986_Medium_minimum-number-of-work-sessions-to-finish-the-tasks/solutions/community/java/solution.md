# C++ & Java Bitmask DP with Explanation time: O(n * 2^n) space: O(2^n)

**Author:** felixhuang07
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1431820/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1431820/)

---

dp[mask] = {a, b} where
a - minimum number of session
b - minimum time of last session
The idea is to go through all tasks who belong to mask and optimally choose the last task 't' that was added to last session.

Similar problem: CSES Problem Set - Elevator Rides https://cses.fi/problemset/task/1653
This is exactly the same problem if you change the capacity of elevator to 'sessionTime' and weights of people to 'task'.
```
// C++ Solution
class Solution {
public:
    int minSessions(vector<int>& tasks, int sessionTime) {
        const int N = tasks.size();
        const int INF = 1e9;
        vector<pair<int, int>> dp(1 << N, {INF, INF});
        dp[0] = {0, INF};
        for(int mask = 1; mask < (1 << N); ++mask) {
            pair<int, int> best = {INF, INF};
            for(int i = 0; i < N; ++i) {
                if(mask & (1 << i)) {
                    pair<int, int> cur = dp[mask ^ (1 << i)];
                    if(cur.second + tasks[i] > sessionTime) {
                        cur = {cur.first + 1, tasks[i]};
                    } else
                        cur.second += tasks[i];
                    best = min(best, cur);
                }
            }
            dp[mask] = best;
        }
        return dp[(1 << N) - 1].first;
    }
};
```
```
// Java Solution
class Solution {
    public int minSessions(int[] tasks, int sessionTime) {
        int n = tasks.length, MAX = Integer.MAX_VALUE;
        int[][] dp = new int[1<<n][2];
        dp[0][0] = 1;
        dp[0][1] = 0;
        
        for(int i = 1; i < (1 << n); i++) {
            dp[i][0] = MAX;
            dp[i][1] = 0;
            
            for(int t = 0; t < n; t++) {
                if(((1<<t) & i) == 0) continue;
                
                int[] prev = dp[(1<<t) ^ i];
                if(prev[1] + tasks[t] <= sessionTime) {
                    dp[i] = min(dp[i], new int[]{prev[0], prev[1] + tasks[t]});
                }else{
                    dp[i] = min(dp[i], new int[]{prev[0] + 1, tasks[t]});
                }
            }            
        }
        
        return dp[(1<<n) - 1][0];
    }
    
    private int[] min(int[] d1, int[] d2) {
        if(d1[0] > d2[0]) return d2;
        if(d1[0] < d2[0]) return d1;
        if(d1[1] > d2[1]) return d2;
        
        return d1;
    }
}
```