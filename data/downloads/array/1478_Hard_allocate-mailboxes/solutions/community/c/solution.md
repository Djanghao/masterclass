# [C++] 2D DP Bottom-Up | Easy-to-Understand

**Author:** vector_long_long
**Votes:** 5
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/937354/](https://leetcode.com/problems/allocate-mailboxes/solutions/937354/)

---

```
class Solution {
public:
    int minDistance(vector<int>& houses, int k) {
        int n = houses.size();
        sort(houses.begin(),houses.end());
        vector<vector<int>> dp(n,vector<int>(k+1,INT_MAX));
        for(int i=0;i<n;++i) dp[i][1] = findDist(houses,-1,i);
        for(int j=2;j<=k;++j)
            for(int i=0;i<n;++i)
                for(int h=0;h<i;++h)
                    dp[i][j] = min((double)(dp[i][j]),dp[h][j-1]+findDist(houses,h,i));
        return dp[n-1][k];
    }
    
    double findDist(vector<int>& houses, int h, int i){
        double mid, dist = 0;
        if((i-h) % 2 == 1) 
            mid = houses[(i+h+1)/2];
        else
            mid = (houses[(i+h)/2] + houses[(i+h)/2+1])/(double)2;
        
        for(int cur=h+1;cur<=i;++cur)
            dist += abs(mid-houses[cur]);
        return dist;
    }
};
```