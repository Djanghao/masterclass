# Simple C++ Solution

**Author:** hardikn13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4953232/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4953232/)

---

```
class Solution {
public:
    void f(int &cnt, vector<vector<int>> &grid, int k)
    {
        int n = grid.size();
        int m = grid[0].size();
        
        int count0 = 0, count1 = 0, count2 = 0;
        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < m; j++)
            {
                if((i == j && i <= n / 2 && j <= m / 2) || (i == m - j - 1 && i < n / 2 && j >= m / 2) || (i > n / 2 && j == m / 2))
                {
                    if(grid[i][j] != k)
                    {
                        cnt++;
                    }
                }
                else
                {
                    if(grid[i][j] == 0)
                        count0++;
                    else if(grid[i][j] == 1)
                        count1++;
                    else
                        count2++;
                }
            }
        }
        
        if(k == 1)
            cnt += min(count0, count2) + count1;
        else if(k == 2)
            cnt += min(count0, count1) + count2;
        else
            cnt += min(count1, count2) + count0;
    }
    
    int minimumOperationsToWriteY(vector<vector<int>>& grid) {
        
        vector<vector<int>> temp = grid;
        int cnt0 = 0, cnt1 = 0, cnt2 = 0;
        f(cnt0, temp, 0);
        temp = grid;
        f(cnt1, temp, 1);
        temp = grid;
        f(cnt2, temp, 2);
        
        
        return min(cnt0, min(cnt1, cnt2));
    }
};
```