# C++ || DFS with Memoization || Easy Explanation

**Author:** shaunblaze21
**Votes:** 47
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/805151/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/805151/)

---

The idea is very simple. We manually find the max element from index i to j ( in our code) and recur for the remaining elements and d-1 days. Just memoize the solution to greatly improve the time complexity. Rest of the explanation is in the code. Comment for any doubt! 
```
#define INF 10000000
class Solution {
public:
    int n;
    int dp[305][15];
    int dfs(int i,int d,vector <int> &jd)
    {
        if(i==n && d==0) //end of our search with all elements covered and 0 days remaining
            return 0;
        if(i==n || d==0 || n-i<d) //if elements are remaining or elements are used up but days are remaining
            return INF;
        if(dp[i][d]!=-1) //if already seen this state,return it
            return dp[i][d];
        int ans=INF;
        int maxele=-INF;
        for(int j=i;j<n;j++)
        {   
            maxele=max(maxele,jd[j]); //max element from i to j
            ans=min(ans,maxele+dfs(j+1,d-1,jd)); //minimum of all possible answers
        }
        dp[i][d]=ans;
        return ans;
    }
    int minDifficulty(vector<int>& jobDifficulty, int d) {
        n=jobDifficulty.size();
        if(n<d)       //not possible
            return -1;
        memset(dp,-1,sizeof(dp));
        int ans= dfs(0,d,jobDifficulty);
        return ans;
    }
};
```