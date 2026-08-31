# CPP || Recursion + Memoization || 5D Dp

**Author:** imsulekh
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/1971619/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/1971619/)

---

IDEA : For every character in word, we have two choices, either put the 1st finger on it or put the second finger, we will take both the cases into account and return the minimum.
```
class Solution {
public:
	//dp table where 1st value represent current index of the word, 2nd and 3rd value represents cell number for 1st finger and 4th and 5th  value represents cell number for 2nd finger
    int dp[305][5][6][5][6];
    vector<pair<int, int>> grid;
    int f(string& word, int i, int n, int x1, int y1, int x2, int y2){
        if(i >= n) return 0;
		//taking MOD otherwise our dp table will excceed the memory limit as it will be something like dp[305][26][26][26][26], if we take each cell into consideration.
        if(dp[i][x1 % 5][y1 % 6][x2 % 5][y2 % 6] != -1) return dp[i][x1 % 5][y1 % 6][x2 % 5][y2 % 6];
        int op1 = 1e9, op2 = 1e9;
        int x = grid[word[i] - 'A'].first, y = grid[word[i] - 'A'].second;
		//op1 represents value if 1st finger is placed at current index
        op1 = abs(x - x1) + abs(y - y1) + f(word, i+1, n, x, y, x2, y2);
		//op2 represents value if 2nd finger is placed at current index
        op2 = abs(x - x2) + abs(y - y2) + f(word, i+1, n, x1, y1, x, y);
        return  dp[i][x1 % 5][y1 % 6][x2 % 5][y2 % 6] = min(op1, op2);
    }
    int minimumDistance(string word) {
        int n = word.size();
        int ans = INT_MAX;
        memset(dp, -1, sizeof(dp));
		//build our grid..grid[0] = {0, 0}...grid[1] = {0, 1}...and so on, where gid[0] represents cell value for 'A', grid[1] represents cell value of 'B' and so on...
        for(int i=0; i<5; ++i)
            if(i != 4) for(int j=0; j<6; ++j) grid.push_back({i, j});
            else for(int j=0; j<2; ++j) grid.push_back({i, j});
		//We will take every possibility of starting point i.e, 1st finger on A -> {2nd on A, 2nd finger on B......2nd finger on Z}, 1st finger on B -> {2nd finger on A, 2nd finger on B.....2nd finger on Z} and so on...
        for(int i=0; i<26; ++i){
            for(int j=0; j<26; ++j){
				// (x1, y1) represents cell number for 1st finger and (x2, y2) represents cell number for 2nd finger
                int x1 = grid[i].first, x2 = grid[j].first;
                int y1 = grid[i].second, y2 = grid[j].second;
                ans = min(ans, f(word, 0, n, x1, y1, x2, y2));
                
            }
        }
        return ans;
    }
};