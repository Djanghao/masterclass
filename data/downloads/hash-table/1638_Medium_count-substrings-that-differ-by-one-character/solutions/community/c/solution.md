# C++ 100% fast O(m*n)

**Author:** aakashiitd18
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/2271477/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/2271477/)

---

same[i][j] represent the length of maximum substring ending at i in string t and j in string s.
diff[i][j] represent the length of maximum substring ending at i in string t and j in string s with only 1 element different.
The memory can be reduced by just using only 2 rows as we require only (i-1)th row for calculating ith row.

		'''      
		int n = s.length(), m = t.length();
        vector<vector<int>> same(n+1,vector<int> (m+1,0));
        vector<vector<int>> diff(n+1,vector<int> (m+1,0));
        int ans = 0;
        for(int i =1;i<=n;i++)
        {
            for(int j = 1;j<=m;j++)
            {
                if(s[i-1]==t[j-1])
                {
                    same[i][j] = 1+same[i-1][j-1];
                    diff[i][j] = diff[i-1][j-1];
                }
                else
                {
                    same[i][j] = 0;
                    diff[i][j] = 1+same[i-1][j-1];
                }
                ans+=diff[i][j];
            } 
        }
        return ans;
		'''