# C++ || simplest solution || beats 95%

**Author:** Rohit_Sapkal
**Votes:** 2
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/1531910/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/1531910/)

---

class Solution {
public:
********
    int projectionArea(vector<vector<int>>& grid) {
        int r = grid.size();
        int c = grid[0].size();
        
        if(r==1 && c==1) return (grid[0][0]*2 + 1);
        
        int area = 0;
        
        // for toparea
        int count = 0;
        for(int i=0 ; i<r ; ++i)
        {
            for(int j=0 ; j<c ; ++j) 
            {
                if(grid[i][j]!=0) count++;
            }
        }
        area = count;
    
        
        //for frontarea
        for(int j=0 ; j<c ; ++j)
        {
            int temp =0;
            for(int i=0 ; i<r ; ++i)
            {
                temp = max(temp, grid[i][j]);
            }
            area += temp;
        }
    
        //for sidearea
        for(int i=0 ; i<r ; ++i)
        {
            int temp = 0;
            for(int j=0 ; j<c ; ++j)
            {
                temp = max(temp, grid[i][j]);
            }
            area += temp;   
        }
    
        return area;
    }
};

**leave a like.**