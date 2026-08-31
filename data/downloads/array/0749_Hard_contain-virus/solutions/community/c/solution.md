# c++ | Exactly what the hint said

**Author:** shourabhpayal
**Votes:** 4
**Link:** [https://leetcode.com/problems/contain-virus/solutions/1291751/](https://leetcode.com/problems/contain-virus/solutions/1291751/)

---

**Algorithm**
1. Iterate over all regions and get the coordinates of region with maximum area threatened
2. Mark the max threatened region obtained in step 1 as -1 signifying it is disinfected. Add perimeter to answer.
3. Expand the remaining regions
4. Repeat step 1 to 3 till max area threatened = 0

***Note:*** 
* For area threatened calculation we cannot repeat the 0 cells adjoining the region therefore we use visited set
* For perimeter calculation we don't have such restrictions
* For both of the above cases we cannot goto a cell marked -1 which signifies as disinfected

**Code**
```
class Solution {
public:
    int m, n;
    int ans = 0;
    
    // -1 means disinfected
    int color = 2;
    
    // for perimeter calculation we cannot go to cells marked -1 but we can goto all other cells
    int perimeter = 0;
    
    // we can go to cells marked as 0 only
    // this will store the area being threatened
    int areat = 0;
    
    int containVirus(vector<vector<int>>& a) {
        m = a.size();
        n = a[0].size();

        while(1){
            int restrictX, restrictY;
            int big = -1;
            for(int i = 0 ; i < m ; i++){
                for(int j = 0 ; j < n ; j++){
                    if(a[i][j] == color-1){
                        
                        //capture this region and color it with color
                        dfs(a, i, j);
                        areat = 0;
                        set<pair<int, int>> visited;
                        calculateAreat(a, i, j, visited);
                        //calculateAreat marks the region with -2 so we will restore
                        restore(a, i, j);
                        if(big < areat){
                            big = areat;
                            restrictX = i;
                            restrictY = j;
                        }
                    }
                }
            }
            
            if(big != -1){
                perimeter = 0;
                calculatePerimeter(a, restrictX, restrictY);
                ans += perimeter;
                int temp = color;
                color = -1;
                // disinfect this region by marking as -1
                restore(a, restrictX, restrictY);
                
                color = temp+1;
                for(int i = 0 ; i < m ; i++){
                    for(int j = 0 ; j < n ; j++){
                        if(a[i][j] == color-1){
                            expand(a, i, j, a[i][j]);
                            // expand marks the region as -2 so we restore it to color
                            restore(a, i, j);
                        }
                    }
                }
                color++;
            }
            else{
                break;
            }
        }
        
        return ans;
    }
    
    void expand(vector<vector<int>>& a, int x, int y, int currcolor){
        if(x < 0 || y < 0 || x >= m || y >= n){
            return;
        }
        
        if(a[x][y] == 0){
            a[x][y] = -2;
            return;
        }
        
        if(a[x][y] == -2 || a[x][y] == -1 || a[x][y] != currcolor){
            return;
        }
        
        a[x][y] = -2;
        expand(a, x+1, y, currcolor);
        expand(a, x, y+1, currcolor);
        expand(a, x, y-1, currcolor);
        expand(a, x-1, y, currcolor);
    }
    
    void dfs(vector<vector<int>>& a, int x, int y){
        if(x < 0 || y < 0 || x >= m || y >= n || a[x][y] == 0 || a[x][y] == -1){
            return;
        }
        
        if(a[x][y] == color){
            return;
        }
        
        a[x][y] = color;
        dfs(a, x+1, y);
        dfs(a, x, y+1);
        dfs(a, x, y-1);
        dfs(a, x-1, y);
    }
    
    void restore(vector<vector<int>>& a, int x, int y){
        if(x < 0 || y < 0 || x >= m || y >= n || a[x][y] == 0 || a[x][y] != -2){
            return;
        }
        
        a[x][y] = color;
        restore(a, x+1, y);
        restore(a, x, y+1);
        restore(a, x, y-1);
        restore(a, x-1, y);
    }
    
    // -2 is under processing
    void calculatePerimeter(vector<vector<int>>& a, int x, int y){
        if(x < 0 || y < 0 || x >= m || y >= n || a[x][y] == -1 || a[x][y] == -2){
            return;
        }
        
        if(a[x][y] == 0){
            perimeter++;
            return;
        }
        
        a[x][y] = -2;
        calculatePerimeter(a, x+1, y);
        calculatePerimeter(a, x, y+1);
        calculatePerimeter(a, x, y-1);
        calculatePerimeter(a, x-1, y);
    }
    
    // -2 is under processing
    void calculateAreat(vector<vector<int>>& a, int x, int y, set<pair<int, int>> &visited){
        if(x < 0 || y < 0 || x >= m || y >= n || a[x][y] == -2 
           || a[x][y] == -1 || visited.count({x,y})){
            return;
        }
        
        if(a[x][y] == 0){
            visited.insert({x,y});
            areat++;
            return;
        }
        
        a[x][y] = -2;
        calculateAreat(a, x+1, y, visited);
        calculateAreat(a, x, y+1, visited);
        calculateAreat(a, x, y-1, visited);
        calculateAreat(a, x-1, y, visited);
    }
    
    void print(vector<vector<int>> &a){
        for(int i = 0 ; i < m ; i++){
            for(int j = 0 ; j < n ; j++){
                cout<<a[i][j]<<"\	";
            }
            cout<<endl;
        }
        cout<<endl;
    }
};
```