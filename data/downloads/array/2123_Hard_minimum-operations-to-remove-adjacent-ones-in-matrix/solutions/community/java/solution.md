# Concise Kuhn's algo 18ms (100%) Java

**Author:** Student2091
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/2189213/](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/2189213/)

---


**High Level Knowledge Needed**
- If we add an edge between any 1 and its 4 adjcent cells that are also 1, the question transforms into finding the minimum vertex cover.
- For a bipartite graph, the minimum vertex cover is the same as the maximum bipartite matching.
- Kuhn's algo is used to solve bipartite matching efficiently. 

**Some Details**
- The first implementation (21ms) is a standard Kuhn's algorithm implementation; the second way is (18ms).
- Memory limit is tight - I built the connection map between 1s first and instantly got MLE even though all test cases passsed.
- Instead of recreating a `seen` boolean 2D array for each DFS, we take advantage of "counting" technique to avoid reallocating `m*n` memory over and over.

Sumitted once at 21ms 95% Speed (06/23/2022).
```Java
class Solution {
    int[] dx = new int[]{0, 0, 1, -1};
    int[] dy = new int[]{1, -1, 0, 0};
    int m;
    int n;
    public int minimumOperations(int[][] grid) {
        m = grid.length;
        n = grid[0].length;
        int ans = 0, count = 0;
        int[][] match = new int[m][n];
        for (int i = 0; i < m; i++){
            Arrays.fill(match[i], -1);
        }
        int[][] seen = new int[m][n];
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                if (grid[i][j]>0&&dfs(i, j, ++count, grid, match, seen)){
                    ans++;
                }
            }
        }

        return ans/2; // divide by 2 because we want num of pairs.
    }

    private boolean dfs(int i, int j, int visited, int[][] grid, int[][] match, int[][] seen){
        if (seen[i][j] == visited)
            return false;
        seen[i][j]=visited;
        for (int k = 0; k < 4; k++){
            int x = i + dx[k];
            int y = j + dy[k];
            if (x < 0 || y < 0 || x == m || y == n || grid[x][y] == 0 || seen[x][y] == visited){
                continue;
            }
            if (match[x][y]==-1||dfs(match[x][y]/n, match[x][y]%n, visited, grid, match, seen)){
                match[x][y]=i*n+j;
                return true;
            }
        }
        return false;
    }
}
```

it can be further improved to 18ms:
```Java
class Solution {
    int[] dx = new int[]{0, 0, 1, -1};
    int[] dy = new int[]{1, -1, 0, 0};
    int m;
    int n;
    public int minimumOperations(int[][] grid) {
        m = grid.length;
        n = grid[0].length;
        int ans = 0, count = 0;
        int[][] match = new int[m][n];
        for (int i = 0; i < m; i++){
            Arrays.fill(match[i], -1);
        }
        int[][] seen = new int[m][n];
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                if (grid[i][j]>0&&match[i][j]==-1&&dfs(i, j, ++count, grid, match, seen)){
                    ans++;
                }
            }
        }

        return ans;
    }

    private boolean dfs(int i, int j, int visited, int[][] grid, int[][] match, int[][] seen){
        if (seen[i][j] == visited)
            return false;
        seen[i][j]=visited;
        for (int k = 0; k < 4; k++){
            int x = i + dx[k];
            int y = j + dy[k];
            if (x < 0 || y < 0 || x == m || y == n || grid[x][y] == 0 || seen[x][y] == visited){
                continue;
            }
            if (match[x][y]==-1||dfs(match[x][y]/n, match[x][y]%n, visited, grid, match, seen)){
                match[x][y]=i*n+j;
                match[i][j]=x*n+y;
                return true;
            }
        }
        return false;
    }
}
```