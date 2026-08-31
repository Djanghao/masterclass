# Beautiful 10 Line C++ Solution

**Author:** siddhantchimankar
**Votes:** 41
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/1092834/](https://leetcode.com/problems/diagonal-traverse/solutions/1092834/)

---

```
vector<int> findDiagonalOrder(vector<vector<int>>& matrix) {
        
        vector<int> res;
        map<int, vector<int>> mp;
        
        for(int i = 0 ; i < matrix.size() ; i++) 
            for(int j = 0 ; j < matrix[0].size() ; j++)
                mp[i + j].push_back(matrix[i][j]);
        
        for(auto i : mp) {
            if((i.first)%2 == 0) 
                reverse(i.second.begin(), i.second.end()); 
            
            for(auto k : i.second) res.push_back(k);
        }
        return res;
    }
```