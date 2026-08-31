# 2-D DP + BitMask + Unordered Map || C++ || Well Explained

**Author:** EGhost08
**Votes:** 2
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/4082316/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/4082316/)

---

### Intuition
The problem requires coloring a grid of `m` rows and `n` columns such that no adjacent cells have the same color. We can approach this problem using dynamic programming, where we keep track of the valid color masks for each cell in a row.

### Approach
1. We define a `generate_mask` function that generates valid color masks for a given cell based on the colors used in the previous cell and the cell above it. This function recursively explores the color possibilities for each cell in a row and appends valid masks to a list.

2. We use dynamic programming to calculate the number of valid colorings for each cell in each row. We maintain a 2D array `dp`, where `dp[idx][msk]` represents the number of valid colorings for the cell at row `idx` with the color mask `msk`.

3. We keep track of valid color masks using an unordered map `msk_map`. For each mask `msk`, we store a list of valid masks that can be used in the next row. We populate this map as we calculate the valid masks using the `generate_mask` function.

4. In the `func` function, we recursively calculate the number of valid colorings for each cell in each row, taking into account the valid color masks. We use modular arithmetic to handle large numbers and avoid overflow.

5. Finally, we call the `func` function to calculate the total number of valid colorings for the entire grid, starting from the first row. The result is the answer to the problem.

### Time and Space Complexity
- Time Complexity: The time complexity of this solution is $$O(n * (3^m))$$ where `n` is the number of rows and `m` is the number of columns. This is because for each cell in each row, we explore up to 3 possibilities (colors), and we do this for `n` rows.
- Space Complexity: The space complexity is $$O(n * (3^m))$$ as well, considering the `dp` array and the `msk_map` unordered map that stores the valid masks for each row.

# Code
```
typedef long long  ll;
class Solution {
    ll mod = 1e9+7;
    void generate_mask(int m,int msk,vector<int> &masks,int &pre_msk,int pre_col)
    {
        if(m==0)
        {
            masks.push_back(msk);
            return;
        }
        for(int i=1;i<=3;i++)
            if(pre_col!=i && ((pre_msk>>((m-1)*2))&3)!=i)
                generate_mask(m-1,msk|(i<<(m-1)*2),masks,pre_msk,i);
    }
    int func(int &m,int&n,int idx,int msk,vector<vector<int>> &dp,unordered_map<int,vector<int>> &msk_map)
    {
        if(idx==n)
            return 1;
        if(dp[idx][msk]!=-1)
            return dp[idx][msk];
        if(msk_map.find(msk)==msk_map.end())
             generate_mask(m,0,msk_map[msk],msk,0);
        ll ans = 0;
        for(auto cur_msk : msk_map[msk])
        {
            ans += func(m,n,idx+1,cur_msk,dp,msk_map)*1LL;
            ans %= mod;
        }
        return dp[idx][msk] = ans;
    }
public:
    int colorTheGrid(int m, int n) 
    {
        // red = 01  |  green = 10  | blue = 11
        vector<vector<int>> dp(n,vector<int>(1<<(2*m),-1));
        unordered_map<int,vector<int>> msk_map;
        return (int)func(m,n,0,0,dp,msk_map);
    }
};
```