# [C++] Simple C++ Code

**Author:** _pros_
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/2332778/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/2332778/)

---

# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
    int dfs(string &floor, int Carpets, int Len, int idx, vector<vector<int>> &dp)
    {
        if(idx >= floor.size())
            return 0;
        int val = 0;
        if(dp[idx][Carpets] != -1) return dp[idx][Carpets];
        if(Carpets == 0)
        {
            for(int i = idx; i < floor.size(); i++)
                if(floor[i] == '1') val++;
        }
        else
        {
            if(floor[idx] == '0')
                val = dfs(floor, Carpets, Len, idx+1, dp);
            else
            {
                val = min(1+dfs(floor, Carpets, Len, idx+1, dp), dfs(floor, Carpets-1, Len, idx+Len, dp));
            }
        }
        return dp[idx][Carpets] = val;
    }
public:
    int minimumWhiteTiles(string floor, int numCarpets, int carpetLen) {
        int n = floor.size();
        vector<vector<int>> dp(n+1, vector<int> (numCarpets+1, -1));
        return dfs(floor, numCarpets, carpetLen, 0, dp);
    }
};
```