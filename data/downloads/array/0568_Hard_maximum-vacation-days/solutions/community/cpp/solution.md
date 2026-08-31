# [C++] bottom up DP, clean code with comments

**Author:** amaoagou
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/473614/](https://leetcode.com/problems/maximum-vacation-days/solutions/473614/)

---

	int maxVacationDays(vector<vector<int>>& flights, vector<vector<int>>& days) {
        /* key = {@ city i on week j, i = 0 .. (N-1), j = 0 .. (K-1); 
           memo[i][j] = maximum vacation days can get from week j to (K-1) if currently @ city i;
           memo[i][j] = max{days[i][j]+memo[i][j+1], days[i2][j] + memo[i2][j+1], for all cities i2 where flights[i][i2] = 1};
           memo[i][K] = {0};
        */
        int N = days.size(), K = days[0].size();
        
        /* initialize dp */
        int memo[101][101]; for (int i = 0; i < N; ++i){memo[i][K] = 0;};
        
        //////////////////////////////////////////////////////////////
        /* create a connection matrix to speed up calculation       */
        //////////////////////////////////////////////////////////////
        int conn[101][101];
        for (int i = 0; i < N; ++i){
            int m = 0;
            for (int j = 0; j < N; ++j){
                if (flights[i][j]){
                    conn[i][++m] = j;
                }
            }
            conn[i][0] = m;
        }
		
		/* iteratively update dp, from week (K-1) to 0 for each city */
		for (int j = K-1; j >= 0; --j){
            for (int i = 0; i < N; ++i){
                memo[i][j] = days[i][j] + memo[i][j+1];
                for (int l = 1, m = conn[i][0]; l <= m; ++l){
                    int i2 = conn[i][l];
                    memo[i][j] = max(memo[i][j], days[i2][j] + memo[i2][j+1]);
                }
            }
        }
        //////////////////////////////////////////////////////////////
        
        return memo[0][0];
    }