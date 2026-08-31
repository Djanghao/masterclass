# Rotate & Transpose

**Author:** Student2091
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/2173479/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/2173479/)

---

#### Solution 1 (Inspired by top-voted post)
```Java
class Solution {
    int m, n;
    int[][] grid;
    public int numDistinctIslands2(int[][] grid) {
        m = grid.length;
        n = grid[0].length;
        this.grid=grid;
        Set<String> seen = new HashSet<>();
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                if (grid[i][j] == 1){
                    List<int[]> cur = new ArrayList<>();
                    dfs(i, j, cur);
                    seen.add(norm(cur));
                }
            }
        }
        return seen.size();
    }

    private String norm(List<int[]> cur){
        int[][][] all = new int[8][cur.size()][];
        for (int i = 0; i < cur.size(); i++){
            int x = cur.get(i)[0], y = cur.get(i)[1];
            all[0][i] = new int[]{x, y};
            all[1][i] = new int[]{-x, y};
            all[2][i] = new int[]{x, -y};
            all[3][i] = new int[]{-x, -y};
            all[4][i] = new int[]{y, x};
            all[5][i] = new int[]{-y, x};
            all[6][i] = new int[]{y, -x};
            all[7][i] = new int[]{-y, -x};
        }
        String ans = "";
        for (int[][] a : all){
            Arrays.sort(a, Comparator.<int[]>comparingInt(o -> o[0]).thenComparingInt(o -> o[1]));
            StringBuilder sb = new StringBuilder();
            for (int i = a.length-1; i >= 0; i--){
                sb.append(String.format("(%d %d)", a[i][0]-a[0][0], a[i][1]-a[0][1]));
            }
            if (ans.isEmpty() || ans.compareTo(sb.toString()) > 0){
                ans = sb.toString();
            }
        }
        return ans;
    }

    private void dfs(int i, int j, List<int[]> cur){
        if (i < 0 || j < 0 || i == m || j == n || grid[i][j] == 0){
            return;
        }
        cur.add(new int[]{i, j});
        grid[i][j] = 0;
        dfs(i, j-1, cur);
        dfs(i, j+1, cur);
        dfs(i+1, j, cur);
        dfs(i-1, j, cur);
    }
}
```
#### Solution 2 - My first Attempt
I am lazy, so I figure I will write a transpose and rotate function.
Go through the grid 4 times with rotate, transpose it, then go through the grid with rotate 4 times again. 

I was expecting this to be slow but, to my surprise, it scores 100% speed at 35ms :D

**Some Details**

- Transpose + Rotate to handle reflection

- Union Find to group the same island together

- store a shape with **any** group id that has that shape.

- Group ID starts at 2 because 0 and 1 were already in use (hence the minus 2 in the end).

- Mark visited with a new group ID.

- A new group ID is generated such that new ID % total group size = ID.

- To score 35ms, use an int or long to hash, instead of stringbuilder.

Here is the stringbuilder hashing version. Even though it doesn't score 35ms, it is still 90% Speed.
I think it is easier to follow, hence using stringbuilder here.
```Java
class Solution {
    public int numDistinctIslands2(int[][] grid) {
        int id=2; // id -> union find final size.
        for (int i = 0; i < grid.length; i++){
            for (int j = 0; j < grid[0].length; j++){
                if (grid[i][j]==1){ // assign id to island
                    dfs(i, j, 'S', id++, grid, new StringBuilder());
                }
            }
        }
        UF uf = new UF(id);
        Map<String, Integer> map = new HashMap<>();
        for (int t = 0; t < 2; t++, grid=transpose(grid)){ // transpose
            for (int k = 0; k < 4; k++, grid=rotate(grid)){ // rotate
                for (int i = 0; i < grid.length; i++){
                    for (int j = 0; j < grid[0].length; j++){
                        if (grid[i][j]>=1 && grid[i][j] < (t*4+k+1)*id){ // if the id is within this range, we need to explore it.
                            StringBuilder sb = new StringBuilder();
                            int nid = grid[i][j] + id; // new group id
                            dfs(i, j, 'S', nid, grid, sb);
                            String hash = sb.toString();
                            if (map.containsKey(hash)){
                                uf.union(map.get(hash), nid%id);
                            }else{
                                map.put(hash, nid%id);
                            }
                        }
                    }
                }
            }
        }

        return uf.sz-2;
    }

    private void dfs(int i, int j, char ch, int id, int[][] grid, StringBuilder sb){
        if (i < 0 || j < 0 || i == grid.length || j == grid[0].length || grid[i][j]==0||grid[i][j]==id)
            return;
        sb.append(ch);
        grid[i][j]=id;
        dfs(i+1, j, 'U', id, grid, sb);
        dfs(i-1, j, 'D', id, grid, sb);
        dfs(i, j+1, 'R', id, grid, sb);
        dfs(i, j-1, 'L', id, grid, sb);
        sb.append('X');
    }

    private int[][] rotate(int[][] grid){
        int m = grid.length;
        int n = grid[0].length;
        int[][] next = new int[n][m];
        for (int i = 0; i < n; i++){
            for (int j = 0; j < m; j++){
                next[i][j]=grid[m-1-j][i];
            }
        }
        return next;
    }

    private int[][] transpose(int[][] grid){
        int m = grid.length;
        int n = grid[0].length;
        int[][] next = new int[n][m];
        for (int i = 0; i < n; i++){
            for (int j = 0; j < m; j++){
                next[i][j]=grid[j][i];
            }
        }
        return next;
    }

    private class UF {
        int[] parent;
        int[] rank;
        int sz;
        UF (int n){
            parent = IntStream.range(0, n).toArray();
            rank = new int[n];
            sz = n;
        }

        int find(int x){
            return x==parent[x]? x : (parent[x]=find(parent[x]));
        }

        void union(int x, int y){
            x = find(x);
            y = find(y);
            if (x == y)
                return;
            --sz;
            if (rank[x]>rank[y]){
                parent[y]=x;
            }else{
                parent[x]=y;
                if (rank[x]==rank[y]){
                    rank[y]++;
                }
            }
        }
    }
}
```