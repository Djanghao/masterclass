# C# DFS + Memoization + Game Theory

**Author:** gary3219
**Votes:** 1
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/3268964/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/3268964/)

---

l've submitted the code and got TLE for over 20 times before realizing the game actually stops much earlier than 1001.

# Code
```
public class Solution {
    const int N = 8, M = 101;
    int[] dirx = {1, -1, 0, 0, 0}, diry = {0, 0, 1, -1, 0};
    int[] cat = new int[2], mouse = new int[2], food = new int[2];
    int[,,,,] f = new int[M, N, N, N, N];
    int cj = 0, mj = 0, n = 0, m = 0;
    public bool CanMouseWin(string[] grid, int catJump, int mouseJump) {
        this.m = grid[0].Length;
        this.n = grid.Length;
        this.mj = mouseJump;
        this.cj = catJump;
        for(int i = 0; i < M; i++){
            for(int j = 0; j < n; j++){
                for(int k = 0; k < m; k++){
                    if(grid[j][k] == 'M'){
                        mouse[0] = j;
                        mouse[1] = k;
                    }
                    else if(grid[j][k] == 'C'){
                        cat[0] = j;
                        cat[1] = k;
                    }
                    else if(grid[j][k] == 'F'){
                        food[0] = j;
                        food[1] = k;
                    }
                    for(int p = 0; p < n; p++){
                        for(int q = 0; q < m; q++)
                            f[i, j, k, p, q] = -1;
                    }
                }
            }
        }
        return Dfs(ref grid, cat, mouse, 0);
    }

    public bool Dfs(ref string[] grid, int[] cat, int[] mouse, int p){
        if(p + 1 > 100) return false;
        int mx = mouse[0], my = mouse[1], cx = cat[0], cy = cat[1];
        if(f[p, mx, my, cx, cy] != -1) 
            return f[p, mx, my, cx, cy] == 1;
        if(cx == food[0] && cy == food[1]){
            f[p, mx, my, cx, cy] = 0;
            return false;
        }
        if(mx == food[0] && my == food[1]){
            f[p, mx, my, cx, cy] = 1; 
            return true;
        }
        if(mx == cx && my == cy){
            f[p, mx, my, cx, cy] = 0;
            return false;
        }

        if((p & 1) == 0){
            for(int i = 0; i < 5; i++){
                for(int j = 1; j <= mj; j++){
                    int x = dirx[i] * j + mx, y = diry[i] * j + my;
                    if(x < 0 || y < 0 || x >= n || y >= m) break;
                    if(x == cx && y == cy) continue;
                    if(grid[x][y] == '#') break;
                    if(Dfs(ref grid, cat, new int[]{x, y}, p + 1)){
                        f[p, mx, my, cx, cy] = 1;
                        return true;
                    }
                    if(i == 4) break;
                }
            }
            f[p, mx, my, cx, cy] = 0;
            return false;
        }
        else{
            for(int i = 0; i < 5; i++){
                for(int j = 1; j <= cj; j++){
                    int x = dirx[i] * j + cx, y = diry[i] * j + cy;
                    if(x < 0 || y < 0 || x >= n || y >= m) break;
                    if(grid[x][y] == '#') break;
                    if(!Dfs(ref grid, new int[]{x, y}, mouse, p + 1)){
                        f[p, mx, my, cx, cy] = 0;
                        return false;
                    }
                    if(i == 4) break;
                }
            }
            f[p, mx, my, cx, cy] = 1;
            return true;
        }
    }
}
```