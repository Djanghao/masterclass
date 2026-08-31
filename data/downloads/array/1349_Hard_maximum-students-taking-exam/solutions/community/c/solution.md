# C++ DP bitmasking (inspired by tmwilliamlin168)

**Author:** tom0727
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/503763/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/503763/)

---

Firstly I would like to thank **tmwilliamlin168** (ranked 3 in this contest). He is a brilliant competitive programmer, and I really appreciative his effort in making videos and explaining his solutions. But it might be hard to understand his solution (as well as this post) if you know nothing about bitmasking. Please read relevant tutorials or other posts if you want to learn about bitmasking, I will not explain it here.

Thanks **tmwilliamlin168** again and here is the video. I also post my own explanation here.
https://www.youtube.com/watch?v=AUl8EztUNrA

We can do the dp row by row, we start from row 1 until row n. 
`dp[i][mask]` represents that, we are now at row `i` and the state of this row is `mask`. 

Now, state conversion is: We consider every possible state of the last row, and check if the state conversion is legal (that is, there will be no cheating). Hence we have:

`dp[i][mask] = max(dp[i][mask], dp[i-1][premask] + __builtin_popcount(mask));`
where `mask` and `premask` are both legal, and these two rows together will have no cheating.

Note: `__builtin_popcount()` count the number of 1-bits in the mask.

Code: 
```
class Solution {
public:
    int n,m;
    int ans = 0;
    int dp[9][(1<<8)+2];  //dp[i][mask]: we are in row i(i is from [1,9]), state is mask
    int avail[9];  //avail[i] is the mask representing available seats in row i
        
    int maxStudents(vector<vector<char>>& seats) {
        n = seats.size(); m = seats[0].size();
        memset(dp, -1, sizeof(dp));
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < m; j++) {
                if (seats[i-1][j] == '.') {
                    avail[i] |= (1<<j);
                }
            }
        }
        
        for (int mask = 0; mask < (1<<m); mask++) {
            dp[0][mask] = 0;  //initialize all illegal states with 0
        }
        
        for (int i = 1; i <= n; i++) {  //now we are at row i
            for (int premask = 0; premask < (1<<m); premask++) {
                if (dp[i-1][premask] == -1) continue;
                for (int mask = 0; mask < (1<<m); mask++) {
                    if ((mask & avail[i]) != mask) continue;
                    if (mask&(mask>>1)) continue;  //if there is adjacent 1
                    
                    /*checking this row and last row*/
                    if (mask&(premask<<1) || mask&(premask>>1)) continue;
                    dp[i][mask] = max(dp[i][mask], dp[i-1][premask] + __builtin_popcount(mask));
                }
            }
        }
        
        for (int mask = 0; mask < (1<<m); mask++) {
            ans = max(ans, dp[n][mask]);
        }
        return ans;
    }
};
```
