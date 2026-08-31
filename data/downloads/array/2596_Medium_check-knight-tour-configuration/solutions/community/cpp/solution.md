# Bruteforce || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 23
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314113/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314113/)

---

# Approach
Define a possible direction array and keep on checking each possible cell to see if we can move or not.

# Code
```
class Solution {
public:
    bool checkValidGrid(vector<vector<int>>& grid) {
        int dir[8][2] = {{1, -2}, {2, -1}, {2, 1}, {1, 2}, {-1, 2}, {-2, 1}, {-2, -1}, {-1, -2}};
        int count = 0, maxCount = grid.size() * grid.size()-1;
        int x = 0, y = 0, i, j;
        if(grid[x][y] != count) return false;
        while(count < maxCount){
            count++;
            int flag = 1;
            for(auto d: dir){
                i = x + d[0]; j = y + d[1];
                if(i >= 0 && j >= 0  && i < grid.size() && j < grid.size() && grid[i][j] == count){ //cout<<i<< " "<<j <<" "<<count<<endl;
                    x = i; y = j; flag = 0; break;
                    
                }
            } 
            if(flag) return false;
        }
        return true;
    }
};
```