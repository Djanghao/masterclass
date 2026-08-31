# C# DFS + LCA

**Author:** enze_zhang
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3994990/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3994990/)

---

Free LCA template
O(logn) Query

# Code
```
public class Solution {
    const int N = (int)1e5 + 1;
    int[] h = new int[N], e = new int[N * 2], ne = new int[N * 2], w = new int[N];
    int[,] f = new int[N, 31], fa = new int[N, 31];
    int[] depth = new int[N];
    int idx = 0;
    
    public void Build(int u, int v, int c){
        e[idx] = v; ne[idx] = h[u]; w[idx] = c; h[u] = idx++;
        e[idx] = u; ne[idx] = h[v]; w[idx] = c; h[v] = idx++;
    }
    
    public void Bfs(int rt){
        Array.Fill(depth, int.MaxValue);
        depth[0] = 0;
        depth[rt] = 1;
        Queue<int> que = new();

        que.Enqueue(rt);
        while(que.Count > 0){
            int t = que.Dequeue();
            for(int i = h[t]; i != -1; i = ne[i]){
                int j = e[i];
                if(depth[j] > depth[t] + 1){ 
                    depth[j] = depth[t] + 1;  
                    que.Enqueue(j);
                    fa[j, 0] = t; 
                    for(int k = 1; k <= 15; k++){
                        fa[j, k] = fa[fa[j, k - 1], k - 1];
                    }
                }
            }
        }
    }
    
    public void Dfs(int u, int fa){
        for(int i = h[u]; i != -1; i = ne[i]){
            int v = e[i];
            if(v == fa) continue;
            f[v, w[i]] += 1; 
            for(int j = 1; j <= 26; j++){
                f[v, j] += f[u, j];
            }
            Dfs(v, u);
        }
    }

    public int Lca(int a, int b){
        if(depth[a] < depth[b]){
            int tmp = b;
            b = a;
            a = tmp;
        }
        for(int k = 15; k >=0; k--){
            if(depth[fa[a, k]] >= depth[b])
                a = fa[a, k];
        }
        if(a == b) return a;

        for(int k = 15; k >= 0; k--){
            if(fa[a, k] != fa[b, k]){
                a = fa[a, k];
                b = fa[b, k];
            }
        }
        return fa[a, 0];
    }
    
    public int[] MinOperationsQueries(int n, int[][] edges, int[][] queries) {
        Array.Fill(h, -1);
        for(int i = 0; i < edges.Length; i++){
            int a = edges[i][0], b = edges[i][1], c = edges[i][2];
            Build(a, b, c);
        }
        
        Bfs(0);
        Dfs(0, 0);
        List<int> ysy = new();
        for(int i = 0; i < queries.Length; i++){
            int u = queries[i][0], v = queries[i][1];
            int anc = Lca(u, v);
            int max = 0;
            for(int j = 1; j <= 26; j++){
                max = Math.Max(f[u, j] + f[v, j] - f[anc, j] * 2, max);
            }
            ysy.Add(depth[u] + depth[v] - 2 * depth[anc] - max);
        }
        return ysy.ToArray();
    }
}
```