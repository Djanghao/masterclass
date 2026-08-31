# C++ || Simple

**Author:** mayanksamadhiya12345
**Votes:** 22
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899453/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899453/)

---

```
dry run

given:
[[1,2,4],
 [3,3,1]]
 
step 1 : (Sort each row)
[[4,2,1],
 [3,3,1]]
 
step 2 : (Change col to row)
[[4,3],
 [2,3],
 [1,1]]
 
step 3 : (took max from each new row and add to the answer)
ans = 4 + 3 + 1 = 8
```

# Code
```
class Solution {
public:
    int deleteGreatestValue(vector<vector<int>>& grid) 
    {
        int n = grid.size();                   // row
        int m = grid[0].size();                // col
        int answer = 0;
        
        for(int i=0;i<n;i++)
        {
            sort(grid[i].begin(),grid[i].end(),greater<>());                  // sort each row in dexreasing order as we need max value from whole row
            // cout<<grid[i][0]<<" ";
        }
        
        // it will store the column as row and we will took the greatest from that particular row
        for(int i=0;i<m;i++)
        {
            int mx = INT_MIN;
            for(int j=0;j<n;j++)
            {
                mx = max(mx,grid[j][i]);               // storing mx for curr column                               
            }
             
            answer += mx;                                // add up the max value of column to answer
        }
        return answer;
    }
};

```

