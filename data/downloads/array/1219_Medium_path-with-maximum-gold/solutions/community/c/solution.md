# DFS+ backtracking+ degree considering||22ms Beats 100%

**Author:** anwendeng
**Votes:** 18
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154500/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use DFS to transverse with backtracking.
C, C++, Python are implemented. C code beats 100%

2nd approach is so optimized, that DFS begins with only cells with degree <=2 which is a fast code running in 22ms & beats 99.87%.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define the recursive function `f` to transverse in 4 directions.
2. Each cell is visited marked as 0, then after tracing backtrack with the orignal value.
3. The max gold is the max sum of `grid[i][j]` for all possible paths
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(row\	imes col \	imes 4^{G})\	o O(row\	imes col+G \	imes 4^{G})$$ where $G=\\#\\{grid[i][j]\
ot= 0\\}$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(4^{G})$

# Code using DFS+ backtracking||C solution 66ms beats 100%
```C []
#pragma GCC optimize("O3", "unroll-loops")
int row, col;
void f(int i, int j, int sum, int** grid,  int* gold) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] == 0)
        return;
    int tmp = grid[i][j];
    sum += tmp;
    *gold = (*gold < sum) ? sum : *gold;
    grid[i][j] = 0;
    f(i + 1, j, sum, grid, gold);
    f(i - 1, j, sum, grid, gold);
    f(i, j + 1, sum, grid, gold);
    f(i, j - 1, sum, grid, gold);
    grid[i][j] = tmp; // backtracking
}
int getMaximumGold(int** grid, int gridSize, int* gridColSize) {
    row = gridSize, col = *gridColSize;
    int actualGold = 0; 
    int* gold=&actualGold; //point to it
    for (register int i = 0; i < row; i++)
        for (register int j = 0; j < col; j++) {
            if (grid[i][j] != 0)
                f(i, j, 0, grid, gold);
        }
    return *gold;
}
```
```Python []
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        row, col=len(grid), len(grid[0]) 
        def f(i, j, sum):
            if i<0 or i>=row or j<0 or j>=col or grid[i][j]==0:
                return sum
            tmp=grid[i][j]
            sum+=tmp
            grid[i][j]=0
            ans=max(f(i+1, j, sum), f(i-1, j, sum), f(i, j+1, sum), f(i, j-1, sum))
            grid[i][j]=tmp #backtracking
            return ans
        gold=0
        for i in range(row):
            for j in range(col):
                if grid[i][j]!=0:
                    gold=max(gold, f(i, j, 0))
        return gold
```
```C++ []
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
    int row, col;
    int gold=0;
    void f(int i, int j, int sum,  vector<vector<int>>& grid){
        if (i<0 ||i>=row|| j<0 || j>=col||grid[i][j]==0) return;
        int tmp=grid[i][j];
        sum+=tmp;
        gold=max(gold, sum);
        grid[i][j]=0;
        f(i+1, j, sum, grid);
        f(i-1, j, sum, grid);
        f(i, j+1, sum, grid);
        f(i, j-1, sum, grid);
 \xA0 \xA0 \xA0//sum-=tmp;
        grid[i][j]=tmp;//backtracking
    }
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        row=grid.size(), col=grid[0].size();
        for(int i=0; i<row; i++)
            for(int j=0; j<col; j++){
                if (grid[i][j]!=0)
                    f(i, j, 0, grid);
            }
        return gold;
    }
};



auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# C++ using degree considering||22ms & beats 99.87%
why degree<=2 not degree<=1? Because the graph can be a cycle with or without crossings. 
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
    int row, col;
    const int d[5]={0,1, 0, -1, 0};
    int gold=0;
    void f(int i, int j, int sum,  vector<vector<int>>& grid){
        int tmp=grid[i][j];
        sum+=tmp;
        gold=max(gold, sum);
        grid[i][j]=0;
        for (int a=0; a<4; a++){
            int r=i+d[a], c=j+d[a+1];
            if (r<0 ||r>=row|| c<0 || c>=col||grid[r][c]==0) continue;
            f(r, c, sum, grid);
        }
        grid[i][j]=tmp;//backtracking
    }
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        row=grid.size(), col=grid[0].size();
        vector<pair<int, int>> degLeq2;
        
        for(int i=0; i<row; i++)
            for(int j=0; j<col; j++){
                if (grid[i][j]!=0){
                    int deg=0;
                    for (int a=0; a<4; a++){
                        int r=i+d[a], c=j+d[a+1];
                        if (r<0 ||r>=row|| c<0 || c>=col||grid[r][c]==0) continue;
                        deg++;
                    }
                    if (deg<3) degLeq2.emplace_back(i, j);
                }
            }
        
        for(auto& [i, j]: degLeq2){
            if (grid[i][j]!=0)
                f(i, j, 0, grid);
        }
        return gold;
    }
};



auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
