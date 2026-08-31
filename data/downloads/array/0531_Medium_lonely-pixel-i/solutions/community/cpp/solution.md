# [C++] Very Simple Solution

**Author:** Samuel3Shin
**Votes:** 1
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/4205971/](https://leetcode.com/problems/lonely-pixel-i/solutions/4205971/)

---

# Code
```
class Solution {
public:
    int findLonelyPixel(vector<vector<char>>& A) {
        int m = A.size();
        int n = A[0].size();

        vector<bool> rows(n);
        vector<bool> cols(n);

        int target = 1;

        for(int i=0; i<m; i++) {
            int cnt = 0;
            for(int j=0; j<n; j++) {
                if(A[i][j] == 'B') cnt++;
            }
            if(cnt==target) rows[i]=true;
        }
        for(int j=0; j<n; j++) {
            int cnt = 0;
            for(int i=0; i<m; i++) {
                if(A[i][j] == 'B') cnt++;
            }
            if(cnt==target) cols[j]=true;
        }

        int ans = 0;
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                if(A[i][j] == 'B' && rows[i] && cols[j]) ans++;
            }
        }
        return ans;  
    }
};
```