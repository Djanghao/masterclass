# DFS vs Union find+ Water Cell ||157ms Beats 99.43%

**Author:** anwendeng
**Votes:** 34
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5700149/](https://leetcode.com/problems/count-sub-islands/solutions/5700149/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
2 kinds of solutions are provided. It's very easy to find all islands in grid2. An island in grid2 is the so-called Sub-island iff every cell (i, j) has `grid1[i][j]=1`. How to put this equivalent statement inside the code is the key point to solve.
1. DFS transversal finds the sub-islands
2. Use UnionFind class with the trick adding 1 extra water cell; 1 pass solution. Every island which is not a Sub-Island should be connected to this water cell. This approach is quite unique & done in C++ & python.

DFS, BFS & UnionFind are doable like solving [200. Number of Islands](https://leetcode.com/problems/number-of-islands/solutions/5043549/dfs-bfs-union-find-count-components-15ms-beats-99-69/) 
# Approach
<!-- Describe your approach to solving the problem. -->
1. 1st solution uses DFS which is 1 pass solution.
2. Define the  function `bool dfs(int i, int j, int mark, vector<vector<int>>& grid1, vector<vector<int>>& grid2)` to detect the Sub-Island & mark the visited cells as `mark` to distinguish the different Islands in `grid2` with different `mark`. 
3. In `countSubIslands` , using a nested loop to transversal the matrix only when `grid2[i][j]==1` do `cnt+=dfs(i, j, mark++, grid1, grid2)`
4. `cnt` is the answer
5. 2nd approach is using UnionFind +1 extra water cell
6. UnionFind class is s implemented with `Size` optimization & 1 more `merge` member variable. This kind of UnionFind is used in solving [959. Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614770/unionfinddfs-euler-theorem-v-ef2beats-100/)
7. Put 1 more extra cell `N` as water cell
8. Transverse  the matrix with checking 2 adjacent cells down & right. If `grid1[i][j]==0 and grid2[i][j]==0`, connect `idx(i, j)` to `N`
9. The iteration in the loop is done as follows
```
int curr=idx(i, j), down=idx(i+1, j), right=idx(i, j+1);
bool g2=grid2[i][j]==1;
cntLand+=g2;
if(g2){
    //downward
    if (i+1<r && grid2[i+1][j])
        G.Union(curr, down);
    if (grid1[i][j]==0) //No sub-Island
        G.Union(curr, N);//connecting to water-cell N no sub-Island
                    
    //rightward
    if (j+1<c && grid2[i][j+1])
        G.Union(curr, right);
}
```
10. `cntLand-G.merge` is the answer
# Note on UnionFind
The UnionFind can be implemented by using rank. 
When `G.Union(x, y)` is true, `merge++`, so 1 less component.
All islands connecting to the special water cell N (non-sub-island island ) are counted as 1 component. That's the trick.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
DFS: $O(r\	imes c)$
Union find : $O(\\alpha(rc)rc)$ where $\\alpha$ is the inverse Ackermann function
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$ O(rc)$
# Code using DFS|| 161 ms Beats 99.14%
```cpp []
class Solution {
public:
    int r, c;
    const int d[5]={0,1,0,-1,0};
    inline bool outside(int i, int j){
        return i<0 ||i>=r||j<0 || j>=c;
    }
    bool dfs(int i, int j, int mark, vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
        if (grid1[i][j] != 1) return 0;

        grid2[i][j] = mark; // Mark as visited

        bool isSub=1;
        for (int a=0; a < 4; a++) {
            int s =i+d[a], t=j+d[a+1];
            if (outside(s, t) || grid2[s][t] != 1) continue;
            if (grid1[s][t]!=1) isSub=0;
            if (!dfs(s, t, mark, grid1, grid2)) 
                isSub=0;
        }
        return isSub;
    }

    int countSubIslands(vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
        r=grid1.size(), c=grid1[0].size();
        int cnt=0, mark=2;
        for(int i=0; i<r; i++){
            for(int j=0; j<c; j++){
                if (grid2[i][j]==1)
                    cnt+=dfs(i, j, mark++, grid1, grid2);
            }
        }
        return cnt;
    }
};


auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# C++ using UnionFind +1 extra water cell||157ms Beats 99.43%
```C++ []
// union find class with size
class UnionFind {
    vector<int> root, Size;
public:
    int merge;
    UnionFind(int N) : root(N), Size(N, 1), merge(0) {
        iota(root.begin(), root.end(), 0);
    }

    int Find(int x) {
        if (x == root[x]) return x;
        return root[x] = Find(root[x]); // Path compression
    }

    bool Union(int x, int y) {
        x = Find(x), y = Find(y);

        if (x == y) return 0;

        if (Size[x] > Size[y]) {
            Size[x] += Size[y];
            root[y] = x;
        } 
        else {
            Size[y] += Size[x];
            root[x] = y;
        }
        merge++;
        return 1;
    }
};
class Solution {
public:
    int r, c;
    inline int idx(int i, int j){ return i*c+j; }

    int countSubIslands(vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
        r=grid1.size(), c=grid1[0].size();
        int N=r*c;
        UnionFind G(N+1); // Put 1 more extra cell N as water
        int cntLand=0;
        for(int i=0; i<r; i++){
            for(int j=0; j<c; j++){
                int curr=idx(i, j), down=idx(i+1, j), right=idx(i, j+1);
                bool g2=grid2[i][j]==1;
                cntLand+=g2;
                if(g2){
                    //downward
                    if (i+1<r && grid2[i+1][j])
                        G.Union(curr, down);
                    if (grid1[i][j]==0) //No sub-Island
                        G.Union(curr, N);//connecting to water-cell N no sub-Island
                    //rightward
                    if (j+1<c && grid2[i][j+1])
                        G.Union(curr, right);
                }
                
            }
        }
    //    cout<<cntLand;
        return cntLand-G.merge;
    }
};


auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
```Python []
class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        r, c= len(grid1), len(grid1[0])
        N=r*c
        root=[i for i in range(N+1)]
        Size=[1]*(N+1)
        merge=0

        def Find(x):
            if x==root[x]: return x
            root[x]=Find(root[x])
            return root[x]
        
        def Union(x, y):
            nonlocal merge
            x, y=Find(x), Find(y)
            if x==y: return False
            if Size[x]>Size[y]:
                Size[x]+=Size[y]
                root[y]=x
            else:
                Size[y]+=Size[x]
                root[x]=y
            merge+=1
            return True
        def idx(i, j): return i*c+j

        cntLand=0
        for i, row in enumerate(grid2):
            for j, cell in enumerate(row):
                curr, down, right= idx(i, j), idx(i+1,j), idx(i, j+1)
                g2=cell==1
                cntLand+=g2
                if g2:
                    if i+1<r and grid2[i+1][j]:
                        Union(curr, down) 

                    if j+1<c and grid2[i][j+1]:
                        Union(curr, right)

                    if grid1[i][j]==0:
                        Union(curr, N) #connecting to water-cell N no sub-Island
        return cntLand-merge
                    
        
            
        
```
This kind of UnionFind is used in solving [959. Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614770/unionfinddfs-euler-theorem-v-ef2beats-100/)
[Please Turn on English subtitles if necessary]
[https://youtu.be/cR_D4uA3g3s?si=9dIX0sFQTQYwl1di](https://youtu.be/cR_D4uA3g3s?si=9dIX0sFQTQYwl1di)
