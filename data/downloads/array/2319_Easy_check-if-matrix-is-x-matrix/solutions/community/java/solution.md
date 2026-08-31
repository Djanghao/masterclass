# Python  ||  Java  ||  C++

**Author:** khud_gye_guru
**Votes:** 18
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2198123/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2198123/)

---

**Python**
```
class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        n = len(grid)
        for i in range(n):
            for j in range(n):
                if i==j or (i+j) ==n-1:
                    if grid[i][j] == 0:
                        return False
                elif grid[i][j] != 0: 
                    return False
        return True;
```

**Java**
```
class Solution {
    public boolean checkXMatrix(int[][] grid) {
        int n = grid.length;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++ ){
                if ( i == j  || i + j == n - 1 ) {
                    if ( grid[i][j] == 0 ) return false;                    
                }
				else if ( grid[i][j] != 0 ) return false;                                    
            }
        }       
       return true;
    }
}
```

**C++**
```
class Solution {
public:
    bool checkXMatrix(vector<vector<int>>& v1) {
        int n = v1.size();
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(i==j || (i+j) == n-1){
                    if(v1[i][j]==0)     return false;
                }
				else if(v1[i][j]!=0)     return false;
            }
        }
        return true;
    }
};
```