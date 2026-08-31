# Simplest and easiest dp solution || recursion + memoization

**Author:** Kazuma0803
**Votes:** 113
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/2783118/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/2783118/)

---

```
class Solution {
private:
    long long maxi=1e16;
    long long f(int i,int j,vector<int>& robot,vector<int>& v,vector<vector<long long>>& dp) {
        if (i==robot.size()) return 0;
        if (j==v.size()) return maxi;
        if (dp[i][j]!=-1) return dp[i][j];
        long long take=abs(robot[i]-v[j])+f(i+1,j+1,robot,v,dp);
        long long not_take=f(i,j+1,robot,v,dp);
        return dp[i][j]=min(take,not_take);
    }
public:
    long long minimumTotalDistance(vector<int>& robot, vector<vector<int>>& factory) {
        sort(robot.begin(),robot.end());
        sort(factory.begin(),factory.end());
        vector<int> v;
        for (auto i:factory) {
            int x=i[0],y=i[1];
            for (int i=0;i<y;i++) {
                v.push_back(x);
            }
        }
        vector<vector<long long>> dp(robot.size()+1,vector<long long>(v.size()+1,-1));
        return f(0,0,robot,v,dp);
    }
};
```